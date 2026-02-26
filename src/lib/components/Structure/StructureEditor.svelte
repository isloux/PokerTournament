<script>
  import { tournament } from '$lib/stores/index.js';
  import { t } from '$lib/i18n/index.svelte.js';
  import Presets from './Presets.svelte';
  import LevelRow from './LevelRow.svelte';

  let newSmallBlind = $state(25);
  let newBigBlind = $state(50);
  let newAnte = $state(0);
  let newDuration = $state(20);
  let newBreakDuration = $state(10);

  const disabled = $derived(tournament.status !== 'setup');

  function addRound() {
    tournament.addRound({
      smallBlind: newSmallBlind,
      bigBlind: newBigBlind,
      ante: newAnte,
      duration: newDuration,
    });
    tournament.save();
  }

  function addBreak() {
    tournament.addBreak(newBreakDuration);
    tournament.save();
  }

  function remove(index) {
    tournament.removeLevel(index);
    tournament.save();
  }

  function moveUp(index) {
    tournament.moveLevelUp(index);
    tournament.save();
  }

  function moveDown(index) {
    tournament.moveLevelDown(index);
    tournament.save();
  }
</script>

{#if !disabled}
  <Presets />
{/if}

<div class="level-list">
  {#each tournament.structure as level, i}
    <LevelRow
      {level}
      index={i}
      onRemove={remove}
      onMoveUp={moveUp}
      onMoveDown={moveDown}
      isFirst={i === 0}
      isLast={i === tournament.structure.length - 1}
      {disabled}
    />
  {/each}
</div>

{#if !disabled}
  <div class="add-controls">
    <fieldset>
      <legend>{t('structure.addRound')}</legend>
      <label>{t('structure.small')} <input type="number" bind:value={newSmallBlind} min="1" /></label>
      <label>{t('structure.big')} <input type="number" bind:value={newBigBlind} min="1" /></label>
      <label>{t('structure.ante')} <input type="number" bind:value={newAnte} min="0" /></label>
      <label>{t('structure.duration')} <input type="number" bind:value={newDuration} min="1" /></label>
      <button onclick={addRound}>{t('structure.addRound')}</button>
    </fieldset>
    <fieldset>
      <legend>{t('structure.addBreak')}</legend>
      <label>{t('structure.duration')} <input type="number" bind:value={newBreakDuration} min="1" /></label>
      <button onclick={addBreak}>{t('structure.addBreak')}</button>
    </fieldset>
  </div>
{/if}

<style>
  .level-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .add-controls {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  fieldset {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  legend {
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0 0.25rem;
  }

  label {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  input[type="number"] {
    width: 60px;
    padding: 0.3rem;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
  }

  button {
    padding: 0.4rem 0.8rem;
    border: 1px solid #2563eb;
    background: #2563eb;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  button:hover { background: #1d4ed8; }
</style>
