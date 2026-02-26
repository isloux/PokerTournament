<script>
  import { t } from '$lib/i18n/index.svelte.js';
  let { isRunning, onToggle, onPrev, onNext, canPrev, canNext, isMuted, onToggleMute } = $props();
</script>

<div class="controls">
  <button onclick={onPrev} disabled={!canPrev} title={t('clock.prevLevel')}>&laquo; {t('clock.prev')}</button>
  <button class="play-pause" onclick={onToggle}>
    {isRunning ? t('clock.pause') : t('clock.play')}
  </button>
  <button onclick={onNext} disabled={!canNext} title={t('clock.nextLevel')}>{t('clock.next')} &raquo;</button>
  <button class="mute" onclick={onToggleMute} title={isMuted ? t('clock.unmute') : t('clock.mute')}>
    {isMuted ? t('clock.unmute') : t('clock.mute')}
  </button>
</div>

<style>
  .controls {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  button {
    padding: 0.6rem 1.25rem;
    border: 1px solid #cbd5e1;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95rem;
  }

  button:hover { background: #f1f5f9; }
  button:disabled { opacity: 0.3; cursor: default; }

  .play-pause {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
    min-width: 80px;
    font-weight: 600;
  }

  .play-pause:hover { background: #1d4ed8; }

  .mute {
    font-size: 0.85rem;
    color: #64748b;
  }
</style>
