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
  };
}
