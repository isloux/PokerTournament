<script>
  let { level, index, onRemove, onMoveUp, onMoveDown, isFirst, isLast, disabled } = $props();
</script>

<div class="level-row" class:is-break={level.type === 'break'}>
  {#if level.type === 'round'}
    <span class="level-num">Level {level.level}</span>
    <span class="blinds">{level.smallBlind}/{level.bigBlind}</span>
    <span class="ante">Ante: {level.ante}</span>
    <span class="duration">{level.duration} min</span>
  {:else}
    <span class="break-label">Break</span>
    <span class="duration">{level.duration} min</span>
  {/if}

  {#if !disabled}
    <div class="actions">
      <button onclick={() => onMoveUp(index)} disabled={isFirst} title="Move up">&uarr;</button>
      <button onclick={() => onMoveDown(index)} disabled={isLast} title="Move down">&darr;</button>
      <button class="remove" onclick={() => onRemove(index)} title="Remove">&times;</button>
    </div>
  {/if}
</div>

<style>
  .level-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background: white;
  }

  .is-break {
    background: #f0fdf4;
    border-color: #bbf7d0;
  }

  .level-num {
    font-weight: 600;
    min-width: 60px;
  }

  .break-label {
    font-weight: 600;
    color: #16a34a;
  }

  .blinds { min-width: 80px; }
  .ante { min-width: 70px; color: #64748b; font-size: 0.9rem; }
  .duration { color: #64748b; font-size: 0.9rem; }

  .actions {
    margin-left: auto;
    display: flex;
    gap: 0.25rem;
  }

  .actions button {
    padding: 0.2rem 0.5rem;
    border: 1px solid #cbd5e1;
    background: white;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  .actions button:hover { background: #f1f5f9; }
  .actions button:disabled { opacity: 0.3; cursor: default; }
  .remove:hover { background: #fef2f2; border-color: #fca5a5; color: #dc2626; }
</style>
