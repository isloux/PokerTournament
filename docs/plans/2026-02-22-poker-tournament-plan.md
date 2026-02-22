# Poker Tournament Supervisor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a client-side web app for managing small poker tournaments — structure, players, tables, clock, and eliminations.

**Architecture:** SvelteKit with Svelte 5 runes, single-page tab navigation, one reactive tournament store persisted to localStorage. Utility modules for table assignment, presets, and audio. Static adapter for deployment.

**Tech Stack:** SvelteKit, Svelte 5 (runes), Vitest, @testing-library/svelte, Web Audio API

---

### Task 1: Project Scaffolding

**Files:**
- Create: SvelteKit project at project root
- Create: `vitest.config.js`
- Modify: `package.json` (add test dependencies)

**Step 1: Create SvelteKit project**

Run:
```bash
cd /home/cramananjaona/Atelier/Claude/PokerTournament
npx sv create . --template minimal --types none
```

Select: Svelte 5, no TypeScript, no additional options.

If the interactive prompt blocks, use:
```bash
npm create svelte@latest tmp-scaffold -- --template minimal --types none
cp -r tmp-scaffold/* tmp-scaffold/.* . 2>/dev/null; rm -rf tmp-scaffold
```

**Step 2: Install dependencies**

Run:
```bash
npm install
npm install -D vitest @testing-library/svelte @testing-library/jest-dom jsdom @sveltejs/adapter-static
```

**Step 3: Configure Vitest**

Create `vitest.config.js`:
```javascript
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.js'],
    globals: true,
  },
});
```

**Step 4: Configure static adapter**

Edit `svelte.config.js`:
```javascript
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
  },
};

export default config;
```

**Step 5: Add test script to package.json**

Add to `"scripts"`:
```json
"test": "vitest run",
"test:watch": "vitest"
```

**Step 6: Create prerender config**

Create `src/routes/+layout.js`:
```javascript
export const prerender = true;
export const ssr = false;
```

**Step 7: Verify setup**

Run: `npm run build`
Expected: Build succeeds with static output in `build/`

Run: `npm test`
Expected: No tests found (passes with 0 tests)

**Step 8: Commit**

```bash
git add -A
git commit -m "chore: scaffold SvelteKit project with Vitest and static adapter"
```

---

### Task 2: Tournament Store — Core State

**Files:**
- Create: `src/lib/stores/tournament.svelte.js`
- Create: `src/lib/stores/tournament.test.js`

**Step 1: Write the failing test for initial state**

Create `src/lib/stores/tournament.test.js`:
```javascript
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
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: FAIL — module not found

**Step 3: Write minimal implementation**

Create `src/lib/stores/tournament.svelte.js`:
```javascript
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
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/stores/tournament.svelte.js src/lib/stores/tournament.test.js
git commit -m "feat: add tournament store with initial state"
```

---

### Task 3: Tournament Store — Player Management

**Files:**
- Modify: `src/lib/stores/tournament.svelte.js`
- Modify: `src/lib/stores/tournament.test.js`

**Step 1: Write failing tests for player management**

Add to `src/lib/stores/tournament.test.js`:
```javascript
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
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: FAIL — addPlayer is not a function

**Step 3: Write minimal implementation**

Add to the return object in `tournament.svelte.js`:
```javascript
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
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/stores/tournament.svelte.js src/lib/stores/tournament.test.js
git commit -m "feat: add player management to tournament store"
```

---

### Task 4: Tournament Store — Structure Management

**Files:**
- Modify: `src/lib/stores/tournament.svelte.js`
- Modify: `src/lib/stores/tournament.test.js`

**Step 1: Write failing tests**

Add to `src/lib/stores/tournament.test.js`:
```javascript
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
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: FAIL — addRound is not a function

**Step 3: Write minimal implementation**

Add a helper function and methods to `tournament.svelte.js`:

```javascript
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
```

Add to the return object:
```javascript
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
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/stores/tournament.svelte.js src/lib/stores/tournament.test.js
git commit -m "feat: add structure management to tournament store"
```

---

### Task 5: Presets Utility

**Files:**
- Create: `src/lib/utils/presets.js`
- Create: `src/lib/utils/presets.test.js`

**Step 1: Write failing tests**

Create `src/lib/utils/presets.test.js`:
```javascript
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
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/utils/presets.test.js`
Expected: FAIL — module not found

**Step 3: Write minimal implementation**

Create `src/lib/utils/presets.js`:
```javascript
export const PRESETS = {
  quick: [
    { type: 'round', smallBlind: 25, bigBlind: 50, ante: 0, duration: 10 },
    { type: 'round', smallBlind: 50, bigBlind: 100, ante: 0, duration: 10 },
    { type: 'break', duration: 5 },
    { type: 'round', smallBlind: 75, bigBlind: 150, ante: 0, duration: 10 },
    { type: 'round', smallBlind: 100, bigBlind: 200, ante: 25, duration: 10 },
    { type: 'break', duration: 5 },
    { type: 'round', smallBlind: 150, bigBlind: 300, ante: 25, duration: 10 },
    { type: 'round', smallBlind: 200, bigBlind: 400, ante: 50, duration: 10 },
  ],
  standard: [
    { type: 'round', smallBlind: 25, bigBlind: 50, ante: 0, duration: 20 },
    { type: 'round', smallBlind: 50, bigBlind: 100, ante: 0, duration: 20 },
    { type: 'round', smallBlind: 75, bigBlind: 150, ante: 0, duration: 20 },
    { type: 'break', duration: 10 },
    { type: 'round', smallBlind: 100, bigBlind: 200, ante: 25, duration: 20 },
    { type: 'round', smallBlind: 150, bigBlind: 300, ante: 25, duration: 20 },
    { type: 'round', smallBlind: 200, bigBlind: 400, ante: 50, duration: 20 },
    { type: 'break', duration: 10 },
    { type: 'round', smallBlind: 300, bigBlind: 600, ante: 75, duration: 20 },
    { type: 'round', smallBlind: 400, bigBlind: 800, ante: 100, duration: 20 },
    { type: 'round', smallBlind: 500, bigBlind: 1000, ante: 100, duration: 20 },
  ],
  deepStack: [
    { type: 'round', smallBlind: 25, bigBlind: 50, ante: 0, duration: 30 },
    { type: 'round', smallBlind: 50, bigBlind: 100, ante: 0, duration: 30 },
    { type: 'round', smallBlind: 75, bigBlind: 150, ante: 0, duration: 30 },
    { type: 'break', duration: 15 },
    { type: 'round', smallBlind: 100, bigBlind: 200, ante: 0, duration: 30 },
    { type: 'round', smallBlind: 150, bigBlind: 300, ante: 25, duration: 30 },
    { type: 'round', smallBlind: 200, bigBlind: 400, ante: 25, duration: 30 },
    { type: 'break', duration: 15 },
    { type: 'round', smallBlind: 300, bigBlind: 600, ante: 50, duration: 30 },
    { type: 'round', smallBlind: 400, bigBlind: 800, ante: 75, duration: 30 },
    { type: 'round', smallBlind: 500, bigBlind: 1000, ante: 100, duration: 30 },
    { type: 'break', duration: 15 },
    { type: 'round', smallBlind: 600, bigBlind: 1200, ante: 100, duration: 30 },
    { type: 'round', smallBlind: 800, bigBlind: 1600, ante: 200, duration: 30 },
  ],
};

