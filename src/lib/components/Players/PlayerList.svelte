<script>
  import { tournament } from '$lib/stores/index.js';
  import { t } from '$lib/i18n/index.svelte.js';

  let newName = $state('');
  let duplicateError = $state(false);

  function addPlayer() {
    const name = newName.trim();
    if (!name) return;
    if (tournament.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
      duplicateError = true;
      return;
    }
    duplicateError = false;
    tournament.addPlayer(name);
    tournament.save();
    newName = '';
  }

  function removePlayer(id) {
    tournament.removePlayer(id);
    tournament.save();
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') addPlayer();
  }

  const canRemove = $derived(tournament.status === 'setup');
</script>

<div class="players-tab">
  <div class="add-player">
    <input
      type="text"
      placeholder={t('players.placeholder')}
      bind:value={newName}
      oninput={() => duplicateError = false}
      onkeydown={handleKeydown}
    />
    <button onclick={addPlayer}>{t('players.add')}</button>
  </div>
  {#if duplicateError}
    <p class="error">{t('players.duplicateName')}</p>
  {/if}

  <p class="count">
    {t('players.count', { total: tournament.players.length, active: tournament.activePlayers.length })}
  </p>

  <ul class="player-list">
    {#each tournament.players as player}
      <li class:eliminated={player.status === 'eliminated'}>
        <span class="name">{player.name}</span>
        {#if player.status === 'eliminated'}
          <span class="status">{t('players.eliminated')}</span>
        {/if}
        {#if canRemove}
          <button class="remove" onclick={() => removePlayer(player.id)}>&times;</button>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .add-player {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.95rem;
  }

  .add-player button {
    padding: 0.5rem 1rem;
    border: 1px solid #2563eb;
    background: #2563eb;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  .error {
    color: #dc2626;
    font-size: 0.85rem;
    margin: -0.5rem 0 0.75rem;
  }

  .count {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }

  .player-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background: white;
    margin-bottom: 0.35rem;
  }

  li.eliminated {
    opacity: 0.5;
  }

  .name { flex: 1; }

  .status {
    font-size: 0.8rem;
    color: #dc2626;
  }

  .remove {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #94a3b8;
    padding: 0.1rem 0.4rem;
  }

  .remove:hover { color: #dc2626; }
</style>
