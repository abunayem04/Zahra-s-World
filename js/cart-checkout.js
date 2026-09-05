/* ==========================================================================
   ZAHRA'S WORLD — CART & 1-CLICK WHATSAPP CHECKOUT SYSTEM
   Tailored for Bangladeshi E-Commerce & Customer Behavior
   ========================================================================== */

class CartManager {
  constructor() {
    this.items = [];
    this.deliveryArea = 'dhaka'; // 'dhaka' or 'outside'
    this.includeGiftWrap = false;
    this.giftMessage = '';
    this.init();
  }

  init() {
    try {
      const saved = localStorage.getItem('zahra_cart_items');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    } catch (e) {
      this.items = [];
    }
    this.updateUI();
  }

  save() {
    localStorage.setItem('zahra_cart_items', JSON.stringify(this.items));
    this.updateUI();
  }

  addItem(productId, variantId = null, quantity = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    let variant = null;
    if (variantId && product.variants) {
      variant = product.variants.find(v => v.id === variantId);
    } else if (product.variants && product.variants.length > 0) {
      variant = product.variants[0];
    }

    const key = `${productId}_${variant ? variant.id : 'default'}`;
    const existing = this.items.find(i => i.key === key);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        key,
        productId: product.id,
        nameEn: product.nameEn,
        nameBn: product.nameBn,
        variantId: variant ? variant.id : null,
        variantName: variant ? variant.name : null,
        price: product.price,
        image: variant && variant.image ? variant.image : product.image,
        quantity: quantity
      });
    }

    this.save();
    this.openDrawer();

    if (window.showToast) {
      window.showToast(`Added "${product.nameEn}" to your bag`);
    }
  }

  removeItem(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save();
  }

  updateQuantity(key, delta) {
    const item = this.items.find(i => i.key === key);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(key);
    } else {
      this.save();
    }
  }

  setDeliveryArea(area) {
    this.deliveryArea = area;
    this.updateUI();
  }

  setGiftWrap(enabled, message = '') {
    this.includeGiftWrap = enabled;
    this.giftMessage = message;
    this.updateUI();
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getDeliveryFee() {
    if (this.items.length === 0) return 0;
    return this.deliveryArea === 'dhaka' ? DELIVERY_CONFIG.dhakaMetroFee : DELIVERY_CONFIG.outsideDhakaFee;
  }

  getGiftWrapFee() {
    return this.includeGiftWrap ? DELIVERY_CONFIG.giftWrapFee : 0;
  }

  getTotal() {
    return this.getSubtotal() + this.getDeliveryFee() + this.getGiftWrapFee();
  }

  getTotalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  updateUI() {
    // Update count badges
    const totalCount = this.getTotalCount();
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });

    // Render cart items in drawer
    const listContainer = document.getElementById('cart-items-list');
    const emptyState = document.getElementById('cart-empty-state');
    const footerContainer = document.getElementById('cart-drawer-footer');

    if (listContainer) {
      if (this.items.length === 0) {
        listContainer.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        if (footerContainer) footerContainer.style.display = 'none';
      } else {
        if (emptyState) emptyState.style.display = 'none';
        if (footerContainer) footerContainer.style.display = 'block';

        listContainer.innerHTML = this.items.map(item => `
          <div class="cart-item-row" data-key="${item.key}">
            <img src="${item.image}" alt="${item.nameEn}" class="cart-item-thumb" />
            <div class="cart-item-details">
              <div class="cart-item-title">${item.nameEn}</div>
              ${item.variantName ? `<div class="cart-item-variant">${item.variantName}</div>` : ''}
              <div class="cart-item-price">Tk ${item.price.toLocaleString()}</div>
              <div class="cart-qty-controls">
                <button class="qty-btn" onclick="window.cart.updateQuantity('${item.key}', -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="window.cart.updateQuantity('${item.key}', 1)" aria-label="Increase quantity">+</button>
                <button class="item-delete-btn" onclick="window.cart.removeItem('${item.key}')" title="Remove item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          </div>
        `).join('');
      }
    }

    // Update totals
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const deliveryEl = document.getElementById('cart-delivery-val');
    const giftWrapRow = document.getElementById('cart-giftwrap-row');
    const giftWrapVal = document.getElementById('cart-giftwrap-val');
    const totalEl = document.getElementById('cart-total-val');

    if (subtotalEl) subtotalEl.textContent = `Tk ${this.getSubtotal().toLocaleString()}`;
    if (deliveryEl) deliveryEl.textContent = `Tk ${this.getDeliveryFee().toLocaleString()}`;
    if (giftWrapRow) giftWrapRow.style.display = this.includeGiftWrap ? 'flex' : 'none';
    if (giftWrapVal) giftWrapVal.textContent = `Tk ${this.getGiftWrapFee().toLocaleString()}`;
    if (totalEl) totalEl.textContent = `Tk ${this.getTotal().toLocaleString()}`;
  }

  generateWhatsAppOrderUrl(customerInfo = {}) {
    const total = this.getTotal();
    const areaName = this.deliveryArea === 'dhaka' 
      ? 'Dhaka Metro (Tk 70)' 
      : 'Outside Dhaka (Tk 130)';

    let message = `*Zahra's World — Order Acquisition*\nHello. I would like to order the following items from your website:\n\n`;

    this.items.forEach((item, idx) => {
      const vName = item.variantName ? ` (${item.variantName})` : '';
      message += `${idx + 1}. *${item.nameEn}*${vName}\n   Quantity: ${item.quantity} | Subtotal: Tk ${(item.price * item.quantity).toLocaleString()}\n`;
    });

    message += `\n- *Delivery Destination:* ${areaName}`;
    if (this.includeGiftWrap) {
      message += `\n- *Luxury Gift Wrapping:* Yes (+Tk 50)`;
      if (this.giftMessage) {
        message += `\n- *Gift Wish Card Note:* "${this.giftMessage}"`;
      }
    }

    message += `\n- *Total Payable (COD):* Tk ${total.toLocaleString()}`;

    if (customerInfo.name) {
      message += `\n\n- *Customer Name:* ${customerInfo.name}`;
    }
    if (customerInfo.phone) {
      message += `\n- *Phone Number:* ${customerInfo.phone}`;
    }
    if (customerInfo.address) {
      message += `\n- *Street Address:* ${customerInfo.address}`;
    }

    message += `\n\nThank you. Please confirm my order at your earliest convenience.`;

    return `https://wa.me/8801320829916?text=${encodeURIComponent(message)}`;
  }
}

window.cart = new CartManager();
