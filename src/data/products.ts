import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "crystal-ball-night-light",
    slug: "3d-crystal-ball-night-light",
    category: "crystal-lamps",
    categoryNameEn: "3D Crystal Lamps",
    badgeEn: "Top Best Seller",
    nameEn: "3D Glowing Crystal Ball Night Light with Wooden Base",
    taglineEn: "Warm Glowing Wooden LED Base • Pure Crystal Glass",
    price: 890,
    originalPrice: 1250,
    rating: 5.0,
    reviewCount: 38,
    image: "/assets/products/crystal_galaxy.jpg",
    variants: [
      { id: "galaxy", name: "Milky Way Galaxy & Solar System", image: "/assets/products/crystal_galaxy.jpg" },
      { id: "rose", name: "Glowing Rose with 'Love You' Ribbon", image: "/assets/products/crystal_rose.jpg" },
      { id: "saturn", name: "Saturn Planet with Rings", image: "/assets/products/crystal_galaxy.jpg" },
      { id: "moon", name: "Realistic Moon Surface", image: "/assets/products/crystal_galaxy.jpg" },
      { id: "teddy", name: "Cute Smile Day Teddy Bear", image: "/assets/products/crystal_galaxy.jpg" },
      { id: "heart", name: "Glowing Suspended Heart", image: "/assets/products/crystal_galaxy.jpg" }
    ],
    featuresEn: [
      "Pure K9 crystal ball (6cm size) with crystal-clear transparency",
      "Detailed 3D laser engraving inside that will never fade or wear off",
      "Natural solid wooden base with warm, soothing LED night light",
      "USB powered (works with mobile chargers, power banks, and laptops)",
      "Safe and stays completely cool to the touch all night"
    ],
    boxIncludesEn: "1x 3D Crystal Ball, 1x Wooden LED Base with USB Cable, 1x Protective Gift Box"
  },
  {
    id: "retro-cassette-voice-recorder",
    slug: "retro-cassette-voice-recorder-keychain",
    category: "retro-gadgets",
    categoryNameEn: "Voice Keepsakes",
    badgeEn: "Viral Keepsake",
    nameEn: "Mini Voice Recorder Cassette Keychain",
    taglineEn: "Record Your Own Voice • Mini Playable Cassette Keychain",
    price: 650,
    originalPrice: 950,
    rating: 4.9,
    reviewCount: 52,
    image: "/assets/products/cassette_keychain.jpg",
    variants: [
      { id: "pink", name: "Blossom Pink", colorCode: "#FFD3F6", image: "/assets/products/cassette_keychain.jpg" },
      { id: "blue", name: "Mint Frost", colorCode: "#C0E6DE", image: "/assets/products/cassette_keychain.jpg" },
      { id: "cream", name: "Classic Cream White", colorCode: "#F4F4F8", image: "/assets/products/cassette_keychain.jpg" },
      { id: "noir", name: "Midnight Black", colorCode: "#0D132C", image: "/assets/products/cassette_keychain.jpg" }
    ],
    featuresEn: [
      "Record up to 30 seconds of your voice, a song, or special message",
      "Simple REC & PLAY buttons with built-in mic and speaker",
      "Can be re-recorded anytime or saved permanently",
      "Mini retro cassette design with cute rotating tape reels",
      "Includes a strong metal keychain clip for your keys or bag"
    ],
    boxIncludesEn: "1x Voice Recorder Keychain, Pre-installed Battery, 1x Simple User Guide"
  },
  {
    id: "hello-kitty-silver-necklace-set",
    slug: "hello-kitty-sterling-silver-necklace-gift-set",
    category: "romantic-gifts",
    categoryNameEn: "Jewelry & Gifts",
    badgeEn: "Perfect Gift Set",
    nameEn: "Hello Kitty Silver Pendant Necklace Gift Set",
    taglineEn: "Sparkling Silver Chain • Velvet Gift Box & Bag Included",
    price: 790,
    originalPrice: 1100,
    rating: 4.9,
    reviewCount: 44,
    image: "/assets/products/hello_kitty_necklace.jpg",
    variants: [
      { id: "pink-box", name: "Deluxe Blush Pink Velvet Gift Set", image: "/assets/products/hello_kitty_necklace.jpg" }
    ],
    featuresEn: [
      "Shiny silver plated necklace with sparkling crystals",
      "Safe for sensitive skin and comfortable for everyday wear",
      "Includes a premium plush pink velvet jewelry box",
      "Comes complete with luxury gift ribbon and matching gift bag",
      "An adorable gift for birthdays, anniversaries, or special surprises"
    ],
    boxIncludesEn: "1x Hello Kitty Silver Pendant & Chain, 1x Velvet Jewelry Box, 1x Gift Bag"
  },
  {
    id: "dynamic-moving-sand-art-lamp",
    slug: "360-rotating-moving-sand-art-hourglass-lamp",
    category: "sand-art",
    categoryNameEn: "Moving Sand Art",
    badgeEn: "Stress Relief Art",
    nameEn: "360° Rotating Moving Sand Art Tabletop Lamp",
    taglineEn: "Relaxing Sand Mountains • 3-Color Warm LED Ring Light",
    price: 1350,
    originalPrice: 1850,
    rating: 4.8,
    reviewCount: 29,
    image: "/assets/products/sand_art_lamp.jpg",
    variants: [
      { id: "purple", name: "Royal Purple & Gold Glitter Sand", image: "/assets/products/sand_art_lamp.jpg" },
      { id: "blue", name: "Deep Ocean Blue & White Sand", image: "/assets/products/sand_art_lamp.jpg" },
      { id: "sunset", name: "Warm Sunset Orange Sand", image: "/assets/products/sand_art_lamp.jpg" }
    ],
    featuresEn: [
      "Smooth 360-degree rotating frame creates a brand new landscape each flip",
      "Crystal clear glass reveals beautiful layers of colorful sand and glitter",
      "3 warm LED light modes (Warm, Natural, and Soft) with simple switch",
      "Sturdy non-slip base with USB power connection for your table or desk",
      "Helps calm the mind, relieve stress, and relax your eyes"
    ],
    boxIncludesEn: "1x Rotating Sand Art Disc, 1x LED Ring Base Stand, 1x USB Cable, 1x Air Regulator Syringe"
  },
  {
    id: "snowing-streetlamp-ambient-light",
    slug: "swirling-snow-streetlamp-night-light-diorama",
    category: "ambient-dioramas",
    categoryNameEn: "Tabletop Lamps",
    badgeEn: "Fairytale Decor",
    nameEn: "Snowing Streetlamp Tabletop Night Light",
    taglineEn: "Automatic Falling Snow • Warm Glow & Optional Music",
    price: 1190,
    originalPrice: 1650,
    rating: 5.0,
    reviewCount: 21,
    image: "/assets/products/streetlamp_diorama.jpg",
    variants: [
      { id: "black-lamp", name: "Vintage Black Streetlamp", image: "/assets/products/streetlamp_diorama.jpg" },
      { id: "red-lamp", name: "Festive Red Streetlamp", image: "/assets/products/streetlamp_diorama.jpg" }
    ],
    featuresEn: [
      "Built-in quiet motor continuously swirls sparkly snowflakes inside the lantern",
      "Two easy modes: Warm ambient light only OR light with soothing holiday music",
      "Classic vintage streetlamp design with a warm golden glow",
      "Dual power options: Works with 3x AA batteries or USB cable",
      "Adds a cozy, magical winter feel to any bedroom or living space"
    ],
    boxIncludesEn: "1x Snowing Streetlamp Lantern, 1x USB Power Cable, 1x User Guide"
  }
];
