<script>
  import TabBar from '$lib/components/TabBar.svelte';
  import StructureEditor from '$lib/components/Structure/StructureEditor.svelte';
  import PlayerList from '$lib/components/Players/PlayerList.svelte';
  import TableSetup from '$lib/components/Tables/TableSetup.svelte';
  import Clock from '$lib/components/Clock/Clock.svelte';
  import EliminationPanel from '$lib/components/Eliminations/EliminationPanel.svelte';
  import { t } from '$lib/i18n/index.svelte.js';

  const tabs = $derived([
    { id: 'structure', label: t('tabs.structure') },
    { id: 'players', label: t('tabs.players') },
    { id: 'tables', label: t('tabs.tables') },
    { id: 'clock', label: t('tabs.clock') },
    { id: 'eliminations', label: t('tabs.eliminations') },
  ]);

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
