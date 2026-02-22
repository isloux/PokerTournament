<script>
  import { tournament } from '$lib/stores/index.js';
  import { PRESETS, getPreset } from '$lib/utils/presets.js';

  const presetNames = Object.keys(PRESETS);

  function loadPreset(name) {
    const preset = getPreset(name);
    if (preset) {
      tournament.loadStructure(preset);
      tournament.save();
    }
  }
</script>

<div class="presets">
  <label>Load preset:</label>
  {#each presetNames as name}
    <button onclick={() => loadPreset(name)}>{name}</button>
  {/each}
</div>

<style>
  .presets {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  label {
    font-weight: 600;
    font-size: 0.9rem;
  }

  button {
    padding: 0.4rem 0.8rem;
    border: 1px solid #cbd5e1;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 0.85rem;
  }

  button:hover {
    background: #f1f5f9;
  }
</style>