export function getPreset(name) {
  if (!PRESETS[name]) return null;
  return structuredClone(PRESETS[name]);
}
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/utils/presets.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/utils/presets.js src/lib/utils/presets.test.js
git commit -m "feat: add tournament structure presets"
```

---

### Task 6: Table Assignment Utility

**Files:**
- Create: `src/lib/utils/tableAssignment.js`
- Create: `src/lib/utils/tableAssignment.test.js`

**Step 1: Write failing tests for initial assignment**

Create `src/lib/utils/tableAssignment.test.js`:
```javascript
import { describe, it, expect } from 'vitest';
import { assignTables, rebalanceTables, checkFinalTable } from './tableAssignment.js';

describe('assignTables', () => {
  function makePlayers(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: `p${i + 1}`,
      name: `Player ${i + 1}`,
      status: 'active',
      tableId: null,
      seat: null,
    }));
  }

  it('assigns 6 players to 1 table with tableSize 6', () => {
    const players = makePlayers(6);
    const { tables, players: seated } = assignTables(players, 6);
    expect(tables).toHaveLength(1);
    expect(seated.every(p => p.tableId === tables[0].id)).toBe(true);
    expect(seated.every(p => p.seat !== null)).toBe(true);
  });

  it('assigns 13 players to 3 tables with tableSize 6', () => {
    const players = makePlayers(13);
    const { tables, players: seated } = assignTables(players, 6);
    expect(tables).toHaveLength(3);
    const counts = tables.map(t => seated.filter(p => p.tableId === t.id).length);
    // Should be balanced: max difference of 1
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
  });

  it('assigns 20 players to 2 tables with tableSize 10', () => {
    const players = makePlayers(20);
    const { tables, players: seated } = assignTables(players, 10);
    expect(tables).toHaveLength(2);
  });

  it('gives each player a unique seat at their table', () => {
    const players = makePlayers(12);
    const { tables, players: seated } = assignTables(players, 6);
    for (const table of tables) {
      const seatsAtTable = seated.filter(p => p.tableId === table.id).map(p => p.seat);
      const uniqueSeats = new Set(seatsAtTable);
      expect(uniqueSeats.size).toBe(seatsAtTable.length);
    }
  });

  it('only assigns active players', () => {
    const players = makePlayers(6);
    players[0].status = 'eliminated';
    const { players: seated } = assignTables(players, 6);
    const assigned = seated.filter(p => p.tableId !== null);
    expect(assigned).toHaveLength(5);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/utils/tableAssignment.test.js`
Expected: FAIL — module not found

**Step 3: Write minimal implementation**

Create `src/lib/utils/tableAssignment.js`:
```javascript
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function assignTables(players, tableSize) {
  const activePlayers = players.filter(p => p.status === 'active');
  const shuffled = shuffle(activePlayers);
  const tableCount = Math.ceil(shuffled.length / tableSize);

  const tables = Array.from({ length: tableCount }, (_, i) => ({
    id: `t${i + 1}`,
    name: `Table ${i + 1}`,
    seats: tableSize,
  }));

  // Reset all players
  for (const p of players) {
    p.tableId = null;
    p.seat = null;
  }

  // Distribute evenly using round-robin
  shuffled.forEach((player, i) => {
    const tableIndex = i % tableCount;
    player.tableId = tables[tableIndex].id;
  });

  // Assign seat numbers per table
  for (const table of tables) {
    const tablePlayers = shuffled.filter(p => p.tableId === table.id);
    const seats = shuffle(Array.from({ length: tableSize }, (_, i) => i + 1));
    tablePlayers.forEach((p, i) => {
      p.seat = seats[i];
    });
  }

  return { tables, players };
}

export function rebalanceTables(players, tables) {
  const active = players.filter(p => p.status === 'active');
  const activeTables = tables.filter(t =>
    active.some(p => p.tableId === t.id)
  );

  const moves = [];

  // Close tables with 0-1 players
  for (const table of activeTables) {
    const tablePlayers = active.filter(p => p.tableId === table.id);
    if (tablePlayers.length <= 1 && activeTables.length > 1) {
      for (const p of tablePlayers) {
        const otherTables = activeTables.filter(t => t.id !== table.id);
        const smallest = otherTables.reduce((a, b) => {
          const aCount = active.filter(pl => pl.tableId === a.id).length;
          const bCount = active.filter(pl => pl.tableId === b.id).length;
          return aCount <= bCount ? a : b;
        });
        const usedSeats = active.filter(pl => pl.tableId === smallest.id).map(pl => pl.seat);
        const freeSeat = Array.from({ length: smallest.seats }, (_, i) => i + 1)
          .find(s => !usedSeats.includes(s));
        moves.push({ playerId: p.id, from: table.name, to: smallest.name });
        p.tableId = smallest.id;
        p.seat = freeSeat;
      }
    }
  }

  // Rebalance remaining tables
  const remainingTables = tables.filter(t =>
    active.some(p => p.tableId === t.id)
  );

  let balanced = false;
  while (!balanced) {
    const counts = remainingTables.map(t => ({
      table: t,
      count: active.filter(p => p.tableId === t.id).length,
    }));
    const max = counts.reduce((a, b) => (a.count >= b.count ? a : b));
    const min = counts.reduce((a, b) => (a.count <= b.count ? a : b));

    if (max.count - min.count > 1) {
      const playersAtMax = active.filter(p => p.tableId === max.table.id);
      const mover = playersAtMax[Math.floor(Math.random() * playersAtMax.length)];
      const usedSeats = active.filter(p => p.tableId === min.table.id).map(p => p.seat);
      const freeSeat = Array.from({ length: min.table.seats }, (_, i) => i + 1)
        .find(s => !usedSeats.includes(s));
      moves.push({ playerId: mover.id, from: max.table.name, to: min.table.name });
      mover.tableId = min.table.id;
      mover.seat = freeSeat;
    } else {
      balanced = true;
    }
  }

  return { moves, tables: remainingTables };
}

export function checkFinalTable(players, tables, finalTableThreshold) {
  const active = players.filter(p => p.status === 'active');
  if (active.length > finalTableThreshold) return null;

  const activeTables = tables.filter(t =>
    active.some(p => p.tableId === t.id)
  );
  if (activeTables.length <= 1) return null;

  // Merge to first table
  const finalTable = activeTables[0];
  finalTable.name = 'Final Table';
  const moves = [];

  for (const p of active) {
    if (p.tableId !== finalTable.id) {
      moves.push({ playerId: p.id, from: tables.find(t => t.id === p.tableId)?.name, to: 'Final Table' });
      p.tableId = finalTable.id;
    }
  }

  // Reassign seats at final table
  const seats = shuffle(Array.from({ length: finalTable.seats }, (_, i) => i + 1));
  active.forEach((p, i) => {
    p.seat = seats[i];
  });

  return { finalTable, moves };
}
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/utils/tableAssignment.test.js`
Expected: PASS

**Step 5: Write additional tests for rebalance and final table**

Add to `tableAssignment.test.js`:
```javascript
describe('rebalanceTables', () => {
  it('moves a player from largest to smallest table', () => {
    const tables = [
      { id: 't1', name: 'Table 1', seats: 6 },
      { id: 't2', name: 'Table 2', seats: 6 },
    ];
    // 5 at t1, 3 at t2 → should move 1 from t1 to t2
    const players = [
      { id: 'p1', status: 'active', tableId: 't1', seat: 1 },
      { id: 'p2', status: 'active', tableId: 't1', seat: 2 },
      { id: 'p3', status: 'active', tableId: 't1', seat: 3 },
      { id: 'p4', status: 'active', tableId: 't1', seat: 4 },
      { id: 'p5', status: 'active', tableId: 't1', seat: 5 },
      { id: 'p6', status: 'active', tableId: 't2', seat: 1 },
      { id: 'p7', status: 'active', tableId: 't2', seat: 2 },
      { id: 'p8', status: 'active', tableId: 't2', seat: 3 },
    ];
    const { moves } = rebalanceTables(players, tables);
    expect(moves).toHaveLength(1);
    expect(moves[0].from).toBe('Table 1');
    expect(moves[0].to).toBe('Table 2');
    const t1Count = players.filter(p => p.tableId === 't1').length;
    const t2Count = players.filter(p => p.tableId === 't2').length;
    expect(Math.abs(t1Count - t2Count)).toBeLessThanOrEqual(1);
  });
});

describe('checkFinalTable', () => {
  it('returns null when above threshold', () => {
    const players = Array.from({ length: 10 }, (_, i) => ({
      id: `p${i}`, status: 'active', tableId: i < 5 ? 't1' : 't2', seat: (i % 5) + 1,
    }));
    const tables = [
      { id: 't1', name: 'Table 1', seats: 6 },
      { id: 't2', name: 'Table 2', seats: 6 },
    ];
    expect(checkFinalTable(players, tables, 9)).toBe(null);
  });

  it('merges to final table at threshold', () => {
    const players = [
      { id: 'p1', status: 'active', tableId: 't1', seat: 1 },
      { id: 'p2', status: 'active', tableId: 't1', seat: 2 },
      { id: 'p3', status: 'active', tableId: 't2', seat: 1 },
      { id: 'p4', status: 'eliminated', tableId: null, seat: null },
    ];
    const tables = [
      { id: 't1', name: 'Table 1', seats: 6 },
      { id: 't2', name: 'Table 2', seats: 6 },
    ];
    const result = checkFinalTable(players, tables, 3);
    expect(result).not.toBe(null);
    expect(result.finalTable.name).toBe('Final Table');
    expect(players.filter(p => p.status === 'active').every(p => p.tableId === 't1')).toBe(true);
  });

  it('returns null if already on one table', () => {
    const players = [
      { id: 'p1', status: 'active', tableId: 't1', seat: 1 },
      { id: 'p2', status: 'active', tableId: 't1', seat: 2 },
    ];
    const tables = [{ id: 't1', name: 'Table 1', seats: 6 }];
    expect(checkFinalTable(players, tables, 6)).toBe(null);
  });
});
```

**Step 6: Run all tests**

Run: `npx vitest run src/lib/utils/tableAssignment.test.js`
Expected: PASS

**Step 7: Commit**

```bash
git add src/lib/utils/tableAssignment.js src/lib/utils/tableAssignment.test.js
git commit -m "feat: add table assignment, rebalancing, and final table logic"
```

---

### Task 7: Audio Utility

**Files:**
- Create: `src/lib/utils/audio.js`
- Create: `src/lib/utils/audio.test.js`

**Step 1: Write failing tests**

Create `src/lib/utils/audio.test.js`:
```javascript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createAudioManager } from './audio.js';

// Mock Web Audio API
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
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/utils/audio.test.js`
Expected: FAIL — module not found

**Step 3: Write minimal implementation**

Create `src/lib/utils/audio.js`:
```javascript
export function createAudioManager(audioContext = null) {
  let muted = false;
  let ctx = audioContext;

  function getContext() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctx;
  }

  function playTone(frequency, duration, type = 'sine') {
    if (muted) return;
    const context = getContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    gain.gain.setValueAtTime(0.3, context.currentTime);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
  }

  return {
    get isMuted() { return muted; },
    mute() { muted = true; },
    unmute() { muted = false; },
    toggleMute() { muted = !muted; },

    playRoundEnd() {
      playTone(880, 0.5);
    },

    playBreakEnd() {
      playTone(660, 0.5);
    },

    playWarning() {
      playTone(440, 0.3);
    },
  };
}
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/utils/audio.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/utils/audio.js src/lib/utils/audio.test.js
git commit -m "feat: add audio manager with Web Audio API tones"
```

---

### Task 8: Tournament Store — Elimination Logic

**Files:**
- Modify: `src/lib/stores/tournament.svelte.js`
- Modify: `src/lib/stores/tournament.test.js`

**Step 1: Write failing tests**

Add to `src/lib/stores/tournament.test.js`:
```javascript
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
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: FAIL — eliminatePlayer is not a function

