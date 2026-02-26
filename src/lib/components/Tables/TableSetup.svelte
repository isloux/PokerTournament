<script>
  import { tournament } from '$lib/stores/index.js';
  import { assignTables } from '$lib/utils/tableAssignment.js';
  import { t } from '$lib/i18n/index.svelte.js';
  import TableView from './TableView.svelte';

  let notification = $state('');

  const canAssign = $derived(
    tournament.activePlayers.length >= 2 && tournament.status !== 'running'
  );

  function doAssign() {
    const result = assignTables(tournament.players, tournament.tableSize);
    tournament.tables = result.tables;
    tournament.save();
    notification = t('tables.assigned', { players: tournament.activePlayers.length, tables: result.tables.length });
    setTimeout(() => notification = '', 3000);
  }
</script>

<div class="table-setup">
  <div class="settings">
    <label>
      {t('tables.maxPerTable')}
      <input type="number" bind:value={tournament.tableSize} min="2" max="10" />
    </label>
    <label>
      {t('tables.finalTableAt')}
      <input type="number" bind:value={tournament.finalTableThreshold} min="2" max="20" />
      <span class="hint">{t('tables.players')}</span>
    </label>
  </div>

  <button class="assign-btn" onclick={doAssign} disabled={!canAssign}>
    {t('tables.assign')}
  </button>

  {#if notification}
    <p class="notification">{notification}</p>
  {/if}

  {#if tournament.tables.length > 0}
    <div class="tables-grid">
      {#each tournament.tables as table}
        <TableView {table} players={tournament.players} />
      {/each}
    </div>
  {:else}
    <p class="empty">{t('tables.empty')}</p>
  {/if}
</div>

<style>
  .settings {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
  }

  input[type="number"] {
    width: 55px;
    padding: 0.3rem;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
  }

  .hint { color: #94a3b8; font-size: 0.85rem; }

  .assign-btn {
    padding: 0.5rem 1.25rem;
    border: 1px solid #2563eb;
    background: #2563eb;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .assign-btn:hover { background: #1d4ed8; }
  .assign-btn:disabled { opacity: 0.4; cursor: default; }

  .notification {
    color: #16a34a;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .tables-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .empty { color: #94a3b8; }
</style>
