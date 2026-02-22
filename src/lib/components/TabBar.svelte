<script>
  let { activeTab = $bindable('structure'), tabs } = $props();
</script>

<nav class="tab-bar">
  {#each tabs as tab}
    <button
      class="tab"
      class:active={activeTab === tab.id}
      onclick={() => activeTab = tab.id}
    >
      {tab.label}
    </button>
  {/each}
</nav>

<style>
  .tab-bar {
    display: flex;
    gap: 0;
    border-bottom: 2px solid #e2e8f0;
    padding: 0 1rem;
  }

  .tab {
    padding: 0.75rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 0.95rem;
    color: #64748b;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: color 0.15s, border-color 0.15s;
  }

  .tab:hover {
    color: #334155;
  }

  .tab.active {
    color: #0f172a;
    border-bottom-color: #2563eb;
    font-weight: 600;
  }
</style>
