import { describe, it, expect, beforeEach } from 'vitest';
import { createTournament } from './tournament.svelte.js';

describe('tournament store', () => {
  let tournament;

  beforeEach(() => {
    tournament = createTournament();
  });

  it('has correct initial state', () => {
    expect(tournament.name).toBe('');
    expect(tournament.status).toBe('setup');
    expect(tournament.tableSize).toBe(9);
    expect(tournament.finalTableThreshold).toBe(9);
    expect(tournament.structure).toEqual([]);
    expect(tournament.players).toEqual([]);
    expect(tournament.tables).toEqual([]);
    expect(tournament.eliminations).toEqual([]);
    expect(tournament.clock.currentLevelIndex).toBe(0);
    expect(tournament.clock.timeRemaining).toBe(0);
    expect(tournament.clock.isRunning).toBe(false);
  });
});
