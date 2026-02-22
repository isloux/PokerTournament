<script>
  import TabBar from '$lib/components/TabBar.svelte';
  import StructureEditor from '$lib/components/Structure/StructureEditor.svelte';

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
    <p>Players tab (coming soon)</p>
  {:else if activeTab === 'tables'}
    <p>Tables tab (coming soon)</p>
  {:else if activeTab === 'clock'}
    <p>Clock tab (coming soon)</p>
  {:else if activeTab === 'eliminations'}
    <p>Eliminations tab (coming soon)</p>
  {/if}
</div>

<style>
  .tab-content {
    padding: 1.5rem 0;
  }
</style>
