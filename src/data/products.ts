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
  },
  {
    id: "tulip-mirror-cube-lamp",
    slug: "infinity-tulip-mirror-cube-night-light",
    category: "romantic-gifts",
    categoryNameEn: "Ambient Decor",
    badgeEn: "Viral Sensation",
    nameEn: "Infinite Tulip Mirror Cube Tabletop Lamp",
    taglineEn: "Mirrored Vanity Cube by Day • Infinite Blooming Tulip Garden by Night",
    price: 850,
    originalPrice: 1200,
    rating: 5.0,
    reviewCount: 36,
    image: "/assets/products/tulip_mirror_cube.jpg",
    variants: [
      { id: "blush-pink", name: "Blush Pink Tulips", colorCode: "#FFD3F6", image: "/assets/products/tulip_mirror_cube.jpg" },
      { id: "lavender", name: "Lilac Lavender Tulips", colorCode: "#E1BEE7", image: "/assets/products/tulip_mirror_cube.jpg" },
      { id: "sky-blue", name: "Mint Sky Tulips", colorCode: "#C0E6DE", image: "/assets/products/tulip_mirror_cube.jpg" }
    ],
    featuresEn: [
      "2-in-1 Design: Functions as a clean aesthetic mirror when turned off",
      "Magical infinite optical illusion: Turns into an endless glowing tulip garden when illuminated",
      "High-clarity acrylic mirrors with warm ambient LED glow",
      "Compact tabletop cube size (10x10cm) fits bedside tables and study desks",
      "Battery powered with easy toggle switch (batteries included)"
    ],
    boxIncludesEn: "1x Finished Tulip Mirror Cube Lamp, 3x Pre-installed LR44 Batteries, 1x Gift Box"
  },
  {
    id: "vintage-wooden-music-box",
    slug: "hand-cranked-laser-carved-wooden-music-box",
    category: "retro-gadgets",
    categoryNameEn: "Music Keepsakes",
    badgeEn: "Vintage Craft",
    nameEn: "Hand-Cranked Laser Carved Wooden Music Box",
    taglineEn: "Classic Melodies • Solid Walnut Wood with Gold Mechanism",
    price: 750,
    originalPrice: 1050,
    rating: 4.9,
    reviewCount: 47,
    image: "/assets/products/vintage_music_box.jpg",
    variants: [
      { id: "cant-help-falling", name: "Can't Help Falling in Love", image: "/assets/products/vintage_music_box.jpg" },
      { id: "you-are-my-sunshine", name: "You Are My Sunshine", image: "/assets/products/vintage_music_box.jpg" },
      { id: "harry-potter", name: "Hedwig's Theme Melody", image: "/assets/products/vintage_music_box.jpg" },
      { id: "la-vie-en-rose", name: "La Vie En Rose", image: "/assets/products/vintage_music_box.jpg" }
    ],
    featuresEn: [
      "Pure mechanical hand-crank movement—no batteries or charging required",
      "Laser engraved antique floral filigree on natural walnut wood casing",
      "High-precision 18-note steel comb mechanism produces crisp, nostalgic acoustic notes",
      "Mini pocket size (6.5 x 5 x 4 cm) perfect as a heartfelt keepsake gift",
      "Speed of music is naturally controlled by how fast you turn the crank handle"
    ],
    boxIncludesEn: "1x Hand-Crank Music Box, 1x Velvet Keepsake Pouch, 1x Protective Gift Box"
  },
  {
    id: "astronaut-galaxy-star-projector",
    slug: "astronaut-starry-galaxy-nebula-projector",
    category: "crystal-lamps",
    categoryNameEn: "Star Projectors",
    badgeEn: "Top Rated",
    nameEn: "Astronaut Starry Sky Nebula Night Light Projector",
    taglineEn: "360° Magnetic Head Rotation • 8 Vivid Galaxy Colors with Remote",
    price: 1450,
    originalPrice: 2100,
    rating: 5.0,
    reviewCount: 63,
    image: "/assets/products/astronaut_projector.jpg",
    variants: [
      { id: "classic-white", name: "Lunar White Astronaut", colorCode: "#FFFFFF", image: "/assets/products/astronaut_projector.jpg" },
      { id: "stellar-black", name: "Midnight Black Astronaut", colorCode: "#1A1A24", image: "/assets/products/astronaut_projector.jpg" }
    ],
    featuresEn: [
      "Projects high-definition twinkling stars and swirling colorful nebula clouds onto ceiling and walls",
      "Magnetic 360-degree rotatable astronaut head to adjust projection angle anywhere",
      "Wireless remote control to adjust brightness, nebula speed, and 8 color modes",
      "Built-in 45min and 90min auto-off sleep timer for bedtime relaxation",
      "USB plug & play with sturdy lunar crater standing base"
    ],
    boxIncludesEn: "1x Astronaut Projector, 1x Moon Surface Base, 1x Remote Control, 1x USB Cable, 1x User Manual"
  },
  {
    id: "enchanted-rose-glass-dome",
    slug: "enchanted-eternal-rose-glass-dome-lamp",
    category: "romantic-gifts",
    categoryNameEn: "Eternal Flowers",
    badgeEn: "Romantic Classic",
    nameEn: "Enchanted Glowing Rose Glass Dome Tabletop Lamp",
    taglineEn: "Preserved Eternal Rose • Warm Fairy String Lights in Glass Cloche",
    price: 1250,
    originalPrice: 1750,
    rating: 4.9,
    reviewCount: 31,
    image: "/assets/products/eternal_rose_dome.jpg",
    variants: [
      { id: "crimson-red", name: "Royal Crimson Red Rose", colorCode: "#C2185B", image: "/assets/products/eternal_rose_dome.jpg" },
      { id: "galaxy-foil", name: "Holographic Crystal Galaxy Rose", colorCode: "#FFD3F6", image: "/assets/products/eternal_rose_dome.jpg" },
      { id: "royal-blue", name: "Deep Ocean Blue Rose", colorCode: "#1E88E5", image: "/assets/products/eternal_rose_dome.jpg" }
    ],
    featuresEn: [
      "High quality preserved flower petal look that never withers or fades",
      "Surrounded by 20 warm white micro-LED fairy lights inside clear borosilicate glass",
      "Natural solid wooden base with smooth matte finish and anti-slip feet",
      "Battery operated (3x AAA) with hidden underside on/off toggle switch",
      "Delivered in a shockproof gift box with ribbon handle"
    ],
    boxIncludesEn: "1x Glass Dome Eternal Rose Lamp, 1x Luxury Gift Box with Satin Ribbon"
  },
  {
    id: "levitating-moon-lamp",
    slug: "3d-magnetic-levitating-floating-moon-lamp",
    category: "crystal-lamps",
    categoryNameEn: "Magnetic Lamps",
    badgeEn: "Luxury Tech",
    nameEn: "3D Magnetic Levitating & Floating Moon Lamp",
    taglineEn: "Floats & Spins in Mid-Air • 3 Lunar Light Modes with Touch Base",
    price: 2450,
    originalPrice: 3400,
    rating: 5.0,
    reviewCount: 19,
    image: "/assets/products/levitating_moon.jpg",
    variants: [
      { id: "walnut-base", name: "Dark Walnut Wood Base", colorCode: "#4E342E", image: "/assets/products/levitating_moon.jpg" },
      { id: "oak-base", name: "Light Natural Oak Base", colorCode: "#D7CCC8", image: "/assets/products/levitating_moon.jpg" }
    ],
    featuresEn: [
      "Patented magnetic levitation tech suspends the moon lamp seamlessly in mid-air",
      "Continuous smooth 360-degree silent rotation with zero friction",
      "Detailed 3D printed lunar topography accurately mapped from real NASA satellite scans",
      "Touch-sensitive base switch to toggle between Warm Yellow, Cool White, and Warm White",
      "Wireless power induction technology keeps the lamp glowing without any wires connected to the sphere"
    ],
    boxIncludesEn: "1x 3D Moon Sphere (14cm), 1x Magnetic Base with Touch Sensor, 1x AC Power Adapter, 1x Setup Guide"
  },
  {
    id: "custom-acrylic-spotify-plaque",
    slug: "custom-scannable-spotify-acrylic-song-plaque",
    category: "retro-gadgets",
    categoryNameEn: "Custom Audio Art",
    badgeEn: "Custom Keepsake",
    nameEn: "Custom Scannable Song Acrylic Plaque with LED Base",
    taglineEn: "Scannable Music Code • Crystal Clear Acrylic with Glowing Wooden Stand",
    price: 950,
    originalPrice: 1400,
    rating: 4.9,
    reviewCount: 58,
    image: "/assets/products/spotify_acrylic_plaque.jpg",
    variants: [
      { id: "warm-led", name: "Warm Golden Glow Wooden Base", image: "/assets/products/spotify_acrylic_plaque.jpg" },
      { id: "rgb-led", name: "7-Color RGB Touch Wooden Base", image: "/assets/products/spotify_acrylic_plaque.jpg" }
    ],
    featuresEn: [
      "Customizable with any song, album cover, and personal memory title",
      "Laser-engraved scannable soundwave code that plays the song directly on your phone camera",
      "Premium shatterproof high-gloss acrylic plate (5mm thickness)",
      "Solid beechwood LED base with USB power cable and on/off inline switch",
      "The ultimate personalized romantic gift for anniversaries, birthdays, and best friends"
    ],
    boxIncludesEn: "1x Custom Acrylic Plaque, 1x LED Light Wooden Base with USB Cable, 1x Gift Box"
  },
  {
    id: "vintage-feather-quill-pen-set",
    slug: "antique-calligraphy-feather-quill-wax-seal-gift-set",
    category: "romantic-gifts",
    categoryNameEn: "Vintage Gift Sets",
    badgeEn: "Collector Edition",
    nameEn: "Antique Calligraphy Feather Quill & Wax Seal Gift Set",
    taglineEn: "Natural Feather Dip Pen • Engraved Wax Seal Stamp & Metallic Inks",
    price: 890,
    originalPrice: 1300,
    rating: 4.8,
    reviewCount: 26,
    image: "/assets/products/calligraphy_quill_set.jpg",
    variants: [
      { id: "emerald-green", name: "Royal Emerald Green Feather", colorCode: "#2E7D32", image: "/assets/products/calligraphy_quill_set.jpg" },
      { id: "wine-burgundy", name: "Vintage Wine Burgundy Feather", colorCode: "#880E4F", image: "/assets/products/calligraphy_quill_set.jpg" },
      { id: "midnight-navy", name: "Midnight Navy Blue Feather", colorCode: "#0D132C", image: "/assets/products/calligraphy_quill_set.jpg" }
    ],
    featuresEn: [
      "Authentic dyed natural goose feather with ornate carved brass alloy nib holder",
      "Includes 5 interchangeable stainless steel calligraphy nibs for different writing widths",
      "Heavy brass wax seal stamp with engraved botanical tree/crown emblem and wooden handle",
      "Comes with sealing wax sticks, melting spoon, and glass inkwell bottle",
      "Packaged in a luxurious embossed emerald hardbound gift chest"
    ],
    boxIncludesEn: "1x Feather Quill Pen, 5x Stainless Nibs, 1x Ink Bottle, 1x Wax Seal Stamp, 2x Wax Sticks, 1x Spoon"
  },
  {
    id: "jellyfish-ambient-aquarium-lamp",
    slug: "color-changing-led-jellyfish-mood-aquarium-lamp",
    category: "ambient-dioramas",
    categoryNameEn: "Ambient Aquariums",
    badgeEn: "Calming Mood",
    nameEn: "Color-Changing LED Jellyfish Mood Aquarium Lamp",
    taglineEn: "Realistic Swimming Silicone Jellyfish • 16 RGB Colors & Remote",
    price: 1390,
    originalPrice: 1950,
    rating: 4.9,
    reviewCount: 34,
    image: "/assets/products/jellyfish_mood_lamp.jpg",
    variants: [
      { id: "cylinder-silver", name: "Brushed Titanium Cylinder", image: "/assets/products/jellyfish_mood_lamp.jpg" },
      { id: "cylinder-noir", name: "Matte Black Cylinder", image: "/assets/products/jellyfish_mood_lamp.jpg" }
    ],
    featuresEn: [
      "Ultra-quiet air flow motor creates natural fluid currents for realistic swimming motion",
      "Includes 2 life-like fluorescent silicone jellyfish that glow and float gracefully",
      "16 vibrant RGB color modes and 4 light transition effects (Flash, Strobe, Fade, Smooth)",
      "Helps reduce stress, anxiety, and creates a peaceful deep-sea ambiance for work or sleep",
      "Powered by USB cable or 3x AA batteries for flexible placement"
    ],
    boxIncludesEn: "1x Jellyfish Tank Lamp, 2x Silicone Jellyfish, 1x Remote Control, 1x USB Cable, 1x Manual"
  },
  {
    id: "couple-magnetic-projection-bracelets",
    slug: "sun-and-moon-100-languages-magnetic-couple-bracelets",
    category: "romantic-gifts",
    categoryNameEn: "Couples Jewelry",
    badgeEn: "Couples Favorite",
    nameEn: "Sun & Moon '100 Languages I Love You' Magnetic Bracelets",
    taglineEn: "Magnetic Attraction Charm • Secret Nano Projection Crystal",
    price: 690,
    originalPrice: 990,
    rating: 5.0,
    reviewCount: 72,
    image: "/assets/products/projection_bracelets.jpg",
    variants: [
      { id: "sun-moon-pair", name: "Sun & Moon Matching Set (Pair of 2)", image: "/assets/products/projection_bracelets.jpg" }
    ],
    featuresEn: [
      "Contains a micro-carved optical nano bead: Shine your phone flashlight through to project 'I Love You' in 100 languages",
      "Magnetic bell charm: When holding hands, the two bracelets snap together automatically",
      "Adjustable durable braided cord & natural black matte stone with sterling silver moon charm",
      "Hypoallergenic, water resistant, and comfortable for everyday wear",
      "Includes a plush velvet jewelry pouch and romantic declaration card"
    ],
    boxIncludesEn: "2x Matching Couple Bracelets (His & Hers), 1x Velvet Gift Pouch, 1x Love Card"
  },
  {
    id: "retro-mini-polaroid-photo-keychain",
    slug: "personalized-mini-film-roll-photo-album-keychain",
    category: "retro-gadgets",
    categoryNameEn: "Photo Keepsakes",
    badgeEn: "Heartfelt Keepsake",
    nameEn: "Custom Mini 35mm Film Roll Photo Album Keychain",
    taglineEn: "Pull-Out 10 Photo Film Strip • Vintage Camera Roll Casing",
    price: 590,
    originalPrice: 850,
    rating: 4.9,
    reviewCount: 65,
    image: "/assets/products/film_roll_keychain.jpg",
    variants: [
      { id: "vintage-bronze", name: "Vintage Bronze Film Canister", image: "/assets/products/film_roll_keychain.jpg" },
      { id: "blush-pink", name: "Pastel Pink Film Canister", colorCode: "#FFD3F6", image: "/assets/products/film_roll_keychain.jpg" }
    ],
    featuresEn: [
      "Holds up to 10 of your favorite high-resolution memories on a pull-out glossy film strip",
      "Smooth rewind mechanism: Rotate the top knob to roll the photos back inside the canister",
      "Waterproof and scratch-resistant photo film coating ensures long-lasting colors",
      "Vintage 35mm metal camera canister design with keychain clip and wooden accent beads",
      "A unique surprise pocket gift for birthdays, long-distance couples, and anniversaries"
    ],
    boxIncludesEn: "1x Mini Film Roll Keychain, 1x Rewind Tool, 1x Kraft Gift Box with Ribbon"
  }
];
