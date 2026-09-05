/* ==========================================================================
   ZAHRA'S WORLD — VERIFIED PRODUCT CATALOG DATA (PURE ENGLISH EDITION)
   Savar, Dhaka • Nationwide Cash on Delivery
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: "crystal-ball-night-light",
    slug: "3d-crystal-ball-night-light",
    category: "crystal-lamps",
    categoryNameEn: "3D Crystal Spheres",
    badgeEn: "Trending Viral",
    nameEn: "3D Laser-Engraved Celestial Crystal Ball Night Light",
    taglineEn: "Solid Beechwood LED Uplight Pedestal • Optical K9 Glass",
    price: 890,
    originalPrice: 1250,
    rating: 5.0,
    reviewCount: 38,
    image: "assets/products/crystal_galaxy.jpg",
    variants: [
      { id: "galaxy", name: "Milky Way Galaxy & Solar System", image: "assets/products/crystal_galaxy.jpg" },
      { id: "rose", name: "Blooming Rose with 'Love You' Ribbon", image: "assets/products/crystal_rose.jpg" },
      { id: "saturn", name: "Saturn with Planetary Rings", image: "assets/products/crystal_galaxy.jpg" },
      { id: "moon", name: "Detailed Topographic Crater Moon", image: "assets/products/crystal_galaxy.jpg" },
      { id: "teddy", name: "Smile Day Teddy Bear", image: "assets/products/crystal_galaxy.jpg" },
      { id: "heart", name: "Angelic Glowing Suspended Heart", image: "assets/products/crystal_galaxy.jpg" }
    ],
    featuresEn: [
      "High-density K9 optical crystal sphere (6cm diameter)",
      "High-precision permanent internal 3D laser holographic motif",
      "Natural solid beechwood base with warm amber LED uplight",
      "USB powered (connects to phone charger, laptop, or power bank)",
      "Safe low-voltage operation, cool to the touch all night"
    ],
    boxIncludesEn: "1x K9 Crystal Sphere, 1x Solid Beechwood LED Base with USB Cable, 1x Presentation Gift Box"
  },
  {
    id: "retro-cassette-voice-recorder",
    slug: "retro-cassette-voice-recorder-keychain",
    category: "retro-gadgets",
    categoryNameEn: "Retro Audio Keepsakes",
    badgeEn: "Viral Keepsake",
    nameEn: "Vintage Cassette Tape Mini Voice Recorder Keychain",
    taglineEn: "Record Your Own Voice Message • Playable Tactile Audio Keepsake",
    price: 650,
    originalPrice: 950,
    rating: 4.9,
    reviewCount: 52,
    image: "assets/products/cassette_keychain.jpg",
    variants: [
      { id: "pink", name: "Blossom Pink", colorCode: "#FFD3F6", image: "assets/products/cassette_keychain.jpg" },
      { id: "blue", name: "Mint Frost", colorCode: "#C0E6DE", image: "assets/products/cassette_keychain.jpg" },
      { id: "cream", name: "Clean Porcelain", colorCode: "#F4F4F8", image: "assets/products/cassette_keychain.jpg" },
      { id: "noir", name: "Obsidian Navy", colorCode: "#0D132C", image: "assets/products/cassette_keychain.jpg" }
    ],
    featuresEn: [
      "Records up to 30 seconds of high-clarity voice messages or music",
      "Dedicated REC button, PLAY button, and built-in microphone & speaker",
      "Re-recordable anytime or keep your cherished memory preserved",
      "Miniature vintage cassette casing with rotating reel artwork",
      "Includes sturdy metal carabiner clip for bags, keys, or backpacks"
    ],
    boxIncludesEn: "1x Retro Voice Recorder Keychain, Pre-installed Battery, 1x Operating Instruction Card"
  },
  {
    id: "hello-kitty-silver-necklace-set",
    slug: "hello-kitty-sterling-silver-necklace-gift-set",
    category: "romantic-gifts",
    categoryNameEn: "Romantic & Jewelry Gifts",
    badgeEn: "Perfect Gift Set",
    nameEn: "Hello Kitty Sparkling Silver Pendant with Velvet Gift Box",
    taglineEn: "925 Sterling Silver Plated • Deluxe Pink Velvet Case & Tote",
    price: 790,
    originalPrice: 1100,
    rating: 4.9,
    reviewCount: 44,
    image: "assets/products/hello_kitty_necklace.jpg",
    variants: [
      { id: "pink-box", name: "Deluxe Blush Pink Velvet Gift Set", image: "assets/products/hello_kitty_necklace.jpg" }
    ],
    featuresEn: [
      "Delicate Sanrio Hello Kitty silhouette adorned with sparkling crystals",
      "High-shine anti-tarnish silver plating with comfortable smooth chain",
      "Presented in a luxury octagonal blush-pink velvet display jewelry case",
      "Comes with matching pink Hello Kitty designer paper gift tote bag",
      "The ultimate romantic and heartfelt gift for birthdays, anniversaries, and loved ones"
    ],
    boxIncludesEn: "1x Hello Kitty Silver Necklace, 1x Premium Velvet Display Box, 1x Designer Gift Bag"
  },
  {
    id: "moving-sand-art-lamp",
    slug: "moving-sand-art-round-lamp",
    category: "ambient-decor",
    categoryNameEn: "Ambient Desk Decor",
    badgeEn: "Hypnotic Desk Art",
    nameEn: "360° Rotating Dynamic Moving Sand Art Hourglass Lamp",
    taglineEn: "Cascading Purple Dunes • Weighted Base • Calming Ambient Motion",
    price: 1350,
    originalPrice: 1850,
    rating: 5.0,
    reviewCount: 29,
    image: "assets/products/sand_art_lamp.jpg",
    variants: [
      { id: "purple", name: "Royal Purple Mountain Dunes", image: "assets/products/sand_art_lamp.jpg" }
    ],
    featuresEn: [
      "Smooth 360-degree rotation creates unique mountain landscapes with every flip",
      "Layered violet, deep purple, and pearl-white fine sand cascading through fluid",
      "Sleek architectural black circular frame with ring halo lighting",
      "Stress-relieving and deeply soothing desk companion for work and study spaces",
      "High-transparency crystal-clear optical glass"
    ],
    boxIncludesEn: "1x 360° Sand Art Glass Frame, 1x Steady Desk Stand Base, 1x Flow Control Regulator"
  },
  {
    id: "snowing-streetlamp-phonebooth-light",
    slug: "snowing-streetlamp-phonebooth-night-light",
    category: "ambient-decor",
    categoryNameEn: "Ambient Desk Decor",
    badgeEn: "Cozy Night Light",
    nameEn: "Illuminated Swirling Snow Streetlamp Ambient Diorama",
    taglineEn: "Warm Lantern Glow • Gentle Drifting Snowflakes • Retro Telephone Pillar",
    price: 1250,
    originalPrice: 1750,
    rating: 4.8,
    reviewCount: 31,
    image: "assets/products/streetlamp_diorama.jpg",
    variants: [
      { id: "vintage-bronze", name: "Winter Streetlamp in Drifting Snow", image: "assets/products/streetlamp_diorama.jpg" }
    ],
    featuresEn: [
      "Delicate vintage streetlight post inside a high-clarity sealed acrylic tower",
      "Soft warm amber LED streetlight creates a comforting room atmosphere",
      "Gentle swirling micro-snowflakes create a magical winter night ambiance",
      "Quiet motor suspension with low battery/USB power consumption",
      "Ideal bedside decorative piece for peaceful sleep and cozy room vibes"
    ],
    boxIncludesEn: "1x Snowing Streetlamp Chamber, 1x USB Power Cable, 1x Presentation Gift Box"
  }
];

// Delivery configurations tailored for Bangladesh e-commerce
const DELIVERY_CONFIG = {
  dhakaMetroFee: 70,
  outsideDhakaFee: 130,
  giftWrapFee: 50,
  freeDeliveryThreshold: 2500,
  contactPhone: "+880 1320-829916",
  whatsappNumber: "+8801320829916",
  email: "zahrasworld999@gmail.com",
  location: "Savar, Dhaka, Bangladesh",
  tiktok: "https://www.tiktok.com/@zahras_world7",
  messenger: "https://m.me/zahrasworld",
  deliveryPartners: ["Steadfast Courier", "Pathao Courier", "RedX"]
};
