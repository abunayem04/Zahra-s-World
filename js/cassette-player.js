/* ==========================================================================
   ZAHRA'S WORLD — INTERACTIVE RETRO CASSETTE AUDIO SIMULATOR (V2.0)
   Web Audio API synthesizer, spinning spools & dynamic VU-meter visualizer
   ========================================================================== */

class CassetteAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.currentTrack = 0;
    this.tracks = [
      { name: "Track 01: Warm Lofi Dreams", duration: "0:24", tempo: 74, notes: [261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 392.00] },
      { name: "Track 02: Special Voice Memo", duration: "0:18", tempo: 65, notes: [220.00, 277.18, 329.63, 440.00, 392.00, 329.63] },
      { name: "Track 03: Sunset Nostalgia", duration: "0:28", tempo: 80, notes: [196.00, 246.94, 293.66, 392.00, 329.63, 293.66] }
    ];
    this.intervalId = null;
    this.vuAnimationId = null;
    this.noteIndex = 0;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playClick() {
    this.initContext();
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.audioCtx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.04);
  }

  playNote(freq) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    // Vintage warm tape emulation
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, this.audioCtx.currentTime);

    const now = this.audioCtx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.75);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.8);

    this.pulseVUMeter();
  }

  pulseVUMeter() {
    const bars = document.querySelectorAll('.vu-bar');
    if (!bars.length) return;
    bars.forEach((bar, idx) => {
      const randHeight = Math.floor(Math.random() * 16) + 4;
      bar.style.height = `${randHeight}px`;
    });
  }

  resetVUMeter() {
    const bars = document.querySelectorAll('.vu-bar');
    bars.forEach(bar => {
      bar.style.height = '4px';
    });
  }

  start() {
    this.initContext();
    this.playClick();
    this.isPlaying = true;
    const track = this.tracks[this.currentTrack];
    const beatInterval = (60 / track.tempo) * 1000;

    if (this.intervalId) clearInterval(this.intervalId);

    // Initial note
    this.playNote(track.notes[this.noteIndex % track.notes.length]);
    this.noteIndex++;

    this.intervalId = setInterval(() => {
      if (!this.isPlaying) return;
      const noteFreq = track.notes[this.noteIndex % track.notes.length];
      this.playNote(noteFreq);
      this.noteIndex++;
    }, beatInterval);
  }

  stop() {
    this.playClick();
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.resetVUMeter();
  }

  nextTrack() {
    this.playClick();
    this.currentTrack = (this.currentTrack + 1) % this.tracks.length;
    this.noteIndex = 0;
    if (this.isPlaying) {
      this.stop();
      setTimeout(() => this.start(), 150);
    }
  }
}

// Attach globally
window.cassetteEngine = new CassetteAudioEngine();
