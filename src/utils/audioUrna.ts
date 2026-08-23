// Web Audio API synthesizer for the genuine Brazilian Urna Eletrônica sound effects

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playKeypadBeep() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1050, ctx.currentTime);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Graceful fallback if audio is blocked
  }
}

export function playUrnaConfirmationSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // The iconic Brazilian Urna "Trililili - PIMMMM" sound sequence
    const notes = [
      { freq: 440, time: 0.00, dur: 0.06 },
      { freq: 554.37, time: 0.06, dur: 0.06 },
      { freq: 659.25, time: 0.12, dur: 0.06 },
      { freq: 880, time: 0.18, dur: 0.06 },
      { freq: 1108.73, time: 0.24, dur: 0.06 },
      { freq: 1318.51, time: 0.30, dur: 0.06 },
      { freq: 1760, time: 0.36, dur: 0.65 } // Final long ringing confirmation tone
    ];

    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      gain.gain.setValueAtTime(0.12, now + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur);
    });
  } catch {
    // Graceful fallback
  }
}
