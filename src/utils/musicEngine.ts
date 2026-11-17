// Self-contained Web Audio API instrumental music-box & soft piano engine.
// Plays gentle, royalty-free original melodies only when the user clicks Play.

interface NoteEvent {
  freq: number;
  beat: number;
  duration: number;
  velocity?: number;
}

interface SongScore {
  bpm: number;
  totalBeats: number;
  waveform: OscillatorType;
  notes: NoteEvent[];
}

const SCORES: Record<string, SongScore> = {
  // Track 1: Afternoon Pages (Dreamy music box in F Major)
  t1: {
    bpm: 78,
    totalBeats: 32,
    waveform: 'sine',
    notes: [
      { freq: 349.23, beat: 0, duration: 1.5, velocity: 0.7 }, // F4
      { freq: 440.0, beat: 1, duration: 1.5, velocity: 0.65 }, // A4
      { freq: 523.25, beat: 2, duration: 2.0, velocity: 0.8 }, // C5
      { freq: 587.33, beat: 4, duration: 1.5, velocity: 0.75 }, // D5
      { freq: 523.25, beat: 5.5, duration: 2.0, velocity: 0.7 }, // C5
      { freq: 440.0, beat: 7, duration: 1.5, velocity: 0.6 }, // A4
      { freq: 392.0, beat: 8, duration: 2.0, velocity: 0.7 }, // G4
      { freq: 440.0, beat: 10, duration: 1.5, velocity: 0.65 }, // A4
      { freq: 466.16, beat: 12, duration: 2.0, velocity: 0.75 }, // Bb4
      { freq: 440.0, beat: 14, duration: 2.0, velocity: 0.65 }, // A4
      { freq: 349.23, beat: 16, duration: 2.0, velocity: 0.7 }, // F4
      { freq: 523.25, beat: 18, duration: 1.5, velocity: 0.75 }, // C5
      { freq: 698.46, beat: 20, duration: 2.5, velocity: 0.75 }, // F5
      { freq: 659.25, beat: 22.5, duration: 1.5, velocity: 0.65 }, // E5
      { freq: 587.33, beat: 24, duration: 2.0, velocity: 0.7 }, // D5
      { freq: 523.25, beat: 26, duration: 2.0, velocity: 0.7 }, // C5
      { freq: 440.0, beat: 28, duration: 2.0, velocity: 0.65 }, // A4
      { freq: 349.23, beat: 30, duration: 2.5, velocity: 0.7 }, // F4
      // Warm bass accompaniment
      { freq: 174.61, beat: 0, duration: 4.0, velocity: 0.35 },
      { freq: 233.08, beat: 8, duration: 4.0, velocity: 0.35 },
      { freq: 196.0, beat: 16, duration: 4.0, velocity: 0.35 },
      { freq: 174.61, beat: 24, duration: 4.0, velocity: 0.35 },
    ],
  },
  // Track 2: Chithirai & Vishakam (Reflective warm tones in D Major)
  t2: {
    bpm: 72,
    totalBeats: 32,
    waveform: 'triangle',
    notes: [
      { freq: 293.66, beat: 0, duration: 2.0, velocity: 0.55 }, // D4
      { freq: 369.99, beat: 2, duration: 2.0, velocity: 0.55 }, // F#4
      { freq: 440.0, beat: 4, duration: 2.5, velocity: 0.6 }, // A4
      { freq: 554.37, beat: 6, duration: 2.0, velocity: 0.55 }, // C#5
      { freq: 587.33, beat: 8, duration: 3.0, velocity: 0.65 }, // D5
      { freq: 493.88, beat: 11, duration: 2.0, velocity: 0.55 }, // B4
      { freq: 440.0, beat: 13, duration: 2.5, velocity: 0.6 }, // A4
      { freq: 369.99, beat: 16, duration: 2.0, velocity: 0.55 }, // F#4
      { freq: 392.0, beat: 18, duration: 2.0, velocity: 0.55 }, // G4
      { freq: 440.0, beat: 20, duration: 2.5, velocity: 0.6 }, // A4
      { freq: 493.88, beat: 22.5, duration: 1.5, velocity: 0.55 }, // B4
      { freq: 440.0, beat: 24, duration: 2.5, velocity: 0.6 }, // A4
      { freq: 369.99, beat: 27, duration: 2.0, velocity: 0.5 }, // F#4
      { freq: 293.66, beat: 29.5, duration: 2.5, velocity: 0.55 }, // D4
      { freq: 146.83, beat: 0, duration: 6.0, velocity: 0.3 },
      { freq: 196.0, beat: 8, duration: 6.0, velocity: 0.3 },
      { freq: 220.0, beat: 16, duration: 6.0, velocity: 0.3 },
      { freq: 146.83, beat: 24, duration: 6.0, velocity: 0.3 },
    ],
  },
  // Track 3: Footsteps Outside the Temple (Gentle 3/4 Waltz in C Major)
  t3: {
    bpm: 84,
    totalBeats: 24,
    waveform: 'sine',
    notes: [
      { freq: 329.63, beat: 0, duration: 1.5, velocity: 0.65 }, // E4
      { freq: 392.0, beat: 1, duration: 1.5, velocity: 0.65 }, // G4
      { freq: 523.25, beat: 2, duration: 2.0, velocity: 0.75 }, // C5
      { freq: 493.88, beat: 3, duration: 1.5, velocity: 0.7 }, // B4
      { freq: 440.0, beat: 4, duration: 1.5, velocity: 0.65 }, // A4
      { freq: 392.0, beat: 5, duration: 2.0, velocity: 0.65 }, // G4
      { freq: 349.23, beat: 6, duration: 2.0, velocity: 0.65 }, // F4
      { freq: 440.0, beat: 8, duration: 1.5, velocity: 0.7 }, // A4
      { freq: 392.0, beat: 9, duration: 2.5, velocity: 0.7 }, // G4
      { freq: 329.63, beat: 12, duration: 1.5, velocity: 0.65 }, // E4
      { freq: 392.0, beat: 13.5, duration: 1.5, velocity: 0.65 }, // G4
      { freq: 587.33, beat: 15, duration: 2.0, velocity: 0.75 }, // D5
      { freq: 523.25, beat: 17, duration: 2.5, velocity: 0.75 }, // C5
      { freq: 440.0, beat: 20, duration: 1.5, velocity: 0.65 }, // A4
      { freq: 392.0, beat: 21.5, duration: 2.5, velocity: 0.65 }, // G4
      { freq: 130.81, beat: 0, duration: 3.0, velocity: 0.35 },
      { freq: 174.61, beat: 6, duration: 3.0, velocity: 0.35 },
      { freq: 196.0, beat: 12, duration: 3.0, velocity: 0.35 },
      { freq: 130.81, beat: 18, duration: 3.0, velocity: 0.35 },
    ],
  },
  // Track 4: Twenty Candles for Lily (Gentle Birthday Chime in G Major)
  t4: {
    bpm: 82,
    totalBeats: 28,
    waveform: 'sine',
    notes: [
      { freq: 392.0, beat: 0, duration: 0.8, velocity: 0.7 }, // G4
      { freq: 392.0, beat: 0.75, duration: 0.8, velocity: 0.65 }, // G4
      { freq: 440.0, beat: 1.5, duration: 1.5, velocity: 0.75 }, // A4
      { freq: 392.0, beat: 3, duration: 1.5, velocity: 0.75 }, // G4
      { freq: 523.25, beat: 4.5, duration: 1.5, velocity: 0.8 }, // C5
      { freq: 493.88, beat: 6, duration: 2.5, velocity: 0.75 }, // B4
      { freq: 392.0, beat: 9, duration: 0.8, velocity: 0.7 }, // G4
      { freq: 392.0, beat: 9.75, duration: 0.8, velocity: 0.65 }, // G4
      { freq: 440.0, beat: 10.5, duration: 1.5, velocity: 0.75 }, // A4
      { freq: 392.0, beat: 12, duration: 1.5, velocity: 0.75 }, // G4
      { freq: 587.33, beat: 13.5, duration: 1.5, velocity: 0.8 }, // D5
      { freq: 523.25, beat: 15, duration: 2.5, velocity: 0.75 }, // C5
      { freq: 392.0, beat: 18, duration: 0.8, velocity: 0.7 }, // G4
      { freq: 392.0, beat: 18.75, duration: 0.8, velocity: 0.65 }, // G4
      { freq: 783.99, beat: 19.5, duration: 1.5, velocity: 0.75 }, // G5
      { freq: 659.25, beat: 21, duration: 1.5, velocity: 0.7 }, // E5
      { freq: 523.25, beat: 22.5, duration: 1.5, velocity: 0.75 }, // C5
      { freq: 493.88, beat: 24, duration: 1.5, velocity: 0.7 }, // B4
      { freq: 440.0, beat: 25.5, duration: 2.5, velocity: 0.7 }, // A4
      { freq: 196.0, beat: 0, duration: 4.0, velocity: 0.35 },
      { freq: 261.63, beat: 9, duration: 4.0, velocity: 0.35 },
      { freq: 196.0, beat: 18, duration: 4.0, velocity: 0.35 },
    ],
  },
};

