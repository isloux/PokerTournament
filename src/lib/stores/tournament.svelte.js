function recalculateLevels(struct) {
  let levelNum = 1;
  for (const entry of struct) {
    if (entry.type === 'round') {
      entry.level = levelNum++;
    } else {
      delete entry.level;
    }
  }
  return struct;
}

export function createTournament() {
  let name = $state('');
  let status = $state('setup');
  let tableSize = $state(9);
  let finalTableThreshold = $state(9);
  let structure = $state([]);
  let players = $state([]);
  let tables = $state([]);
  let eliminations = $state([]);
  let clock = $state({
    currentLevelIndex: 0,
    timeRemaining: 0,
    isRunning: false,
    startTimestamp: 0,       // Date.now() when the clock last started/resumed or a new level began
    timeRemainingAtStart: 0, // timeRemaining at that moment
  });

  return {
    get name() { return name; },
    set name(v) { name = v; },
    get status() { return status; },
    set status(v) { status = v; },
    get tableSize() { return tableSize; },
    set tableSize(v) { tableSize = v; },
    get finalTableThreshold() { return finalTableThreshold; },
    set finalTableThreshold(v) { finalTableThreshold = v; },
    get structure() { return structure; },
    set structure(v) { structure = v; },
    get players() { return players; },
    set players(v) { players = v; },
    get tables() { return tables; },
    set tables(v) { tables = v; },
    get eliminations() { return eliminations; },
    set eliminations(v) { eliminations = v; },
    get clock() { return clock; },
    set clock(v) { clock = v; },

    addPlayer(playerName) {
      players.push({
        id: crypto.randomUUID(),
        name: playerName,
        status: 'active',
        tableId: null,
        seat: null,
      });
    },

    removePlayer(id) {
      players = players.filter(p => p.id !== id);
    },

    get activePlayers() {
      return players.filter(p => p.status === 'active');
    },

    addRound({ smallBlind, bigBlind, ante, duration }) {
      structure.push({ type: 'round', smallBlind, bigBlind, ante, duration, level: 0 });
      recalculateLevels(structure);
    },

    addBreak(duration) {
      structure.push({ type: 'break', duration });
    },

    removeLevel(index) {
      structure.splice(index, 1);
      recalculateLevels(structure);
    },

    moveLevelUp(index) {
      if (index <= 0) return;
      [structure[index - 1], structure[index]] = [structure[index], structure[index - 1]];
      recalculateLevels(structure);
    },

    moveLevelDown(index) {
      if (index >= structure.length - 1) return;
      [structure[index], structure[index + 1]] = [structure[index + 1], structure[index]];
      recalculateLevels(structure);
    },

    loadStructure(preset) {
      structure.length = 0;
      structure.push(...structuredClone(preset));
      recalculateLevels(structure);
    },

    eliminatePlayer(playerId, eliminatedById) {
      const player = players.find(p => p.id === playerId);
      if (!player || player.status !== 'active') return;

      player.status = 'eliminated';
      player.tableId = null;
      player.seat = null;

      eliminations.push({
        playerId,
        eliminatedBy: eliminatedById || null,
        round: clock.currentLevelIndex,
        timestamp: new Date().toISOString(),
      });
    },

    save() {
      const data = {
        name, status, tableSize, finalTableThreshold,
        structure: JSON.parse(JSON.stringify(structure)),
        players: JSON.parse(JSON.stringify(players)),
        tables: JSON.parse(JSON.stringify(tables)),
        eliminations: JSON.parse(JSON.stringify(eliminations)),
        clock: {
          currentLevelIndex: clock.currentLevelIndex,
          timeRemaining: clock.timeRemaining,
          isRunning: false,
          startTimestamp: clock.startTimestamp,
          timeRemainingAtStart: clock.timeRemainingAtStart,
        },
      };
      localStorage.setItem('poker-tournament', JSON.stringify(data));
    },

    load() {
      const stored = localStorage.getItem('poker-tournament');
      if (!stored) return;
      const data = JSON.parse(stored);
      name = data.name ?? '';
      status = data.status ?? 'setup';
      tableSize = data.tableSize ?? 9;
      finalTableThreshold = data.finalTableThreshold ?? 9;
      structure.length = 0;
      structure.push(...(data.structure ?? []));
      players.length = 0;
      players.push(...(data.players ?? []));
      tables.length = 0;
      tables.push(...(data.tables ?? []));
      eliminations.length = 0;
      eliminations.push(...(data.eliminations ?? []));
      clock.currentLevelIndex = data.clock?.currentLevelIndex ?? 0;
      clock.timeRemaining = data.clock?.timeRemaining ?? 0;
      clock.isRunning = false;
      clock.startTimestamp = data.clock?.startTimestamp ?? 0;
      clock.timeRemainingAtStart = data.clock?.timeRemainingAtStart ?? 0;
    },

    reset() {
      name = '';
      status = 'setup';
      tableSize = 9;
      finalTableThreshold = 9;
      structure.length = 0;
      players.length = 0;
      tables.length = 0;
      eliminations.length = 0;
      clock.currentLevelIndex = 0;
      clock.timeRemaining = 0;
      clock.isRunning = false;
      clock.startTimestamp = 0;
      clock.timeRemainingAtStart = 0;
      localStorage.removeItem('poker-tournament');
    },

    get standings() {
      const active = players
        .filter(p => p.status === 'active')
        .map(p => ({ ...p, position: null }));

      const eliminated = [...eliminations]
        .reverse()
        .map((e, i) => {
          const player = players.find(p => p.id === e.playerId);
          return { ...player, position: active.length + i + 1 };
        });

      active.forEach((p, i) => { p.position = i + 1; });

      if (active.length === 1) active[0].position = 1;

      return [...active, ...eliminated];
    },
  };
}
