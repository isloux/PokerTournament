<script>
  import { tournament } from '$lib/stores/index.js';
  import { t } from '$lib/i18n/index.svelte.js';

  const standings = $derived(tournament.standings);

  function getPlayerName(id) {
    return tournament.players.find(p => p.id === id)?.name ?? '?';
  }
</script>

<div class="log">
  <h3>{t('elim.standings')}</h3>
  <table>
    <thead>
      <tr>
        <th>{t('elim.position')}</th>
        <th>{t('elim.player')}</th>
        <th>{t('elim.status')}</th>
        <th>{t('elim.eliminatedBy')}</th>
      </tr>
    </thead>
    <tbody>
      {#each standings as entry}
        <tr class:eliminated={entry.status === 'eliminated'}>
          <td>{entry.position}</td>
          <td>{entry.name}</td>
          <td>{entry.status === 'active' ? t('elim.playing') : t('elim.out')}</td>
          <td>
            {#if entry.status === 'eliminated'}
              {@const elim = tournament.eliminations.find(e => e.playerId === entry.id)}
              {elim?.eliminatedBy ? getPlayerName(elim.eliminatedBy) : '-'}
            {:else}
              -
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  h3 {
    font-size: 1rem;
    margin: 1.5rem 0 0.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    text-align: left;
    padding: 0.4rem 0.75rem;
    border-bottom: 2px solid #e2e8f0;
    font-size: 0.85rem;
    color: #64748b;
  }

  td {
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid #f1f5f9;
    font-size: 0.9rem;
  }

  .eliminated { opacity: 0.6; }
</style>
