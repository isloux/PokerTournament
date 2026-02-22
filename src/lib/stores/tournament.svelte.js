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
  };
}
