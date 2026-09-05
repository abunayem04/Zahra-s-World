/* ==========================================================================
   ZAHRA'S WORLD — COZY ROOM AMBIENCE GLOW ENGINE
   Simulates warm bedside night light illumination
   ========================================================================== */

class AmbienceGlowController {
  constructor() {
    this.isNight = false;
    this.intensity = 80;
    this.init();
  }

  init() {
    // Check saved preferences
    const savedNight = localStorage.getItem('zahra_ambience_night');
    if (savedNight === 'true') {
      this.setNightMode(true, false);
    }
  }

  toggle() {
    this.setNightMode(!this.isNight, true);
  }

  setNightMode(enabled, triggerFeedback = true) {
    this.isNight = enabled;
    localStorage.setItem('zahra_ambience_night', this.isNight);

    const body = document.body;
    const toggleBtns = document.querySelectorAll('.ambience-toggle-btn');
    const statusLabels = document.querySelectorAll('.ambience-status-text');

    if (this.isNight) {
      body.classList.add('ambience-cozy-night');
      toggleBtns.forEach(btn => {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      });
      statusLabels.forEach(lbl => {
        lbl.textContent = 'Cozy Glow Mode ON';
      });
    } else {
      body.classList.remove('ambience-cozy-night');
      toggleBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      statusLabels.forEach(lbl => {
        lbl.textContent = 'Daylight Mode';
      });
    }

    if (triggerFeedback && window.showToast) {
      const msg = this.isNight 
        ? 'Cozy night ambience enabled — observe the warm lamp glow.'
        : 'Daylight mode restored.';
      window.showToast(msg);
    }
  }

  setIntensity(val) {
    this.intensity = val;
    document.documentElement.style.setProperty('--glow-multiplier', (val / 100).toFixed(2));
  }
}

window.ambienceController = new AmbienceGlowController();
