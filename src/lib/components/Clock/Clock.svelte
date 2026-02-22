<script>
  import { tournament } from '$lib/stores/index.js';
  import { createAudioManager } from '$lib/utils/audio.js';
  import { onMount, onDestroy } from 'svelte';
  import LevelInfo from './LevelInfo.svelte';
  import Controls from './Controls.svelte';

  let audio = $state(null);
  let intervalId = null;

  // warningFired is a per-session, one-shot guard for the 60-second audio cue.
  // It does not need to survive tab switches (a re-mount resets it intentionally).
  let warningFired = false;

  onMount(() => {
    audio = createAudioManager();
    document.addEventListener('visibilitychange', onVisibilityChange);

    // The component is destroyed when the user leaves the Clock tab and
    // remounted when they return. The anchor (startTimestamp / timeRemainingAtStart)
    // lives in the persistent store, so it is still valid after remount.
    // Just restart the interval — no re-anchoring needed.
    if (tournament.clock.isRunning) {
      warningFired = tournament.clock.timeRemaining <= 60;
      intervalId = setInterval(tick, 500);
    }
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });

  // When the tab becomes visible again, run a reconciliation tick immediately
  // so the display snaps to the correct time without waiting for the next
  // scheduled interval fire.
  function onVisibilityChange() {
    if (!document.hidden && tournament.clock.isRunning) {
      tick();
    }
  }

  const currentLevel = $derived(tournament.structure[tournament.clock.currentLevelIndex]);
  const nextLevel = $derived(tournament.structure[tournament.clock.currentLevelIndex + 1]);
  const canPrev = $derived(tournament.clock.currentLevelIndex > 0);
  const canNext = $derived(tournament.clock.currentLevelIndex < tournament.structure.length - 1);
  const isBreak = $derived(currentLevel?.type === 'break');

  const minutes = $derived(Math.floor(tournament.clock.timeRemaining / 60));
  const seconds = $derived(tournament.clock.timeRemaining % 60);
  const display = $derived(
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  );

  function startInterval() {
    // Record the wall-clock anchor in the persistent store so the anchor
    // survives component destruction (tab switches) without drifting.
    tournament.clock.startTimestamp = Date.now();
    tournament.clock.timeRemainingAtStart = tournament.clock.timeRemaining;
    warningFired = tournament.clock.timeRemaining <= 60; // skip warning if already past it
    intervalId = setInterval(tick, 500); // poll at 500 ms for snappier display
  }

  function stopInterval() {
    clearInterval(intervalId);
    intervalId = null;
  }

  function toggle() {
    if (tournament.structure.length === 0) return;

    if (!tournament.clock.isRunning) {
      if (tournament.status === 'setup') {
        tournament.status = 'running';
        tournament.clock.timeRemaining = currentLevel.duration * 60;
      }
      tournament.clock.isRunning = true;
      startInterval();
    } else {
      tournament.clock.isRunning = false;
      stopInterval();
    }
    tournament.save();
  }

  function tick() {
    // Compute how many whole seconds have elapsed since the clock last started
    // or resumed. Reading from the store means this is correct even after a
    // component remount (tab switch) because the anchor survived destruction.
    const elapsedSeconds = Math.floor((Date.now() - tournament.clock.startTimestamp) / 1000);
    let remaining = tournament.clock.timeRemainingAtStart - elapsedSeconds;

    // Advance through as many levels as the elapsed time covers.
    while (remaining <= 0) {
      const levelIndex = tournament.clock.currentLevelIndex;

      if (levelIndex >= tournament.structure.length - 1) {
        // No more levels — end the tournament.
        tournament.clock.timeRemaining = 0;
        tournament.clock.isRunning = false;
        stopInterval();
        tournament.status = 'finished';
        tournament.save();
        return;
      }

      // Carry the overshoot into the next level.
      const wasBreak = tournament.structure[levelIndex]?.type === 'break';
      tournament.clock.currentLevelIndex++;
      const newLevel = tournament.structure[tournament.clock.currentLevelIndex];
      const newLevelDuration = newLevel.duration * 60;

      // remaining is negative (overshoot); add it to the new level's duration.
      remaining = newLevelDuration + remaining;

      // Re-anchor in the store so subsequent ticks (and any future remount) use the new level.
      tournament.clock.startTimestamp = Date.now() - (newLevelDuration - remaining) * 1000;
      tournament.clock.timeRemainingAtStart = newLevelDuration;
      warningFired = remaining <= 60;

      if (audio) {
        if (wasBreak) {
          audio.playBreakEnd();
        } else {
          audio.playRoundEnd();
        }
      }
      tournament.save();
    }

    // Play the one-minute warning exactly once per level.
    if (!warningFired && remaining <= 60 && audio) {
      audio.playWarning();
      warningFired = true;
    }

    tournament.clock.timeRemaining = remaining;
  }

  function advanceLevel() {
    const levelIndex = tournament.clock.currentLevelIndex;
    if (levelIndex >= tournament.structure.length - 1) {
      tournament.clock.isRunning = false;
      stopInterval();
      tournament.status = 'finished';
      tournament.save();
      return;
    }

    const wasBreak = tournament.structure[levelIndex]?.type === 'break';
    tournament.clock.currentLevelIndex++;
    const newLevel = tournament.structure[tournament.clock.currentLevelIndex];
    tournament.clock.timeRemaining = newLevel.duration * 60;

    // Re-anchor in the store so the new level's countdown starts from now.
    if (tournament.clock.isRunning) {
      tournament.clock.startTimestamp = Date.now();
      tournament.clock.timeRemainingAtStart = tournament.clock.timeRemaining;
      warningFired = false;
    }

    if (audio) {
      if (wasBreak) {
        audio.playBreakEnd();
      } else {
        audio.playRoundEnd();
      }
    }
    tournament.save();
  }

  function goToPrev() {
    if (!canPrev) return;
    tournament.clock.currentLevelIndex--;
    const level = tournament.structure[tournament.clock.currentLevelIndex];
    tournament.clock.timeRemaining = level.duration * 60;

    if (tournament.clock.isRunning) {
      tournament.clock.startTimestamp = Date.now();
      tournament.clock.timeRemainingAtStart = tournament.clock.timeRemaining;
      warningFired = false;
    }
    tournament.save();
  }

  function goToNext() {
    if (!canNext) return;
    advanceLevel();
  }
</script>

<div class="clock-tab" class:is-break={isBreak}>
  {#if tournament.structure.length === 0}
    <p class="empty">Set up the tournament structure first.</p>
  {:else}
    {#if isBreak}
      <div class="break-banner">BREAK</div>
    {/if}

    <LevelInfo level={currentLevel} label="Current" />

    <div class="timer">{display}</div>

    <LevelInfo level={nextLevel} label="Next" />

    <Controls
      isRunning={tournament.clock.isRunning}
      onToggle={toggle}
      onPrev={goToPrev}
      onNext={goToNext}
      {canPrev}
      {canNext}
      isMuted={audio?.isMuted ?? false}
      onToggleMute={() => audio?.toggleMute()}
    />
  {/if}
</div>

<style>
  .clock-tab {
    text-align: center;
    padding: 2rem 0;
  }

  .is-break {
    background: #f0fdf4;
    border-radius: 8px;
    padding: 2rem;
  }

  .break-banner {
    font-size: 1.5rem;
    font-weight: 700;
    color: #16a34a;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
  }

  .timer {
    font-size: 5rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    margin: 1rem 0;
    line-height: 1;
  }

  .empty { color: #94a3b8; }
</style>
