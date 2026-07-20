// Web Audio API Sound Synthesizer for Camera FX

class CameraSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound(forceState) {
    this.enabled = forceState !== undefined ? forceState : !this.enabled;
    if (this.enabled) {
      this.init();
      this.playShutterClick();
    }
    return this.enabled;
  }

  playShutterClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      
      // Shutter click 1 (curtain open)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'square';
      osc1.frequency.setValueAtTime(180, t);
      osc1.frequency.exponentialRampToValueAtTime(40, t + 0.04);
      gain1.gain.setValueAtTime(0.15, t);
      gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(t);
      osc1.stop(t + 0.04);

      // Mechanical snap 2 (curtain close)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(320, t + 0.05);
      osc2.frequency.exponentialRampToValueAtTime(60, t + 0.09);
      gain2.gain.setValueAtTime(0.2, t + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(t + 0.05);
      osc2.stop(t + 0.09);
    } catch (e) {
      // Audio context fallback safeguard
    }
  }

  playFocusBeep() {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, t);
      osc.frequency.setValueAtTime(1200, t + 0.05);
      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.08);
    } catch (e) {}
  }

  playDialClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(200, t + 0.015);
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.015);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.015);
    } catch (e) {}
  }
}

export const soundFx = new CameraSoundEngine();
