<script>
  import { t } from '$lib/i18n/index.svelte.js';
  let { level, label } = $props();
</script>

{#if level}
  <div class="level-info">
    <span class="label">{label}</span>
    {#if level.type === 'round'}
      <span class="blinds">{t('clock.blinds')}: {level.smallBlind}/{level.bigBlind}</span>
      {#if level.ante > 0}
        <span class="ante">{t('structure.ante')}: {level.ante}</span>
      {/if}
    {:else}
      <span class="break-text">{t('structure.break')}</span>
    {/if}
  </div>
{/if}

<style>
  .level-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }

  .label {
    font-weight: 600;
    font-size: 0.85rem;
    color: #64748b;
    text-transform: uppercase;
    min-width: 50px;
  }

  .blinds { font-size: 1.1rem; }
  .ante { color: #64748b; }
  .break-text { color: #16a34a; font-weight: 600; font-size: 1.1rem; }
</style>
