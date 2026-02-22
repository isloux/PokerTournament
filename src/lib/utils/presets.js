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
