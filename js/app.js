/* ==========================================================================
   ZAHRA'S WORLD — MAIN APPLICATION CONTROLLER (2026 EDITION)
   Choreographed Motion, Level 3 Scroll Reveals, Category Filtering & Pure English Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initHeader();
  if (window.heroStage) window.heroStage.init();
  renderProducts('all');
  initCategoryFilters();
  initCrystalMotifVisualizer();
  initCassetteUI();
  initCheckoutModal();
  initScrollRevealEngine();
});

// Toast notification helper (Rule 06: 10px Radius Standard • Zero Emojis)
window.showToast = function(message, duration = 3200) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-bubble';
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, duration);
};

// Level 3 Motion: Intersection Observer Scroll Reveal Engine (Rules 25-27)
function initScrollRevealEngine() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    window.scrollObserver = observer;
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-revealed');
    });
  }
}

// Language management: Enforced 100% Pure English
function initLanguage() {
  document.documentElement.lang = 'en';
  localStorage.setItem('zahra_lang', 'en');

  // Enforce English text for any elements with data-en
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-en');
  });

  // Enforce English placeholders
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    el.placeholder = el.getAttribute('data-placeholder-en');
  });
}

// Header & Navigation effects
function initHeader() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile navigation drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-panel');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileToggle.classList.remove('open');
      });
    });
  }
}

// Render Products Grid with Staggered Motion Classes (100% Pure English)
function renderProducts(category = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === category);

  container.innerHTML = filtered.map((product, index) => {
    const pName = product.nameEn;
    const pTagline = product.taglineEn;
    const pBadge = product.badgeEn;
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const staggerClass = `stagger-${(index % 5) + 1}`;

    return `
      <article class="product-card reveal-on-scroll ${staggerClass}" data-id="${product.id}">
        <div class="product-card-media">
          <span class="product-card-badge">${pBadge}</span>
          <span class="product-discount-pill">-${discount}% OFF</span>
          <img src="${product.image}" alt="${product.nameEn}" class="product-img" loading="lazy" />
          <div class="product-card-hover-actions">
            <button class="action-btn-quick" onclick="openQuickView('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>Quick View</span>
            </button>
          </div>
        </div>

        <div class="product-card-body">
          <div class="product-rating-row">
            <div class="stars">★★★★★</div>
            <span class="rating-val">5.0 (${product.reviewCount} reviews)</span>
          </div>

          <h3 class="product-title" onclick="openQuickView('${product.id}')">${pName}</h3>
          <p class="product-tagline">${pTagline}</p>

          <div class="product-price-row">
            <div class="price-wrap">
              <span class="current-price">Tk ${product.price.toLocaleString()}</span>
              <span class="original-price">Tk ${product.originalPrice.toLocaleString()}</span>
            </div>
            <span class="stock-status">
              <span class="pulse-dot"></span>
              In Stock
            </span>
          </div>

          <div class="product-card-buttons">
            <button class="btn-card-add" onclick="window.cart.addItem('${product.id}')">
              <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span>Add to Bag</span>
            </button>
            <button class="btn-card-whatsapp" onclick="directWhatsAppOrder('${product.id}')" title="Direct WhatsApp Order">
              <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.086.086-.177.18-.076.353.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z"/></svg>
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-observe newly rendered cards
  if (window.scrollObserver) {
    container.querySelectorAll('.reveal-on-scroll').forEach(el => {
      window.scrollObserver.observe(el);
    });
  } else {
    container.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-revealed');
    });
  }
}

// Category filter interaction
function initCategoryFilters() {
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const category = pill.getAttribute('data-category');
      renderProducts(category);
    });
  });
}

// Interactive 3D Crystal Ball Motif Visualizer (Pure English)
function initCrystalMotifVisualizer() {
  const motifBtns = document.querySelectorAll('.crystal-motif-btn');
  const previewImg = document.getElementById('crystal-stage-img');
  const motifTitle = document.getElementById('crystal-motif-title');
  const motifDesc = document.getElementById('crystal-motif-desc');

  if (!motifBtns.length || !previewImg) return;

  motifBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      motifBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const motifId = btn.getAttribute('data-motif');

      // Visual optical transition
      previewImg.style.opacity = '0.35';
      previewImg.style.transform = 'scale(0.95)';

      setTimeout(() => {
        if (motifId === 'rose') {
          previewImg.src = 'assets/products/crystal_rose.jpg';
          motifTitle.textContent = 'Blooming Rose "Love You"';
          motifDesc.textContent = 'Laser-etched romantic blooming rose with custom sentiment ribbon.';
        } else if (motifId === 'saturn') {
          previewImg.src = 'assets/products/crystal_galaxy.jpg';
          motifTitle.textContent = 'Saturn with Planetary Rings';
          motifDesc.textContent = 'Detailed planetary rings capturing the cosmic mystique in solid optic crystal.';
        } else if (motifId === 'moon') {
          previewImg.src = 'assets/products/crystal_galaxy.jpg';
          motifTitle.textContent = 'Detailed Lunar Crater Moon';
          motifDesc.textContent = 'Authentic topographic lunar craters illuminated by soft warm amber LED.';
        } else if (motifId === 'teddy') {
          previewImg.src = 'assets/products/crystal_galaxy.jpg';
          motifTitle.textContent = 'Smile Day Teddy Bear';
          motifDesc.textContent = 'Heartwarming 3D teddy bear designed to bring instant smiles to loved ones.';
        } else if (motifId === 'heart') {
          previewImg.src = 'assets/products/crystal_galaxy.jpg';
          motifTitle.textContent = 'Angelic Glowing Heart';
          motifDesc.textContent = 'Luminous suspended celestial heart casting radiant reflections.';
        } else {
          previewImg.src = 'assets/products/crystal_galaxy.jpg';
          motifTitle.textContent = 'Milky Way Galaxy & Solar System';
          motifDesc.textContent = 'High-density 3D star clusters and spiral arms of our galaxy.';
        }

        previewImg.style.opacity = '1';
        previewImg.style.transform = 'scale(1)';
      }, 160);
    });
  });
}

// Interactive Retro Cassette Sound Player & Dynamic VU Meter
function initCassetteUI() {
  const playBtn = document.getElementById('cassette-play-btn');
  const nextBtn = document.getElementById('cassette-next-btn');
  const tapeSpools = document.querySelectorAll('.cassette-spool');
  const trackLabel = document.getElementById('cassette-track-name');
  const statusIndicator = document.getElementById('cassette-status-led');
  const colorSelectors = document.querySelectorAll('.tape-color-pill');

  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    if (!window.cassetteEngine) return;
    const isPlaying = window.cassetteEngine.isPlaying;

    if (isPlaying) {
      window.cassetteEngine.stop();
      playBtn.classList.remove('playing');
      tapeSpools.forEach(s => s.classList.remove('spinning'));
      if (statusIndicator) statusIndicator.classList.remove('active');
      playBtn.querySelector('.play-text').textContent = 'Play Audio';
    } else {
      window.cassetteEngine.start();
      playBtn.classList.add('playing');
      tapeSpools.forEach(s => s.classList.add('spinning'));
      if (statusIndicator) statusIndicator.classList.add('active');
      playBtn.querySelector('.play-text').textContent = 'Pause';
      if (trackLabel) {
        trackLabel.textContent = window.cassetteEngine.tracks[window.cassetteEngine.currentTrack].name;
      }
    }
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!window.cassetteEngine) return;
      window.cassetteEngine.nextTrack();
      if (trackLabel) {
        trackLabel.textContent = window.cassetteEngine.tracks[window.cassetteEngine.currentTrack].name;
      }
    });
  }

  colorSelectors.forEach(btn => {
    btn.addEventListener('click', () => {
      colorSelectors.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const color = btn.getAttribute('data-color');
      const cassetteBody = document.getElementById('interactive-cassette-box');
      if (cassetteBody) {
        cassetteBody.setAttribute('data-body-color', color);
      }
    });
  });
}

// Quick View Modal (100% Pure English)
window.openQuickView = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const container = document.getElementById('quick-view-content');

  if (!modal || !container) return;

  const featuresList = product.featuresEn.map(f => `<li>✓ ${f}</li>`).join('');

  container.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-image-col">
        <img src="${product.image}" id="qv-main-img" alt="${product.nameEn}" class="qv-img" />
        ${product.variants && product.variants.length > 1 ? `
          <div class="qv-thumbs-row">
            ${product.variants.map((v, i) => `
              <button class="qv-thumb-btn ${i === 0 ? 'active' : ''}" onclick="changeQvVariant('${v.image}', this, '${v.id}')">
                <img src="${v.image}" alt="${v.name}" />
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="quick-view-info-col">
        <div class="qv-badge">${product.badgeEn}</div>
        <h2 class="qv-title">${product.nameEn}</h2>
        <p class="qv-tagline">${product.taglineEn}</p>

        <div class="qv-price-block">
          <span class="qv-current-price">Tk ${product.price.toLocaleString()}</span>
          <span class="qv-orig-price">Tk ${product.originalPrice.toLocaleString()}</span>
          <span class="qv-savings">Save Tk ${(product.originalPrice - product.price).toLocaleString()}</span>
        </div>

        <div class="qv-delivery-perk">
          <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          <strong>Cash on Delivery</strong> • 2-3 Days Fast Doorstep Delivery across BD
        </div>

        ${product.variants && product.variants.length > 1 ? `
          <div class="qv-variant-picker">
            <label class="qv-label">Select Variant:</label>
            <div class="qv-variant-options">
              ${product.variants.map((v, i) => `
                <button class="variant-option-chip ${i === 0 ? 'active' : ''}" data-variant-id="${v.id}" onclick="selectQvChip(this, '${v.image}')">
                  ${v.name}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="qv-features-block">
          <h4 class="qv-label">Key Highlights:</h4>
          <ul class="qv-feature-list">${featuresList}</ul>
        </div>

        <div class="qv-box-includes">
          <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
          <strong>Package Contains:</strong> ${product.boxIncludesEn}
        </div>

        <div class="qv-actions-row">
          <button class="btn-noir" style="padding:12px 22px;" onclick="window.cart.addItem('${product.id}', getSelectedQvVariant()); closeQuickView();">
            <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span>Add to Bag</span>
          </button>
          <button class="btn-outline" style="padding:12px 20px;" onclick="directWhatsAppOrder('${product.id}', getSelectedQvVariant())">
            <svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.086.086-.177.18-.076.353.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.072.043.419-.101.824z"/></svg>
            <span>Instant WhatsApp Order</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeQuickView = function() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};

window.changeQvVariant = function(imgSrc, btn, variantId) {
  const mainImg = document.getElementById('qv-main-img');
  if (mainImg) mainImg.src = imgSrc;
  document.querySelectorAll('.qv-thumb-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.variant-option-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.variantId === variantId);
  });
};

window.selectQvChip = function(chip, imgSrc) {
  document.querySelectorAll('.variant-option-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const mainImg = document.getElementById('qv-main-img');
  if (mainImg && imgSrc) mainImg.src = imgSrc;
};

window.getSelectedQvVariant = function() {
  const activeChip = document.querySelector('.variant-option-chip.active');
  return activeChip ? activeChip.getAttribute('data-variant-id') : null;
};

// Direct WhatsApp order helper (100% Pure English)
window.directWhatsAppOrder = function(productId, variantId = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const pName = product.nameEn;
  let variantName = '';
  if (variantId && product.variants) {
    const v = product.variants.find(item => item.id === variantId);
    if (v) variantName = ` (${v.name})`;
  }

  const message = `*Zahra's World — Direct Order*\nHello. I would like to order this item directly from your website:\n\n• Product: *${pName}*${variantName}\n• Price: Tk ${product.price.toLocaleString()} (Cash on Delivery)\n\nPlease share delivery details. Thank you!`;

  window.open(`https://wa.me/8801320829916?text=${encodeURIComponent(message)}`, '_blank');
};

// Checkout Modal & Direct COD Form (100% Pure English)
function initCheckoutModal() {
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const closeCheckoutBtn = document.getElementById('close-checkout-modal');
  const checkoutForm = document.getElementById('checkout-form');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.cart.closeDrawer();
      if (checkoutModal) {
        updateCheckoutModalSummary();
        checkoutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (closeCheckoutBtn && checkoutModal) {
    closeCheckoutBtn.addEventListener('click', () => {
      checkoutModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cust-name')?.value;
      const phone = document.getElementById('cust-phone')?.value;
      const address = document.getElementById('cust-address')?.value;
      const note = document.getElementById('cust-note')?.value;

      const action = e.submitter?.getAttribute('data-action') || 'whatsapp';

      if (action === 'whatsapp') {
        const url = window.cart.generateWhatsAppOrderUrl({ name, phone, address, note });
        window.open(url, '_blank');
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
        window.cart.items = [];
        window.cart.save();
      } else {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
        window.cart.items = [];
        window.cart.save();
        showToast('Order placed successfully! Our concierge will call you shortly to confirm.');
      }
    });
  }
}

function updateCheckoutModalSummary() {
  const container = document.getElementById('checkout-order-summary');
  if (!container || !window.cart) return;

  const items = window.cart.items;

  container.innerHTML = `
    <div class="summary-items-list">
      ${items.map(item => `
        <div class="summary-item-row">
          <span>${item.nameEn} ${item.variantName ? `(${item.variantName})` : ''} × ${item.quantity}</span>
          <span>Tk ${(item.price * item.quantity).toLocaleString()}</span>
        </div>
      `).join('')}
    </div>
    <div class="summary-calc-row">
      <span>Subtotal</span>
      <span>Tk ${window.cart.getSubtotal().toLocaleString()}</span>
    </div>
    <div class="summary-calc-row">
      <span>Insured Delivery</span>
      <span>Tk ${window.cart.getDeliveryFee().toLocaleString()}</span>
    </div>
    ${window.cart.includeGiftWrap ? `
      <div class="summary-calc-row">
        <span>Luxury Gift Wrapping & Card</span>
        <span>Tk ${window.cart.getGiftWrapFee().toLocaleString()}</span>
      </div>
    ` : ''}
    <div class="summary-calc-total">
      <strong>Grand Total (COD)</strong>
      <strong class="text-rose">Tk ${window.cart.getTotal().toLocaleString()}</strong>
    </div>
  `;
}

/* ==========================================================================
   HERO STAGE CONTROLLER (Interactive 4-Flagship Audition & Light Tone)
   ========================================================================== */
