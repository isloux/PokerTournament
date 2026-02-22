<script>
  import { tournament } from '$lib/stores/index.js';
  import { createAudioManager } from '$lib/utils/audio.js';
  import { onMount, onDestroy } from 'svelte';
  import LevelInfo from './LevelInfo.svelte';
  import Controls from './Controls.svelte';

  let audio = $state(null);
  let intervalId = null;

  onMount(() => {
    audio = createAudioManager();
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });

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

  function toggle() {
    if (tournament.structure.length === 0) return;

    if (!tournament.clock.isRunning) {
      if (tournament.status === 'setup') {
        tournament.status = 'running';
        tournament.clock.timeRemaining = currentLevel.duration * 60;
      }
      tournament.clock.isRunning = true;
      intervalId = setInterval(tick, 1000);
    } else {
      tournament.clock.isRunning = false;
      clearInterval(intervalId);
      intervalId = null;
    }
    tournament.save();
  }

  function tick() {
    if (tournament.clock.timeRemaining <= 0) {
      advanceLevel();
      return;
    }

    tournament.clock.timeRemaining--;

    if (tournament.clock.timeRemaining === 60 && audio) {
      audio.playWarning();
    }
  }

  function advanceLevel() {
    if (tournament.clock.currentLevelIndex >= tournament.structure.length - 1) {
      tournament.clock.isRunning = false;
      clearInterval(intervalId);
      intervalId = null;
      tournament.status = 'finished';
      tournament.save();
      return;
    }

    const wasBreak = currentLevel?.type === 'break';
    tournament.clock.currentLevelIndex++;
    const newLevel = tournament.structure[tournament.clock.currentLevelIndex];
    tournament.clock.timeRemaining = newLevel.duration * 60;

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
    tournament.clock.timeRemaining = currentLevel.duration * 60;
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
