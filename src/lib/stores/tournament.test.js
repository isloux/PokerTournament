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

describe('elimination management', () => {
  let tournament;

  beforeEach(() => {
    tournament = createTournament();
    tournament.addPlayer('Alice');
    tournament.addPlayer('Bob');
    tournament.addPlayer('Charlie');
  });

  it('eliminates a player', () => {
    const alice = tournament.players[0];
    const bob = tournament.players[1];
    tournament.clock.currentLevelIndex = 2;
    tournament.eliminatePlayer(alice.id, bob.id);

    expect(alice.status).toBe('eliminated');
    expect(tournament.eliminations).toHaveLength(1);
    expect(tournament.eliminations[0].playerId).toBe(alice.id);
    expect(tournament.eliminations[0].eliminatedBy).toBe(bob.id);
    expect(tournament.eliminations[0].round).toBe(2);
  });

  it('eliminates a player without eliminator', () => {
    const alice = tournament.players[0];
    tournament.eliminatePlayer(alice.id, null);
    expect(tournament.eliminations[0].eliminatedBy).toBe(null);
  });

  it('computes standings in correct order', () => {
    const alice = tournament.players[0];
    const bob = tournament.players[1];
    const charlie = tournament.players[2];

    tournament.eliminatePlayer(alice.id, bob.id);
    tournament.eliminatePlayer(bob.id, charlie.id);

    const standings = tournament.standings;
    // Charlie is active (1st), Bob eliminated last (2nd), Alice first eliminated (3rd)
    expect(standings[0].name).toBe('Charlie');
    expect(standings[0].position).toBe(1);
    expect(standings[1].name).toBe('Bob');
    expect(standings[1].position).toBe(2);
    expect(standings[2].name).toBe('Alice');
    expect(standings[2].position).toBe(3);
  });
});

describe('localStorage persistence', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves state to localStorage', () => {
    const tournament = createTournament();
    tournament.name = 'Test Tournament';
    tournament.save();
    const stored = JSON.parse(localStorage.getItem('poker-tournament'));
    expect(stored.name).toBe('Test Tournament');
  });

  it('loads state from localStorage', () => {
    const data = {
      name: 'Saved Tournament',
      status: 'setup',
      tableSize: 6,
      finalTableThreshold: 9,
      structure: [],
      players: [],
      tables: [],
      eliminations: [],
      clock: { currentLevelIndex: 0, timeRemaining: 0, isRunning: false },
    };
    localStorage.setItem('poker-tournament', JSON.stringify(data));
    const tournament = createTournament();
    tournament.load();
    expect(tournament.name).toBe('Saved Tournament');
    expect(tournament.tableSize).toBe(6);
  });

  it('resets to initial state', () => {
    const tournament = createTournament();
    tournament.name = 'Test';
    tournament.addPlayer('Alice');
    tournament.reset();
    expect(tournament.name).toBe('');
    expect(tournament.players).toHaveLength(0);
  });
});
