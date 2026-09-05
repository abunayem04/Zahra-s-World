# Zahra-s-World
> **Haute Celestial Decor & Thoughtful Keepsakes Boutique**  
> Curated 3D laser-engraved celestial spheres, vintage voice memorabilia, dynamic sandscapes, and ambient room accents.

---

## Brand Visual Identity & Color System

The website is styled with an architectural, high-fashion 5-color palette:

| Swatch | Hex Code | Color Name | Role in Design System |
| :---: | :---: | :--- | :--- |
| **1** | **`#FFD3F6`** | **Blossom Pink** | Romantic Couture Accent: Hero title highlight, wishlist buttons, ambient glow |
| **2** | **`#C0E6DE`** | **Mint Frost** | Fresh Atmospheric Accent: Fast delivery tags, light aura mists |
| **3** | **`#0D132C`** | **Midnight Obsidian Navy** | Anchor Dark: Headings, primary `.btn-noir` buttons, brand crest, footer |
| **4** | **`#426B69`** | **Slate Teal** | Editorial Mid Accent: Trust ledger indexes (01–05), verified badges, hairline borders |
| **5** | **`#F4F4F8`** | **Clean Porcelain Canvas** | Architectural Canvas: Background foundation with crisp white card layering |

---

## Typography Hierarchy

- **Display Headlines**: `Cinzel` & `Italiana` (Regal Roman capitals & Italian haute couture)
- **Editorial Accents**: `Cormorant Garamond` (Couture italic emphasis)
- **Interface & Body**: `Outfit` (Modern geometric luxury typography)
- **Monospace Ledger**: `SFMono` / system monospace for catalog indexes and serial tags

---

## Signature Interactive Features

1. **Ultra-Minimal Couture Hero**: Masked line reveals, statuesque whitespace, and floating product showcase.
2. **Cozy Room Ambience Simulator**: Instant toggle between Daylight and Bedside Night Light modes with warm ambient lamp glow.
3. **3D Crystal Motif Visualizer**: Interactive optical preview stage for 6 laser-engraved motifs (Galaxy, Rose, Saturn, Moon, Teddy, Heart).
4. **Retro Cassette Tape Sound Synthesizer**: Functional Web Audio API lo-fi chord player with rotating tape spools, animated VU meter, and 4-color casing switch.
5. **Slide-Out Cart & WhatsApp Concierge Checkout**: Real-time delivery fee calculation (Dhaka vs. Nationwide) and automated WhatsApp order dispatch generator.
6. **Strict Standards**:
   - 100% Pure English copy and Latin pricing (`Tk`).
   - Strictly ZERO unicode emojis (exclusively 1.5px custom SVG line vectors).
   - Disciplined 10px hard radius on all interactive controls and containers.

---

## Project Structure

```
├── assets/
│   ├── brand/               # Brand logos and vector crests
│   └── products/            # High-resolution curated product imagery
├── css/
│   ├── design-tokens.css    # 5-color palette, typography tokens, hard radius (10px)
│   ├── components.css       # Modular boutique components and animations
│   └── responsive.css       # Mobile-first adaptive layout system
├── js/
│   ├── products-data.js     # Catalog registry and specs
│   ├── ambience-glow.js     # Cozy room night lighting engine
│   ├── cassette-player.js   # Analog Web Audio synthesizer engine
│   ├── cart-checkout.js     # Cart drawer, calculations & WhatsApp order bridge
│   └── app.js               # Core boutique lifecycle & quick-view modals
├── index.html               # Main digital flagship storefront
└── README.md
```

---

## Local Development

Launch the local web server:

```bash
# Using Python
python -m http.server 3456

# Or using Node.js
npx serve .
```

Open `http://localhost:3456/` in your browser.
