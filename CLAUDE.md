# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # development server (hot reload)
npm run build        # production build → build/
npm run preview      # serve production build locally at http://localhost:4173/pokertournament
npm run test         # run all tests once
npm run test:watch   # run tests in watch mode
npm run deploy       # build + publish to GitHub Pages (gh-pages branch)
```

To run a single test file:
```bash
npx vitest run src/lib/utils/tableAssignment.test.js
```

## Architecture

A SvelteKit SPA deployed statically to GitHub Pages (`isloux.github.io/pokertournament`). No server — everything is client-side only.

**Key config decisions:**
- `ssr: false` in `src/routes/+layout.js` — no server-side rendering; all rendering is client-side
- `prerender: true` — pages are pre-rendered as HTML shells at build time
- `adapter-static` with `fallback: 'index.html'` — SPA fallback for client-side routing
- `appDir: 'app'` in `svelte.config.js` — avoids GitHub Pages' Jekyll suppressing `_app/` directories
- `base: '/pokertournament'` (hardcoded lowercase) — must match GitHub Pages URL exactly; **do not change to camelCase or use an env var**

**State management:**

All application state lives in a single singleton: `src/lib/stores/tournament.svelte.js` exports `createTournament()`, which is instantiated once in `src/lib/stores/index.js` and imported wherever needed. State is backed by Svelte 5 `$state()` runes (the file uses the `.svelte.js` extension to enable runes outside of components). State is persisted to `localStorage` under the key `poker-tournament` via `tournament.save()` / `tournament.load()`. Load is called in `+layout.svelte`'s `onMount`.

**Data model:**

The tournament object holds: `structure` (array of round/break entries), `players`, `tables`, `eliminations`, `clock`, and settings (`tableSize`, `finalTableThreshold`). Structure entries have `type: 'round' | 'break'`; rounds additionally have `smallBlind`, `bigBlind`, `ante`, `duration`, and a computed `level` number.

**Tab-based UI:**

The single page (`src/routes/+page.svelte`) renders one of five tab panels: Structure, Players, Tables, Clock, Eliminations. `TabBar.svelte` handles tab state with `bind:activeTab`.

**Utilities (pure functions, all tested):**
- `src/lib/utils/tableAssignment.js` — `assignTables`, `rebalanceTables`, `checkFinalTable` — handles seat randomization and table balancing
- `src/lib/utils/presets.js` — three blind structure presets (quick/standard/deepStack)
- `src/lib/utils/audio.js` — Web Audio API wrapper for clock sounds; lazy-initializes `AudioContext` on first use

**Tests:**

Vitest with jsdom. Test files live alongside source (`*.test.js`). No TypeScript — plain JavaScript throughout.

**Deployment:**

`npm run deploy` runs `npm run build` then `gh-pages -d build --dotfiles --nojekyll`. The `--nojekyll` flag disables Jekyll on the gh-pages branch (required so GitHub Pages serves `app/` assets). After deploying, Fastly CDN may cache old responses for several minutes — a hard refresh (`Ctrl+Shift+R`) is needed to bypass browser/CDN cache.