export class SoftMusicEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private currentTrackId = 't1';
  private volume = 0.55;
  private isPlaying = false;
  private startTimestamp = 0;
  private pausedOffsetSec = 0;
  private scheduledUntilBeat = -1;
  private onProgressCb: ((elapsedSec: number) => void) | null = null;
  private onEndedCb: (() => void) | null = null;

  public setCallbacks(
    onProgress: (elapsedSec: number) => void,
    onEnded: () => void,
  ): void {
    this.onProgressCb = onProgress;
    this.onEndedCb = onEnded;
  }

  private ensureContext(): void {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.volume * 0.28;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  public setVolume(nextVol: number): void {
    this.volume = Math.max(0, Math.min(1, nextVol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume * 0.28, this.ctx.currentTime, 0.05);
    }
  }

  public play(trackId: string, resetPosition = false): void {
    this.ensureContext();
    if (resetPosition || trackId !== this.currentTrackId) {
      this.pausedOffsetSec = 0;
      this.scheduledUntilBeat = -1;
    }
    this.currentTrackId = trackId;
    this.isPlaying = true;
    this.startTimestamp = performance.now() - this.pausedOffsetSec * 1000;
    this.startLoop();
  }

  public pause(): void {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    this.pausedOffsetSec = (performance.now() - this.startTimestamp) / 1000;
    this.stopLoop();
  }

  public seek(seconds: number): void {
    this.pausedOffsetSec = Math.max(0, seconds);
    this.scheduledUntilBeat = -1;
    if (this.isPlaying) {
      this.startTimestamp = performance.now() - this.pausedOffsetSec * 1000;
    } else {
      this.onProgressCb?.(this.pausedOffsetSec);
    }
  }

  public destroy(): void {
    this.stopLoop();
    if (this.ctx) {
      void this.ctx.close();
      this.ctx = null;
      this.masterGain = null;
    }
  }

  private stopLoop(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private startLoop(): void {
    this.stopLoop();
    this.tick();
    this.timerId = window.setInterval(() => this.tick(), 120);
  }

  private tick(): void {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    const score = SCORES[this.currentTrackId] || SCORES.t1;
    const elapsedSec = (performance.now() - this.startTimestamp) / 1000;
    const secPerBeat = 60 / score.bpm;
    const trackDurationSec = score.totalBeats * secPerBeat;

    if (elapsedSec >= trackDurationSec) {
      this.pausedOffsetSec = 0;
      this.scheduledUntilBeat = -1;
      this.onProgressCb?.(0);
      this.onEndedCb?.();
      return;
    }

    this.onProgressCb?.(elapsedSec);

    const currentBeat = elapsedSec / secPerBeat;
    const lookaheadBeat = currentBeat + 1.5;

    for (const note of score.notes) {
      if (note.beat > this.scheduledUntilBeat && note.beat <= lookaheadBeat) {
        const delaySec = Math.max(0, (note.beat - currentBeat) * secPerBeat);
        this.triggerNote(
          note.freq,
          this.ctx.currentTime + delaySec,
          note.duration * secPerBeat,
          note.velocity ?? 0.65,
          score.waveform,
        );
      }
    }
    this.scheduledUntilBeat = lookaheadBeat;
  }

  private triggerNote(
    freq: number,
    startTime: number,
    durationSec: number,
    velocity: number,
    waveform: OscillatorType,
  ): void {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const harmonic = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = waveform;
    osc.frequency.setValueAtTime(freq, startTime);

    harmonic.type = 'sine';
    harmonic.frequency.setValueAtTime(freq * 2, startTime);

    const harmonicGain = this.ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.14, startTime);

    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity * 0.45, startTime + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + Math.max(0.25, durationSec));

    osc.connect(noteGain);
    harmonic.connect(harmonicGain);
    harmonicGain.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    harmonic.start(startTime);
    osc.stop(startTime + Math.max(0.3, durationSec) + 0.05);
    harmonic.stop(startTime + Math.max(0.3, durationSec) + 0.05);
  }
}
