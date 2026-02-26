<script>
  import { tournament } from '$lib/stores/index.js';
  import { rebalanceTables, checkFinalTable } from '$lib/utils/tableAssignment.js';
  import { t } from '$lib/i18n/index.svelte.js';
  import EliminationLog from './EliminationLog.svelte';

  let selectedPlayer = $state('');
  let eliminatedBy = $state('');
  let notification = $state('');

  const activePlayers = $derived(tournament.activePlayers);

  // Candidates for "eliminated by": only active players excluding the one being eliminated.
  const eliminatedByOptions = $derived(
    activePlayers.filter(p => p.id !== selectedPlayer)
  );

  function eliminate() {
    if (!selectedPlayer || !eliminatedBy) return;

    tournament.eliminatePlayer(selectedPlayer, eliminatedBy);

    // Check final table first
    const finalResult = checkFinalTable(
      tournament.players,
      tournament.tables,
      tournament.finalTableThreshold
    );

    if (finalResult) {
      notification = t('elim.finalTable', { count: finalResult.moves.length });
    } else {
      // Rebalance
      const { moves } = rebalanceTables(tournament.players, tournament.tables);
      if (moves.length > 0) {
        notification = moves.map(m =>
          t('elim.moved', { name: tournament.players.find(p => p.id === m.playerId)?.name, from: m.from, to: m.to })
        ).join('. ');
      } else {
        notification = '';
      }
    }

    tournament.save();
    selectedPlayer = '';
    eliminatedBy = '';

    // Check if tournament is over (1 player left)
    if (tournament.activePlayers.length === 1) {
      notification = t('elim.tournamentOver', { name: tournament.activePlayers[0].name });
      tournament.status = 'finished';
      tournament.save();
    }

    if (notification) setTimeout(() => notification = '', 5000);
  }
</script>

<div class="elimination-panel">
  {#if activePlayers.length > 1}
    <div class="form">
      <label>
        {t('elim.eliminated')}
        <select bind:value={selectedPlayer}>
          <option value="">{t('elim.selectPlayer')}</option>
          {#each activePlayers as player}
            <option value={player.id}>{player.name}</option>
          {/each}
        </select>
      </label>

      <label>
        {t('elim.by')}
        <select bind:value={eliminatedBy}>
          <option value="">{t('elim.selectEliminator')}</option>
          {#each eliminatedByOptions as player}
            <option value={player.id}>{player.name}</option>
          {/each}
        </select>
      </label>

      <button onclick={eliminate} disabled={!selectedPlayer || !eliminatedBy}>{t('elim.eliminate')}</button>
    </div>
  {:else if activePlayers.length === 1}
    <p class="winner">{t('elim.winner', { name: activePlayers[0].name })}</p>
  {:else}
    <p class="empty">{t('elim.noActive')}</p>
  {/if}

  {#if notification}
    <p class="notification">{notification}</p>
  {/if}

  <EliminationLog />
</div>

<style>
  .form {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
  }

  select {
    padding: 0.4rem;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: 1px solid #dc2626;
    background: #dc2626;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover { background: #b91c1c; }
  button:disabled { opacity: 0.4; cursor: default; }

  .notification {
    color: #2563eb;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .winner {
    font-size: 1.25rem;
    font-weight: 700;
    color: #16a34a;
  }

  .empty { color: #94a3b8; }
</style>
