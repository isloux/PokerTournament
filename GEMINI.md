# GEMINI.md - Poker Tournament Supervisor

This file provides a comprehensive overview of the Poker Tournament Supervisor project, its architecture, and development conventions to be used as a guide for an AI assistant.

## Project Overview

This is a client-side web application designed for managing small, live poker tournaments. It provides a single-page interface with tabbed navigation to handle all aspects of running a tournament.

**Core Features:**

*   **Structure:** Create, edit, and manage the tournament's blind structure, including rounds and breaks. Presets are available.
*   **Players:** Register players and track their status (active or eliminated).
*   **Tables:** Automatically assign players to tables and manage table balancing as players are eliminated.
*   **Clock:** A timer that follows the defined tournament structure, automatically progressing through levels and breaks.
*   **Eliminations:** Log player eliminations and view a live-updating list of standings.

**Architecture:**

*   **Framework:** SvelteKit with the Svelte 5 compiler.
*   **Reactivity:** State management is built on Svelte 5 Runes (`$state`, `$derived`).
*   **State Management:** A single, central store (`tournament.svelte.js`) holds the entire application state. This store is exported as a singleton from `src/lib/stores/index.js`.
*   **Persistence:** All tournament data is persisted to the browser's `localStorage`, allowing users to close the app and resume a tournament later. State is loaded on application start and saved after every modification.
*   **Deployment:** The project is configured with `@sveltejs/adapter-static` to build a static site, suitable for deployment on platforms like GitHub Pages.

## Building and Running

The following scripts are available in `package.json`:

*   **Install Dependencies:**
    ```bash
    npm install
    ```
*   **Start Development Server:**
    ```bash
    npm run dev
    ```
*   **Build for Production:**
    ```bash
    npm run build
    ```
*   **Preview Production Build:**
    ```bash
    npm run preview
    ```
*   **Run Unit Tests:**
    ```bash
    npm run test
    ```
*   **Run Unit Tests in Watch Mode:**
    ```bash
    npm run test:watch
    ```

## Development Conventions

*   **State Management:**
    *   All application state MUST be managed in `src/lib/stores/tournament.svelte.js`.
    *   State should be reactive using Svelte 5 Runes.
    *   After any mutation to the tournament state, `tournament.save()` MUST be called to ensure persistence to `localStorage`.

*   **Testing:**
    *   Unit tests are written with Vitest and Testing Library.
    *   Test files are located alongside the source files they test (e.g., `presets.js` and `presets.test.js`).
    *   Tests should be comprehensive and cover the functionality of stores and utility functions.

*   **Code Structure:**
    *   **Components:** Reusable Svelte components are organized by feature under `src/lib/components/`. For example, all clock-related components are in `src/lib/components/Clock/`.
    *   **Routes:** The application uses SvelteKit's file-based routing. The main application view is `src/routes/+page.svelte`.
    *   **Utilities:** Pure business logic and helper functions are located in `src/lib/utils/`. Examples include `tableAssignment.js` for seating logic and `presets.js` for predefined tournament structures.
    *   **Internationalization (i18n):** The application is internationalized. Text strings are managed in `src/lib/i18n/translations.js` and accessed via the `t()` function from `src/lib/i18n/index.svelte.js`.

*   **Path Aliases:**
    *   The project uses the standard SvelteKit path alias `$lib` to refer to the `src/lib` directory. Use this alias when importing modules from the library folder (e.g., `import { tournament } from '$lib/stores';`).
