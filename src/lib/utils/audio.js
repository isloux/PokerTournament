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
    playRoundEnd() { playTone(880, 0.5); },
    playBreakEnd() { playTone(660, 0.5); },
    playWarning() { playTone(440, 0.3); },
  };
}
