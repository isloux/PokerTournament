import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createAudioManager } from './audio.js';

function mockAudioContext() {
  const gainNode = { gain: { setValueAtTime: vi.fn() }, connect: vi.fn() };
  const oscillator = { type: '', frequency: { setValueAtTime: vi.fn() }, connect: vi.fn(), start: vi.fn(), stop: vi.fn() };
  return {
    createOscillator: vi.fn(() => oscillator),
    createGain: vi.fn(() => gainNode),
    destination: {},
    currentTime: 0,
    _oscillator: oscillator,
    _gainNode: gainNode,
  };
}

describe('audioManager', () => {
  let audio;
  let ctx;

  beforeEach(() => {
    ctx = mockAudioContext();
    audio = createAudioManager(ctx);
  });

  it('starts unmuted', () => {
    expect(audio.isMuted).toBe(false);
  });

  it('can be muted and unmuted', () => {
    audio.mute();
    expect(audio.isMuted).toBe(true);
    audio.unmute();
    expect(audio.isMuted).toBe(false);
  });

  it('toggles mute', () => {
    audio.toggleMute();
    expect(audio.isMuted).toBe(true);
    audio.toggleMute();
    expect(audio.isMuted).toBe(false);
  });

  it('plays round end sound when not muted', () => {
    audio.playRoundEnd();
    expect(ctx.createOscillator).toHaveBeenCalled();
  });

  it('does not play sound when muted', () => {
    audio.mute();
    audio.playRoundEnd();
    expect(ctx.createOscillator).not.toHaveBeenCalled();
  });
});
