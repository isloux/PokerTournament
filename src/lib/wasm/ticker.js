let wasmModule = null;
let loadFailed = false;

async function loadWasm() {
  if (wasmModule) return wasmModule;
  if (loadFailed) return null;

  try {
    const mod = await import('./ticker-pkg/ticker.js');
    await mod.default();
    wasmModule = mod;
    return wasmModule;
  } catch (e) {
    console.warn('WASM ticker unavailable, using JS fallback:', e);
    loadFailed = true;
    return null;
  }
}

/**
 * JS fallback implementation of process_tick, identical to the Rust version.
 */
function processTickJS(startTimestamp, currentLevelIndex, timeRemainingAtStart, structureDurations, structureTypesIsBreak) {
  const now = Date.now();
  let elapsed = Math.floor((now - startTimestamp) / 1000);
  let remaining = timeRemainingAtStart - elapsed;
  let playAudio = 0;
  let levelChanged = false;
  let newTimeRemainingAtStart = timeRemainingAtStart;
  const len = structureDurations.length;
  console.log("Attention je suis en javascript");

  while (remaining <= 0) {
    if (currentLevelIndex >= len - 1) {
      return { remaining: 0, time_remaining_at_start: 0, current_level_index: currentLevelIndex, start_timestamp: startTimestamp, finished: true, level_changed: true, play_audio: 0 };
    }

    const wasBreak = structureTypesIsBreak[currentLevelIndex];
    currentLevelIndex++;
    const newLevelDuration = structureDurations[currentLevelIndex] * 60;
    remaining = newLevelDuration + remaining;
    startTimestamp = now - (newLevelDuration - remaining) * 1000;
    newTimeRemainingAtStart = newLevelDuration;
    levelChanged = true;
    playAudio = wasBreak ? 1 : 2;
  }

  return { remaining, time_remaining_at_start: newTimeRemainingAtStart, current_level_index: currentLevelIndex, start_timestamp: startTimestamp, finished: false, level_changed: levelChanged, play_audio: playAudio };
}

/**
 * Process a clock tick. Uses WASM when available, JS fallback otherwise.
 * Returns { remaining, time_remaining_at_start, current_level_index, start_timestamp, finished, level_changed, play_audio }
 * play_audio: 0=none, 1=break_end, 2=round_end
 */
export async function processTick(startTimestamp, currentLevelIndex, timeRemainingAtStart, structureDurations, structureTypesIsBreak) {
  const mod = await loadWasm();

  if (mod) {
    const result = mod.process_tick(
      startTimestamp,
      currentLevelIndex,
      timeRemainingAtStart,
      new Int32Array(structureDurations),
      new Uint8Array(structureTypesIsBreak.map(b => b ? 1 : 0))
    );
    return {
      remaining: result.remaining,
      time_remaining_at_start: result.time_remaining_at_start,
      current_level_index: result.current_level_index,
      start_timestamp: result.start_timestamp,
      finished: result.finished,
      level_changed: result.level_changed,
      play_audio: result.play_audio,
    };
  }

  return processTickJS(startTimestamp, currentLevelIndex, timeRemainingAtStart, structureDurations, structureTypesIsBreak);
}
