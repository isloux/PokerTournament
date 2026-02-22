<script>
  import TabBar from '$lib/components/TabBar.svelte';
  import StructureEditor from '$lib/components/Structure/StructureEditor.svelte';
  import PlayerList from '$lib/components/Players/PlayerList.svelte';
  import TableSetup from '$lib/components/Tables/TableSetup.svelte';
  import Clock from '$lib/components/Clock/Clock.svelte';
  import EliminationPanel from '$lib/components/Eliminations/EliminationPanel.svelte';

  const tabs = [
    { id: 'structure', label: 'Structure' },
    { id: 'players', label: 'Players' },
    { id: 'tables', label: 'Tables' },
    { id: 'clock', label: 'Clock' },
    { id: 'eliminations', label: 'Eliminations' },
  ];

  let activeTab = $state('structure');
</script>

<TabBar {tabs} bind:activeTab />

<div class="tab-content">
  {#if activeTab === 'structure'}
    <StructureEditor />
  {:else if activeTab === 'players'}
    <PlayerList />
  {:else if activeTab === 'tables'}
    <TableSetup />
  {:else if activeTab === 'clock'}
    <Clock />
  {:else if activeTab === 'eliminations'}
    <EliminationPanel />
  {/if}
</div>

<style>
  .tab-content {
    padding: 1.5rem 0;
  }
</style>
