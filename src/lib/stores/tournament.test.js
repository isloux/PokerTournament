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

describe('player management', () => {
  let tournament;

  beforeEach(() => {
    tournament = createTournament();
  });

  it('adds a player', () => {
    tournament.addPlayer('Alice');
    expect(tournament.players).toHaveLength(1);
    expect(tournament.players[0].name).toBe('Alice');
    expect(tournament.players[0].status).toBe('active');
    expect(tournament.players[0].tableId).toBe(null);
    expect(tournament.players[0].seat).toBe(null);
  });

  it('generates unique ids for players', () => {
    tournament.addPlayer('Alice');
    tournament.addPlayer('Bob');
    expect(tournament.players[0].id).not.toBe(tournament.players[1].id);
  });

  it('removes a player by id', () => {
    tournament.addPlayer('Alice');
    const id = tournament.players[0].id;
    tournament.removePlayer(id);
    expect(tournament.players).toHaveLength(0);
  });

  it('returns active players only', () => {
    tournament.addPlayer('Alice');
    tournament.addPlayer('Bob');
    tournament.players[0].status = 'eliminated';
    expect(tournament.activePlayers).toHaveLength(1);
    expect(tournament.activePlayers[0].name).toBe('Bob');
  });
});
