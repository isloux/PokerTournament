import { describe, it, expect } from 'vitest';
import { PRESETS, getPreset } from './presets.js';

describe('presets', () => {
  it('has at least 2 presets', () => {
    expect(Object.keys(PRESETS).length).toBeGreaterThanOrEqual(2);
  });

  it('each preset has rounds and at least one break', () => {
    for (const [name, preset] of Object.entries(PRESETS)) {
      expect(preset.length).toBeGreaterThan(0);
      const hasRound = preset.some(l => l.type === 'round');
      const hasBreak = preset.some(l => l.type === 'break');
      expect(hasRound, `${name} should have rounds`).toBe(true);
      expect(hasBreak, `${name} should have breaks`).toBe(true);
    }
  });

  it('each round has required fields', () => {
    for (const preset of Object.values(PRESETS)) {
      for (const level of preset) {
        if (level.type === 'round') {
          expect(level).toHaveProperty('smallBlind');
          expect(level).toHaveProperty('bigBlind');
          expect(level).toHaveProperty('ante');
          expect(level).toHaveProperty('duration');
        } else {
          expect(level).toHaveProperty('duration');
        }
      }
    }
  });

  it('getPreset returns a deep copy', () => {
    const a = getPreset('quick');
    const b = getPreset('quick');
    expect(a).toEqual(b);
    a[0].smallBlind = 9999;
    expect(b[0].smallBlind).not.toBe(9999);
  });

  it('getPreset returns null for unknown preset', () => {
    expect(getPreset('nonexistent')).toBe(null);
  });
});