const HERO_FLAGSHIPS = [
  {
    id: "crystal-ball-night-light",
    index: "01 / 04",
    title: "Milky Way Galaxy Sphere",
    specs: "80mm K9 Optical Crystal • Beechwood LED Base",
    provenance: "Batch 026 // Solid Core",
    price: "Tk 890",
    image: "assets/products/crystal_galaxy.jpg",
    tag: "Bestseller Atelier Choice"
  },
  {
    id: "mini-cassette-recorder-keychain",
    index: "02 / 04",
    title: "Analog Cassette Voice Memo",
    specs: "Real Voice Recording • Mechanical Spools",
    provenance: "Edition 2026 // Lo-Fi",
    price: "Tk 650",
    image: "assets/products/cassette_keychain.jpg",
    tag: "Personal Keepsake"
  },
  {
    id: "moving-sand-art-lamp",
    index: "03 / 04",
    title: "360° Kinetic Sandscape Lamp",
    specs: "Fluid Mineral Quartz • Touch Dimmable Halo",
    provenance: "Limited Atelier Series",
    price: "Tk 1,450",
    image: "assets/products/sand_art_lamp.jpg",
    tag: "Architectural Decor"
  },
  {
    id: "snowing-streetlamp-night-light",
    index: "04 / 04",
    title: "Swirling Snow Streetlamp Light",
    specs: "Continuous Snow Vortex • Victorian Lantern",
    provenance: "Chamber Series",
    price: "Tk 1,290",
    image: "assets/products/streetlamp_diorama.jpg",
    tag: "Atmospheric Room Accents"
  }
];

