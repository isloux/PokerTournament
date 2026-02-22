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

describe('structure management', () => {
  let tournament;

  beforeEach(() => {
    tournament = createTournament();
  });

  it('adds a round', () => {
    tournament.addRound({ smallBlind: 25, bigBlind: 50, ante: 0, duration: 20 });
    expect(tournament.structure).toHaveLength(1);
    expect(tournament.structure[0].type).toBe('round');
    expect(tournament.structure[0].level).toBe(1);
    expect(tournament.structure[0].smallBlind).toBe(25);
    expect(tournament.structure[0].bigBlind).toBe(50);
    expect(tournament.structure[0].duration).toBe(20);
  });

  it('auto-increments level numbers for rounds only', () => {
    tournament.addRound({ smallBlind: 25, bigBlind: 50, ante: 0, duration: 20 });
    tournament.addBreak(10);
    tournament.addRound({ smallBlind: 50, bigBlind: 100, ante: 0, duration: 20 });
    expect(tournament.structure[0].level).toBe(1);
    expect(tournament.structure[1].level).toBeUndefined();
    expect(tournament.structure[2].level).toBe(2);
  });

  it('adds a break', () => {
    tournament.addBreak(10);
    expect(tournament.structure).toHaveLength(1);
    expect(tournament.structure[0].type).toBe('break');
    expect(tournament.structure[0].duration).toBe(10);
  });

  it('removes a level by index', () => {
    tournament.addRound({ smallBlind: 25, bigBlind: 50, ante: 0, duration: 20 });
    tournament.addRound({ smallBlind: 50, bigBlind: 100, ante: 0, duration: 20 });
    tournament.removeLevel(0);
    expect(tournament.structure).toHaveLength(1);
    expect(tournament.structure[0].level).toBe(1);
  });

  it('moves a level up', () => {
    tournament.addRound({ smallBlind: 25, bigBlind: 50, ante: 0, duration: 20 });
    tournament.addRound({ smallBlind: 50, bigBlind: 100, ante: 0, duration: 20 });
    tournament.moveLevelUp(1);
    expect(tournament.structure[0].smallBlind).toBe(50);
    expect(tournament.structure[1].smallBlind).toBe(25);
  });

  it('moves a level down', () => {
    tournament.addRound({ smallBlind: 25, bigBlind: 50, ante: 0, duration: 20 });
    tournament.addRound({ smallBlind: 50, bigBlind: 100, ante: 0, duration: 20 });
    tournament.moveLevelDown(0);
    expect(tournament.structure[0].smallBlind).toBe(50);
    expect(tournament.structure[1].smallBlind).toBe(25);
  });

  it('loads a structure (from preset)', () => {
    const preset = [
      { type: 'round', smallBlind: 25, bigBlind: 50, ante: 0, duration: 15 },
      { type: 'break', duration: 10 },
      { type: 'round', smallBlind: 50, bigBlind: 100, ante: 0, duration: 15 },
    ];
    tournament.loadStructure(preset);
    expect(tournament.structure).toHaveLength(3);
    expect(tournament.structure[0].level).toBe(1);
    expect(tournament.structure[2].level).toBe(2);
  });
});
