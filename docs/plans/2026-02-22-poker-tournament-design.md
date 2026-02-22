# Poker Tournament Supervisor — Design Document

**Goal:** A web-based poker tournament management app for small home games (up to 20 players, 1-3 tables).

**Tech Stack:** SvelteKit + Svelte 5 (runes), static adapter, localStorage for persistence.

**Approach:** Single-page app with tab switching (not route-per-tab). All tabs share one reactive tournament store.

---

## Data Model

```javascript
tournament = {
  name: "Friday Night Poker",
  status: "setup" | "running" | "finished",
  tableSize: 6,              // max players per table
  finalTableThreshold: 9,    // merge to 1 table at this player count

  structure: [
    { type: "round", level: 1, smallBlind: 25, bigBlind: 50, ante: 0, duration: 20 },
    { type: "break", duration: 10 },
    { type: "round", level: 2, smallBlind: 50, bigBlind: 100, ante: 0, duration: 20 },
  ],

  players: [
    { id: "p1", name: "Alice", status: "active" | "eliminated", tableId: "t1", seat: 3 },
  ],

  tables: [
    { id: "t1", name: "Table 1", seats: 6 },
  ],

  eliminations: [
    { playerId: "p1", eliminatedBy: "p2", round: 3, timestamp: "..." },
  ],

  clock: {
    currentLevelIndex: 0,
    timeRemaining: 1200,     // seconds remaining in current level
    isRunning: false,
  }
}
```

- Finishing positions are derived from elimination order (not stored).
- Presets are static data: 2-3 predefined structure arrays.

---

## Application Structure

```
src/
  lib/
    stores/
      tournament.svelte.js      # Reactive state ($state rune) + localStorage sync
    components/
      TabBar.svelte              # Tab navigation
      Structure/
        StructureEditor.svelte   # Add/edit/reorder rounds and breaks
        LevelRow.svelte          # Single round or break row
        Presets.svelte           # Preset selector
      Players/
        PlayerList.svelte        # Register/remove players
        PlayerRow.svelte         # Single player entry
      Tables/
        TableSetup.svelte        # Configure table size, trigger random assignment
        TableView.svelte         # Single table with seated players
      Clock/
        Clock.svelte             # Main timer display
        LevelInfo.svelte         # Current/next level blinds display
        Controls.svelte          # Play/pause/next/previous controls
      Eliminations/
        EliminationPanel.svelte  # Record eliminations
        EliminationLog.svelte    # History + standings
    utils/
      tableAssignment.js         # Random seating + rebalancing algorithm
      presets.js                 # Tournament structure presets
      audio.js                   # Sound alert management (Web Audio API)
  routes/
    +layout.svelte               # Shell with TabBar
    +page.svelte                 # Main page, renders active tab content
```

Single-page tab switching (not SvelteKit route-per-tab) because:
- All tabs share the same tournament state
- Clock must keep running regardless of active tab
- Eliminations immediately affect table state

---

## Table Assignment & Rebalancing

### Initial Assignment
1. Shuffle all registered players randomly
2. Calculate tables needed: `ceil(playerCount / tableSize)`
3. Distribute as evenly as possible (e.g. 13 players, tableSize=6 -> 3 tables: 5, 4, 4)
4. Assign random seat numbers

### Rebalancing on Elimination
1. Remove eliminated player from their table
2. If tables are imbalanced (largest - smallest > 1): move a random player from largest to smallest
3. If a table drops to 0-1 players: close table, redistribute to other tables
4. Display notification of player moves

### Final Table
- Configurable threshold (separate from table size, default = table size)
- When active players <= threshold: merge all to a single "Final Table"
- Clear notification: "Final Table! All players moved to Table 1"

---

## Clock & Audio

### Clock
- Large countdown timer with current level info (blinds, ante)
- "Next level" preview below
- Controls: Play/Pause toggle, Next Level, Previous Level
- Auto-advances to next level when timer reaches 0:00
- Timer state lives in the store (runs regardless of active tab)

### Breaks
- Display "BREAK" with break countdown
- Distinct visual styling (different background color)

### Audio (Web Audio API)
- Alert sound on round end
- Alert sound on break end
- Warning sound at 60 seconds remaining
- Mute/unmute toggle on clock tab
- No external sound files — generated tones via Web Audio API

---

## Tab Details

### Structure Tab
- Preset selector dropdown (Quick Tournament, Standard, Deep Stack)
- Editable round list: level, type, small blind, big blind, ante, duration
- Add round / add break buttons
- Reorder via move up/down buttons
- Delete per row
- Locked when tournament is running

### Players Tab
- Text input + "Add" button
- Player list with "Remove" button (setup only)
- Shows count and status
- Late registration allowed (add players while running)
- Cannot remove once running — must eliminate

### Tables Tab
- Settings: max players per table, final table threshold
- "Assign Tables" button (random seating)
- Visual display of tables with player names
- Reassignment only before clock starts
- After start, changes only via rebalancing

### Eliminations Tab
- Select eliminated player (active only) from dropdown
- Select "eliminated by" (optional) from dropdown
- "Eliminate" button
- Elimination log: position, name, eliminated by, round, time
- Standings: active players at top, eliminated ranked by finish position

---

## Constraints

- Client-side only, localStorage persistence
- Up to 20 players, 1-3 tables
- Clean, minimal UI — no component library
- Svelte 5 runes for reactivity
- SvelteKit static adapter for deployment