**Step 3: Write minimal implementation**

Add to the return object in `tournament.svelte.js`:
```javascript
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

  // If only one active player, they are position 1
  if (active.length === 1) active[0].position = 1;

  return [...active, ...eliminated];
},
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/stores/tournament.svelte.js src/lib/stores/tournament.test.js
git commit -m "feat: add elimination logic and standings to tournament store"
```

---

### Task 9: Tournament Store — localStorage Persistence

**Files:**
- Modify: `src/lib/stores/tournament.svelte.js`
- Modify: `src/lib/stores/tournament.test.js`

**Step 1: Write failing tests**

Add to `src/lib/stores/tournament.test.js`:
```javascript
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
```

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: FAIL — save is not a function

**Step 3: Write minimal implementation**

Add to the return object in `tournament.svelte.js`:
```javascript
save() {
  const data = {
    name, status, tableSize, finalTableThreshold,
    structure: structuredClone(structure),
    players: structuredClone(players),
    tables: structuredClone(tables),
    eliminations: structuredClone(eliminations),
    clock: { ...clock, isRunning: false },
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
  localStorage.removeItem('poker-tournament');
},
```

**Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/stores/tournament.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/stores/tournament.svelte.js src/lib/stores/tournament.test.js
git commit -m "feat: add localStorage persistence to tournament store"
```

---

### Task 10: Singleton Store Instance & App Shell

**Files:**
- Create: `src/lib/stores/index.js`
- Modify: `src/routes/+layout.svelte`
- Modify: `src/routes/+page.svelte`
- Create: `src/lib/components/TabBar.svelte`

**Step 1: Create the singleton store export**

Create `src/lib/stores/index.js`:
```javascript
import { createTournament } from './tournament.svelte.js';

