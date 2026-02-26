<script>
  import { tournament } from '$lib/stores/index.js';
  import { t, toggleLocale, getLocale } from '$lib/i18n/index.svelte.js';
  import { onMount } from 'svelte';

  let { children } = $props();
  let confirming = $state(false);

  onMount(() => {
    tournament.load();
  });

  $effect(() => {
    document.documentElement.lang = getLocale();
  });

  function reset() {
    tournament.reset();
    confirming = false;
  }
</script>

<div class="app">
  <header>
    <h1>{t('app.title')}</h1>
    <div class="header-actions">
      <button class="lang-toggle" onclick={toggleLocale}>
        {getLocale() === 'en' ? 'FR' : 'EN'}
      </button>
      {#if confirming}
        <span class="confirm-prompt">
          {t('app.areYouSure')}
          <button class="confirm" onclick={reset}>{t('app.confirm')}</button>
          <button class="cancel" onclick={() => confirming = false}>{t('app.cancel')}</button>
        </span>
      {:else}
        <button class="new-tournament" onclick={() => confirming = true}>{t('app.newTournament')}</button>
      {/if}
    </div>
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

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1rem;
  }

  header h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  .confirm-prompt {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .new-tournament, .confirm, .cancel {
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .new-tournament {
    border: 1px solid #cbd5e1;
    background: white;
    color: #475569;
  }

  .new-tournament:hover { background: #f1f5f9; }

  .confirm {
    border: 1px solid #dc2626;
    background: #dc2626;
    color: white;
  }

  .confirm:hover { background: #b91c1c; }

  .cancel {
    border: 1px solid #cbd5e1;
    background: white;
    color: #475569;
  }

  .cancel:hover { background: #f1f5f9; }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .lang-toggle {
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: pointer;
    border: 1px solid #cbd5e1;
    background: white;
    color: #475569;
    font-weight: 600;
  }

  .lang-toggle:hover { background: #f1f5f9; }
</style>