window.heroStage = {
  currentIndex: 0,
  currentTone: 'warm',
  timer: null,

  init() {
    this.bindPillars();
    this.startAutoCycle();
  },

  select(idx) {
    if (idx < 0 || idx >= HERO_FLAGSHIPS.length) return;
    this.currentIndex = idx;
    const data = HERO_FLAGSHIPS[idx];

    document.querySelectorAll('.pillar-card').forEach((card, i) => {
      card.classList.toggle('active', i === idx);
    });

    const img = document.getElementById('heroMainImg');
    if (img) {
      img.style.opacity = '0.3';
      img.style.transform = 'scale(1.02)';
      setTimeout(() => {
        img.src = data.image;
        img.alt = data.title;
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      }, 200);
    }

    const tag = document.getElementById('heroStageTag');
    if (tag) tag.textContent = data.tag;

    const indexEl = document.getElementById('heroPlinthIndex');
    if (indexEl) indexEl.textContent = data.index;

    const provEl = document.getElementById('heroPlinthProvenance');
    if (provEl) provEl.textContent = data.provenance;

    const titleEl = document.getElementById('heroPlinthTitle');
    if (titleEl) titleEl.textContent = data.title;

    const specsEl = document.getElementById('heroPlinthSpecs');
    if (specsEl) specsEl.textContent = data.specs;

    const priceEl = document.getElementById('heroPlinthPrice');
    if (priceEl) priceEl.textContent = data.price;
  },

  setTone(tone) {
    this.currentTone = tone;
    const warmBtn = document.getElementById('heroToneWarm');
    const moonBtn = document.getElementById('heroToneMoon');
    if (warmBtn && moonBtn) {
      warmBtn.classList.toggle('active', tone === 'warm');
      moonBtn.classList.toggle('active', tone === 'moon');
    }
  },

  acquireCurrent() {
    const current = HERO_FLAGSHIPS[this.currentIndex];
    if (window.cart && current) {
      window.cart.addItem(current.id);
    }
  },

  bindPillars() {
    const stage = document.getElementById('heroVisualStage');
    if (stage) {
      stage.addEventListener('mouseenter', () => clearInterval(this.timer));
      stage.addEventListener('mouseleave', () => this.startAutoCycle());
    }
  },

  startAutoCycle() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      const nextIdx = (this.currentIndex + 1) % HERO_FLAGSHIPS.length;
      this.select(nextIdx);
    }, 7000);
  }
};