export const tournament = createTournament();
```

**Step 2: Create TabBar component**

Create `src/lib/components/TabBar.svelte`:
```svelte
<script>
  let { activeTab = $bindable('structure'), tabs } = $props();
</script>

<nav class="tab-bar">
  {#each tabs as tab}
    <button
      class="tab"
      class:active={activeTab === tab.id}
      onclick={() => activeTab = tab.id}
    >
      {tab.label}
    </button>
  {/each}
</nav>

<style>
  .tab-bar {
    display: flex;
    gap: 0;
    border-bottom: 2px solid #e2e8f0;
    padding: 0 1rem;
  }

  .tab {
    padding: 0.75rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 0.95rem;
    color: #64748b;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: color 0.15s, border-color 0.15s;
  }

  .tab:hover {
    color: #334155;
  }

  .tab.active {
    color: #0f172a;
    border-bottom-color: #2563eb;
    font-weight: 600;
  }
</style>
```

**Step 3: Update layout**

Modify `src/routes/+layout.svelte`:
```svelte
<script>
  import { tournament } from '$lib/stores/index.js';
  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    tournament.load();
  });
</script>

<div class="app">
  <header>
    <h1>Poker Tournament</h1>
  </header>
  <main>
    {@render children()}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f8fafc;
    color: #0f172a;
  }

  .app {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  header h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }
</style>
```

**Step 4: Update page with tab switching**

Modify `src/routes/+page.svelte`:
```svelte
<script>
  import TabBar from '$lib/components/TabBar.svelte';

  const tabs = [
    { id: 'structure', label: 'Structure' },
    { id: 'players', label: 'Players' },
    { id: 'tables', label: 'Tables' },
    { id: 'clock', label: 'Clock' },
    { id: 'eliminations', label: 'Eliminations' },
  ];

  let activeTab = $state('structure');
</script>

<TabBar {tabs} bind:activeTab />

