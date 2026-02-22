<script>
  let { table, players } = $props();

  const seatedPlayers = $derived(
    players
      .filter(p => p.tableId === table.id && p.status === 'active')
      .sort((a, b) => a.seat - b.seat)
  );
</script>

<div class="table-view">
  <h3>{table.name}</h3>
  <p class="count">{seatedPlayers.length} / {table.seats} seats</p>
  <ul>
    {#each seatedPlayers as player}
      <li>Seat {player.seat}: {player.name}</li>
    {/each}
  </ul>
</div>

<style>
  .table-view {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 1rem;
    background: white;
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
  }

  .count {
    color: #64748b;
    font-size: 0.85rem;
    margin: 0 0 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    border-bottom: 1px solid #f1f5f9;
  }

  li:last-child { border-bottom: none; }
</style>
