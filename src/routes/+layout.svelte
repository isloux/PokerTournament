<script>
  import { tournament } from '$lib/stores/index.js';
  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    tournament.load();
  });
</script>

<div class="app">
  <header>
    <h1>Poker Tournament</h1>
  </header>
  <main>
    {@render children()}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f8fafc;
    color: #0f172a;
  }

  .app {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  header h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
</style>