<div class="tab-content">
  {#if activeTab === 'structure'}
    <p>Structure tab (coming soon)</p>
  {:else if activeTab === 'players'}
    <p>Players tab (coming soon)</p>
  {:else if activeTab === 'tables'}
    <p>Tables tab (coming soon)</p>
  {:else if activeTab === 'clock'}
    <p>Clock tab (coming soon)</p>
  {:else if activeTab === 'eliminations'}
    <p>Eliminations tab (coming soon)</p>
  {/if}
</div>

<style>
  .tab-content {
    padding: 1.5rem 0;
  }
</style>
```

**Step 5: Verify the app runs**

Run: `npm run dev`
Expected: App opens in browser showing tabs and placeholder content. Clicking tabs switches content.

**Step 6: Commit**

```bash
git add src/lib/stores/index.js src/lib/components/TabBar.svelte src/routes/+layout.svelte src/routes/+page.svelte
git commit -m "feat: add app shell with tab navigation"
```

---

### Task 11: Structure Tab UI

**Files:**
- Create: `src/lib/components/Structure/StructureEditor.svelte`
- Create: `src/lib/components/Structure/LevelRow.svelte`
- Create: `src/lib/components/Structure/Presets.svelte`
- Modify: `src/routes/+page.svelte`

**Step 1: Create Presets component**

Create `src/lib/components/Structure/Presets.svelte`:
```svelte
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
```

**Step 2: Create LevelRow component**

Create `src/lib/components/Structure/LevelRow.svelte`:
```svelte
<script>
  let { level, index, onRemove, onMoveUp, onMoveDown, isFirst, isLast, disabled } = $props();
</script>

<div class="level-row" class:is-break={level.type === 'break'}>
  {#if level.type === 'round'}
    <span class="level-num">Level {level.level}</span>
    <span class="blinds">{level.smallBlind}/{level.bigBlind}</span>
    <span class="ante">Ante: {level.ante}</span>
    <span class="duration">{level.duration} min</span>
  {:else}
    <span class="break-label">Break</span>
    <span class="duration">{level.duration} min</span>
  {/if}

  {#if !disabled}
    <div class="actions">
      <button onclick={() => onMoveUp(index)} disabled={isFirst} title="Move up">&uarr;</button>
      <button onclick={() => onMoveDown(index)} disabled={isLast} title="Move down">&darr;</button>
      <button class="remove" onclick={() => onRemove(index)} title="Remove">&times;</button>
    </div>
  {/if}
</div>

<style>
  .level-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background: white;
  }

  .is-break {
    background: #f0fdf4;
    border-color: #bbf7d0;
  }

  .level-num {
    font-weight: 600;
    min-width: 60px;
  }

  .break-label {
    font-weight: 600;
    color: #16a34a;
  }

  .blinds { min-width: 80px; }
  .ante { min-width: 70px; color: #64748b; font-size: 0.9rem; }
  .duration { color: #64748b; font-size: 0.9rem; }

  .actions {
    margin-left: auto;
    display: flex;
    gap: 0.25rem;
  }

  .actions button {
    padding: 0.2rem 0.5rem;
    border: 1px solid #cbd5e1;
    background: white;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  .actions button:hover { background: #f1f5f9; }
  .actions button:disabled { opacity: 0.3; cursor: default; }
  .remove:hover { background: #fef2f2; border-color: #fca5a5; color: #dc2626; }
</style>
```

**Step 3: Create StructureEditor component**

Create `src/lib/components/Structure/StructureEditor.svelte`:
```svelte
<script>
  import { tournament } from '$lib/stores/index.js';
  import Presets from './Presets.svelte';
  import LevelRow from './LevelRow.svelte';

  let newSmallBlind = $state(25);
  let newBigBlind = $state(50);
  let newAnte = $state(0);
  let newDuration = $state(20);
  let newBreakDuration = $state(10);

  const disabled = $derived(tournament.status !== 'setup');

  function addRound() {
    tournament.addRound({
      smallBlind: newSmallBlind,
      bigBlind: newBigBlind,
      ante: newAnte,
      duration: newDuration,
    });
    tournament.save();
  }

  function addBreak() {
    tournament.addBreak(newBreakDuration);
    tournament.save();
  }

  function remove(index) {
    tournament.removeLevel(index);
    tournament.save();
  }

  function moveUp(index) {
    tournament.moveLevelUp(index);
    tournament.save();
  }

  function moveDown(index) {
    tournament.moveLevelDown(index);
    tournament.save();
  }
</script>

{#if !disabled}
  <Presets />
{/if}

<div class="level-list">
  {#each tournament.structure as level, i}
    <LevelRow
      {level}
      index={i}
      onRemove={remove}
      onMoveUp={moveUp}
      onMoveDown={moveDown}
      isFirst={i === 0}
      isLast={i === tournament.structure.length - 1}
      {disabled}
    />
  {/each}
</div>

{#if !disabled}
  <div class="add-controls">
    <fieldset>
      <legend>Add Round</legend>
      <label>Small <input type="number" bind:value={newSmallBlind} min="1" /></label>
      <label>Big <input type="number" bind:value={newBigBlind} min="1" /></label>
      <label>Ante <input type="number" bind:value={newAnte} min="0" /></label>
      <label>Min <input type="number" bind:value={newDuration} min="1" /></label>
      <button onclick={addRound}>Add Round</button>
    </fieldset>
    <fieldset>
      <legend>Add Break</legend>
      <label>Min <input type="number" bind:value={newBreakDuration} min="1" /></label>
      <button onclick={addBreak}>Add Break</button>
    </fieldset>
  </div>
{/if}

<style>
  .level-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .add-controls {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  fieldset {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  legend {
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0 0.25rem;
  }

  label {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  input[type="number"] {
    width: 60px;
    padding: 0.3rem;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
  }

  button {
    padding: 0.4rem 0.8rem;
    border: 1px solid #2563eb;
    background: #2563eb;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  button:hover { background: #1d4ed8; }
</style>
```

**Step 4: Wire into page**

Modify `src/routes/+page.svelte` — replace the structure placeholder:
```svelte
<script>
  import TabBar from '$lib/components/TabBar.svelte';
  import StructureEditor from '$lib/components/Structure/StructureEditor.svelte';

  // ... keep existing tabs and activeTab ...
</script>
```

Replace `{#if activeTab === 'structure'}` block:
```svelte
  {#if activeTab === 'structure'}
    <StructureEditor />
```

**Step 5: Verify in browser**

Run: `npm run dev`
Expected: Structure tab shows preset buttons, add round/break forms. Loading a preset populates the list. Add/remove/reorder work.

**Step 6: Commit**

```bash
git add src/lib/components/Structure/ src/routes/+page.svelte
git commit -m "feat: add structure tab with presets, rounds, and breaks"
```

---

### Task 12: Players Tab UI

**Files:**
- Create: `src/lib/components/Players/PlayerList.svelte`
- Modify: `src/routes/+page.svelte`

**Step 1: Create PlayerList component**

Create `src/lib/components/Players/PlayerList.svelte`:
```svelte
<script>
  import { tournament } from '$lib/stores/index.js';

  let newName = $state('');

  function addPlayer() {
    const name = newName.trim();
    if (!name) return;
    tournament.addPlayer(name);
    tournament.save();
    newName = '';
  }

  function removePlayer(id) {
    tournament.removePlayer(id);
    tournament.save();
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') addPlayer();
  }

  const canRemove = $derived(tournament.status === 'setup');
</script>

<div class="players-tab">
  <div class="add-player">
    <input
      type="text"
      placeholder="Player name"
      bind:value={newName}
      onkeydown={handleKeydown}
    />
    <button onclick={addPlayer}>Add Player</button>
  </div>

  <p class="count">
    {tournament.players.length} players registered
    ({tournament.activePlayers.length} active)
  </p>

  <ul class="player-list">
    {#each tournament.players as player}
      <li class:eliminated={player.status === 'eliminated'}>
        <span class="name">{player.name}</span>
        {#if player.status === 'eliminated'}
          <span class="status">Eliminated</span>
        {/if}
        {#if canRemove}
          <button class="remove" onclick={() => removePlayer(player.id)}>&times;</button>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .add-player {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.95rem;
  }

  .add-player button {
    padding: 0.5rem 1rem;
    border: 1px solid #2563eb;
    background: #2563eb;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  .count {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }

  .player-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background: white;
    margin-bottom: 0.35rem;
  }

  li.eliminated {
    opacity: 0.5;
  }

  .name { flex: 1; }

  .status {
    font-size: 0.8rem;
    color: #dc2626;
  }

  .remove {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #94a3b8;
    padding: 0.1rem 0.4rem;
  }

  .remove:hover { color: #dc2626; }
</style>
```

**Step 2: Wire into page**

Modify `src/routes/+page.svelte` — add import and replace players placeholder:
```svelte
import PlayerList from '$lib/components/Players/PlayerList.svelte';
```

```svelte
  {:else if activeTab === 'players'}
    <PlayerList />
```

**Step 3: Verify in browser**

Run: `npm run dev`
Expected: Players tab shows input, can add/remove players. Count updates.

**Step 4: Commit**

```bash
git add src/lib/components/Players/ src/routes/+page.svelte
git commit -m "feat: add players tab with registration and removal"
```

---

### Task 13: Tables Tab UI

**Files:**
- Create: `src/lib/components/Tables/TableSetup.svelte`
- Create: `src/lib/components/Tables/TableView.svelte`
- Modify: `src/routes/+page.svelte`

**Step 1: Create TableView component**

Create `src/lib/components/Tables/TableView.svelte`:
```svelte
<script>
  let { table, players } = $props();

  const seatedPlayers = $derived(
    players
      .filter(p => p.tableId === table.id && p.status === 'active')
      .sort((a, b) => a.seat - b.seat)
  );
</script>

<div class="table-view">
  <h3>{table.name}</h3>
  <p class="count">{seatedPlayers.length} / {table.seats} seats</p>
  <ul>
    {#each seatedPlayers as player}
      <li>Seat {player.seat}: {player.name}</li>
    {/each}
  </ul>
</div>

<style>
  .table-view {
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 1rem;
    background: white;
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
  }

  .count {
    color: #64748b;
    font-size: 0.85rem;
    margin: 0 0 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    border-bottom: 1px solid #f1f5f9;
  }

  li:last-child { border-bottom: none; }
</style>
```

**Step 2: Create TableSetup component**

Create `src/lib/components/Tables/TableSetup.svelte`:
```svelte
<script>
  import { tournament } from '$lib/stores/index.js';
  import { assignTables } from '$lib/utils/tableAssignment.js';
  import TableView from './TableView.svelte';

  let notification = $state('');

  const canAssign = $derived(
    tournament.activePlayers.length >= 2 && tournament.status !== 'running'
  );

  function doAssign() {
    const result = assignTables(tournament.players, tournament.tableSize);
    tournament.tables = result.tables;
    tournament.save();
    notification = `Assigned ${tournament.activePlayers.length} players to ${result.tables.length} table(s).`;
    setTimeout(() => notification = '', 3000);
  }
</script>

<div class="table-setup">
  <div class="settings">
    <label>
      Max players per table:
      <input type="number" bind:value={tournament.tableSize} min="2" max="10" />
    </label>
    <label>
      Final table at:
      <input type="number" bind:value={tournament.finalTableThreshold} min="2" max="20" />
      <span class="hint">players</span>
    </label>
  </div>

  <button class="assign-btn" onclick={doAssign} disabled={!canAssign}>
    Assign Tables
  </button>

  {#if notification}
    <p class="notification">{notification}</p>
  {/if}

  {#if tournament.tables.length > 0}
    <div class="tables-grid">
      {#each tournament.tables as table}
        <TableView {table} players={tournament.players} />
      {/each}
    </div>
  {:else}
    <p class="empty">No tables assigned yet. Register players and click "Assign Tables".</p>
  {/if}
</div>

<style>
  .settings {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
  }

  input[type="number"] {
    width: 55px;
    padding: 0.3rem;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
  }

  .hint { color: #94a3b8; font-size: 0.85rem; }

  .assign-btn {
    padding: 0.5rem 1.25rem;
    border: 1px solid #2563eb;
    background: #2563eb;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .assign-btn:hover { background: #1d4ed8; }
  .assign-btn:disabled { opacity: 0.4; cursor: default; }

  .notification {
    color: #16a34a;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .tables-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .empty { color: #94a3b8; }
</style>
```

**Step 3: Wire into page**

Modify `src/routes/+page.svelte` — add import and replace tables placeholder:
```svelte
import TableSetup from '$lib/components/Tables/TableSetup.svelte';
```

```svelte
  {:else if activeTab === 'tables'}
    <TableSetup />
```

**Step 4: Verify in browser**

Run: `npm run dev`
Expected: Tables tab shows settings, assign button. After adding players and assigning, tables display with seated players.

**Step 5: Commit**

```bash
git add src/lib/components/Tables/ src/routes/+page.svelte
git commit -m "feat: add tables tab with assignment and table display"
```

---

### Task 14: Clock Tab UI

**Files:**
- Create: `src/lib/components/Clock/Clock.svelte`
- Create: `src/lib/components/Clock/LevelInfo.svelte`
- Create: `src/lib/components/Clock/Controls.svelte`
- Modify: `src/routes/+page.svelte`

**Step 1: Create LevelInfo component**

Create `src/lib/components/Clock/LevelInfo.svelte`:
```svelte
<script>
  let { level, label } = $props();
</script>

{#if level}
  <div class="level-info">
    <span class="label">{label}</span>
    {#if level.type === 'round'}
      <span class="blinds">Blinds: {level.smallBlind}/{level.bigBlind}</span>
      {#if level.ante > 0}
        <span class="ante">Ante: {level.ante}</span>
      {/if}
    {:else}
      <span class="break-text">Break</span>
    {/if}
  </div>
{/if}

<style>
  .level-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label {
    font-weight: 600;
    font-size: 0.85rem;
    color: #64748b;
    text-transform: uppercase;
    min-width: 50px;
  }

  .blinds { font-size: 1.1rem; }
  .ante { color: #64748b; }
  .break-text { color: #16a34a; font-weight: 600; font-size: 1.1rem; }
</style>
```

**Step 2: Create Controls component**

Create `src/lib/components/Clock/Controls.svelte`:
```svelte
<script>
  let { isRunning, onToggle, onPrev, onNext, canPrev, canNext, isMuted, onToggleMute } = $props();
</script>

<div class="controls">
  <button onclick={onPrev} disabled={!canPrev} title="Previous level">&laquo; Prev</button>
  <button class="play-pause" onclick={onToggle}>
    {isRunning ? 'Pause' : 'Play'}
  </button>
  <button onclick={onNext} disabled={!canNext} title="Next level">Next &raquo;</button>
  <button class="mute" onclick={onToggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
    {isMuted ? 'Unmute' : 'Mute'}
  </button>
</div>

<style>
  .controls {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  button {
    padding: 0.6rem 1.25rem;
    border: 1px solid #cbd5e1;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95rem;
  }

  button:hover { background: #f1f5f9; }
  button:disabled { opacity: 0.3; cursor: default; }

  .play-pause {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
    min-width: 80px;
    font-weight: 600;
  }

  .play-pause:hover { background: #1d4ed8; }

  .mute {
    font-size: 0.85rem;
    color: #64748b;
  }
</style>
```

**Step 3: Create Clock component**

Create `src/lib/components/Clock/Clock.svelte`:
```svelte
<script>
  import { tournament } from '$lib/stores/index.js';
  import { createAudioManager } from '$lib/utils/audio.js';
  import { onMount, onDestroy } from 'svelte';
  import LevelInfo from './LevelInfo.svelte';
  import Controls from './Controls.svelte';

  let audio = $state(null);
  let intervalId = null;

  onMount(() => {
    audio = createAudioManager();
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });

  const currentLevel = $derived(tournament.structure[tournament.clock.currentLevelIndex]);
  const nextLevel = $derived(tournament.structure[tournament.clock.currentLevelIndex + 1]);
  const canPrev = $derived(tournament.clock.currentLevelIndex > 0);
  const canNext = $derived(tournament.clock.currentLevelIndex < tournament.structure.length - 1);
  const isBreak = $derived(currentLevel?.type === 'break');

  const minutes = $derived(Math.floor(tournament.clock.timeRemaining / 60));
  const seconds = $derived(tournament.clock.timeRemaining % 60);
  const display = $derived(
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  );

  function toggle() {
    if (tournament.structure.length === 0) return;

    if (!tournament.clock.isRunning) {
      // Starting
      if (tournament.status === 'setup') {
        tournament.status = 'running';
        tournament.clock.timeRemaining = currentLevel.duration * 60;
      }
      tournament.clock.isRunning = true;
      intervalId = setInterval(tick, 1000);
    } else {
      // Pausing
      tournament.clock.isRunning = false;
      clearInterval(intervalId);
      intervalId = null;
    }
    tournament.save();
  }

  function tick() {
    if (tournament.clock.timeRemaining <= 0) {
      advanceLevel();
      return;
    }

    tournament.clock.timeRemaining--;

    if (tournament.clock.timeRemaining === 60 && audio) {
      audio.playWarning();
    }
  }

  function advanceLevel() {
    if (tournament.clock.currentLevelIndex >= tournament.structure.length - 1) {
      // Last level — stop
      tournament.clock.isRunning = false;
      clearInterval(intervalId);
      intervalId = null;
      tournament.status = 'finished';
      tournament.save();
      return;
    }

    const wasBreak = currentLevel?.type === 'break';
    tournament.clock.currentLevelIndex++;
    const newLevel = tournament.structure[tournament.clock.currentLevelIndex];
    tournament.clock.timeRemaining = newLevel.duration * 60;

    if (audio) {
      if (wasBreak) {
        audio.playBreakEnd();
      } else {
        audio.playRoundEnd();
      }
    }
    tournament.save();
  }

  function goToPrev() {
    if (!canPrev) return;
    tournament.clock.currentLevelIndex--;
    tournament.clock.timeRemaining = currentLevel.duration * 60;
    tournament.save();
  }

  function goToNext() {
    if (!canNext) return;
    advanceLevel();
  }
</script>

<div class="clock-tab" class:is-break={isBreak}>
  {#if tournament.structure.length === 0}
    <p class="empty">Set up the tournament structure first.</p>
  {:else}
    {#if isBreak}
      <div class="break-banner">BREAK</div>
    {/if}

    <LevelInfo level={currentLevel} label="Current" />

    <div class="timer">{display}</div>

    <LevelInfo level={nextLevel} label="Next" />

    <Controls
      isRunning={tournament.clock.isRunning}
      onToggle={toggle}
      onPrev={goToPrev}
      onNext={goToNext}
      {canPrev}
      {canNext}
      isMuted={audio?.isMuted ?? false}
      onToggleMute={() => audio?.toggleMute()}
    />
  {/if}
</div>

<style>
  .clock-tab {
    text-align: center;
    padding: 2rem 0;
  }

  .is-break {
    background: #f0fdf4;
    border-radius: 8px;
    padding: 2rem;
  }

  .break-banner {
    font-size: 1.5rem;
    font-weight: 700;
    color: #16a34a;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
  }

  .timer {
    font-size: 5rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    margin: 1rem 0;
    line-height: 1;
  }

  .empty { color: #94a3b8; }
</style>
```

**Step 4: Wire into page**

Modify `src/routes/+page.svelte` — add import and replace clock placeholder:
```svelte
import Clock from '$lib/components/Clock/Clock.svelte';
```

```svelte
  {:else if activeTab === 'clock'}
    <Clock />
```

**Step 5: Verify in browser**

Run: `npm run dev`
Expected: Clock tab shows timer, blinds info. Play/Pause starts/stops the countdown. Audio plays on transitions.

**Step 6: Commit**

```bash
git add src/lib/components/Clock/ src/routes/+page.svelte
git commit -m "feat: add clock tab with timer, level display, and audio alerts"
```

---

### Task 15: Eliminations Tab UI

**Files:**
- Create: `src/lib/components/Eliminations/EliminationPanel.svelte`
- Create: `src/lib/components/Eliminations/EliminationLog.svelte`
- Modify: `src/routes/+page.svelte`

**Step 1: Create EliminationLog component**

Create `src/lib/components/Eliminations/EliminationLog.svelte`:
```svelte
<script>
  import { tournament } from '$lib/stores/index.js';

  const standings = $derived(tournament.standings);

  function getPlayerName(id) {
    return tournament.players.find(p => p.id === id)?.name ?? '?';
  }
</script>

<div class="log">
  <h3>Standings</h3>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Player</th>
        <th>Status</th>
        <th>Eliminated By</th>
      </tr>
    </thead>
    <tbody>
      {#each standings as entry}
        <tr class:eliminated={entry.status === 'eliminated'}>
          <td>{entry.position}</td>
          <td>{entry.name}</td>
          <td>{entry.status === 'active' ? 'Playing' : 'Out'}</td>
          <td>
            {#if entry.status === 'eliminated'}
              {@const elim = tournament.eliminations.find(e => e.playerId === entry.id)}
              {elim?.eliminatedBy ? getPlayerName(elim.eliminatedBy) : '-'}
            {:else}
              -
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  h3 {
    font-size: 1rem;
    margin: 1.5rem 0 0.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    text-align: left;
    padding: 0.4rem 0.75rem;
    border-bottom: 2px solid #e2e8f0;
    font-size: 0.85rem;
    color: #64748b;
  }

  td {
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid #f1f5f9;
    font-size: 0.9rem;
  }

  .eliminated { opacity: 0.6; }
</style>
```

**Step 2: Create EliminationPanel component**

Create `src/lib/components/Eliminations/EliminationPanel.svelte`:
```svelte
<script>
  import { tournament } from '$lib/stores/index.js';
  import { rebalanceTables, checkFinalTable } from '$lib/utils/tableAssignment.js';
  import EliminationLog from './EliminationLog.svelte';

  let selectedPlayer = $state('');
  let eliminatedBy = $state('');
  let notification = $state('');

  const activePlayers = $derived(tournament.activePlayers);

  function eliminate() {
    if (!selectedPlayer) return;

    tournament.eliminatePlayer(selectedPlayer, eliminatedBy || null);

    // Check final table first
    const finalResult = checkFinalTable(
      tournament.players,
      tournament.tables,
      tournament.finalTableThreshold
    );

    if (finalResult) {
      notification = `Final Table! ${finalResult.moves.length} player(s) moved.`;
    } else {
      // Rebalance
      const { moves } = rebalanceTables(tournament.players, tournament.tables);
      if (moves.length > 0) {
        notification = moves.map(m =>
          `${tournament.players.find(p => p.id === m.playerId)?.name} moved from ${m.from} to ${m.to}`
        ).join('. ');
      } else {
        notification = '';
      }
    }

    tournament.save();
    selectedPlayer = '';
    eliminatedBy = '';

    // Check if tournament is over (1 player left)
    if (tournament.activePlayers.length === 1) {
      notification = `Tournament over! Winner: ${tournament.activePlayers[0].name}`;
      tournament.status = 'finished';
      tournament.save();
    }

    if (notification) setTimeout(() => notification = '', 5000);
  }
</script>

<div class="elimination-panel">
  {#if activePlayers.length > 1}
    <div class="form">
      <label>
        Eliminated:
        <select bind:value={selectedPlayer}>
          <option value="">Select player...</option>
          {#each activePlayers as player}
            <option value={player.id}>{player.name}</option>
          {/each}
        </select>
      </label>

      <label>
        By:
        <select bind:value={eliminatedBy}>
          <option value="">Optional...</option>
          {#each activePlayers.filter(p => p.id !== selectedPlayer) as player}
            <option value={player.id}>{player.name}</option>
          {/each}
        </select>
      </label>

      <button onclick={eliminate} disabled={!selectedPlayer}>Eliminate</button>
    </div>
  {:else if activePlayers.length === 1}
    <p class="winner">Winner: {activePlayers[0].name}</p>
  {:else}
    <p class="empty">No active players.</p>
  {/if}

  {#if notification}
    <p class="notification">{notification}</p>
  {/if}

  <EliminationLog />
</div>

<style>
  .form {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
  }

  select {
    padding: 0.4rem;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: 1px solid #dc2626;
    background: #dc2626;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover { background: #b91c1c; }
  button:disabled { opacity: 0.4; cursor: default; }

  .notification {
    color: #2563eb;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .winner {
    font-size: 1.25rem;
    font-weight: 700;
    color: #16a34a;
  }

  .empty { color: #94a3b8; }
</style>
```

**Step 3: Wire into page**

Modify `src/routes/+page.svelte` — add import and replace eliminations placeholder:
```svelte
import EliminationPanel from '$lib/components/Eliminations/EliminationPanel.svelte';
```

```svelte
  {:else if activeTab === 'eliminations'}
    <EliminationPanel />
```

**Step 4: Verify in browser**

Run: `npm run dev`
Expected: Eliminations tab shows dropdown to select player, optional "by" dropdown, eliminate button. Standings table updates. Rebalancing notifications appear.

**Step 5: Commit**

```bash
git add src/lib/components/Eliminations/ src/routes/+page.svelte
git commit -m "feat: add eliminations tab with standings and auto-rebalancing"
```

---

### Task 16: Final Integration & Polish

**Files:**
- Modify: `src/routes/+page.svelte` (final version with all imports)

**Step 1: Verify final +page.svelte has all imports**

The final `src/routes/+page.svelte` should be:
```svelte
<script>
  import TabBar from '$lib/components/TabBar.svelte';
  import StructureEditor from '$lib/components/Structure/StructureEditor.svelte';
  import PlayerList from '$lib/components/Players/PlayerList.svelte';
  import TableSetup from '$lib/components/Tables/TableSetup.svelte';
  import Clock from '$lib/components/Clock/Clock.svelte';
  import EliminationPanel from '$lib/components/Eliminations/EliminationPanel.svelte';

  const tabs = [
    { id: 'structure', label: 'Structure' },
    { id: 'players', label: 'Players' },
    { id: 'tables', label: 'Tables' },
    { id: 'clock', label: 'Clock' },
    { id: 'eliminations', label: 'Eliminations' },
  ];

  let activeTab = $state('structure');
</script>

<TabBar {tabs} bind:activeTab />

<div class="tab-content">
  {#if activeTab === 'structure'}
    <StructureEditor />
  {:else if activeTab === 'players'}
    <PlayerList />
  {:else if activeTab === 'tables'}
    <TableSetup />
  {:else if activeTab === 'clock'}
    <Clock />
  {:else if activeTab === 'eliminations'}
    <EliminationPanel />
  {/if}
</div>

<style>
  .tab-content {
    padding: 1.5rem 0;
  }
</style>
```

**Step 2: Run all tests**

Run: `npx vitest run`
Expected: All tests pass

**Step 3: Run the build**

Run: `npm run build`
Expected: Build succeeds, static files in `build/`

**Step 4: Manual smoke test**

Run: `npm run dev`

Test the full flow:
1. Structure tab: load "standard" preset, verify rounds and breaks appear
2. Players tab: add 12 players by name
3. Tables tab: set table size to 6, final table at 9, click "Assign Tables" — see 2 tables
4. Clock tab: press Play, verify countdown starts, pause and resume
5. Eliminations tab: eliminate 4 players, verify rebalancing and final table trigger at 8→no, then continue until 9 triggers final table
6. Refresh page — verify state persists from localStorage

**Step 5: Commit**

```bash
git add src/routes/+page.svelte
git commit -m "feat: complete integration of all tabs"
```

---

### Task 17: Run Full Test Suite & Final Commit

**Step 1: Run all tests**

Run: `npx vitest run`
Expected: All tests pass

**Step 2: Run build**

Run: `npm run build`
Expected: Clean build

**Step 3: Final commit if any remaining changes**

```bash
git status
# If any unstaged changes:
git add -A
git commit -m "chore: final cleanup"
```
