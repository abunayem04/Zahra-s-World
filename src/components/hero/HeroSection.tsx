"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Plus, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Layers, 
  SunMedium, 
  Moon
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAmbience } from "@/context/AmbienceContext";

const FLAGSHIP_CREATIONS = [
  {
    id: "crystal-ball-night-light",
    index: "01",
    title: "Milky Way Galaxy Sphere",
    category: "3D Laser Optical Crystal",
    price: 890,
    image: "/assets/products/crystal_galaxy.jpg",
    specs: "80mm K9 Optical Crystal • Beechwood LED Base",
    kelvin: "2700K Warm Spectrum",
    provenance: "Batch 026 // Solid Core",
    tag: "Bestseller Atelier Choice",
  },
  {
    id: "mini-cassette-recorder-keychain",
    index: "02",
    title: "Analog Cassette Voice Memo",
    category: "Acoustic Keepsake",
    price: 650,
    image: "/assets/products/cassette_keychain.jpg",
    specs: "Real Voice Recording • Mechanical Spools",
    kelvin: "Analog Warmth",
    provenance: "Edition 2026 // Lo-Fi",
    tag: "Personal Keepsake",
  },
  {
    id: "moving-sand-art-lamp",
    index: "03",
    title: "360° Kinetic Sandscape Lamp",
    category: "Dynamic Kinetic Art",
    price: 1450,
    image: "/assets/products/sand_art_lamp.jpg",
    specs: "Fluid Mineral Quartz • Touch Dimmable Halo",
    kelvin: "Ambient Diffusion",
    provenance: "Limited Atelier Series",
    tag: "Architectural Decor",
  },
  {
    id: "snowing-streetlamp-night-light",
    index: "04",
    title: "Swirling Snow Streetlamp Light",
    category: "Illuminated Diorama",
    price: 1290,
    image: "/assets/products/streetlamp_diorama.jpg",
    specs: "Continuous Snow Vortex • Victorian Lantern",
    kelvin: "Winter Nocturne",
    provenance: "Chamber Series",
    tag: "Atmospheric Room Accents",
  },
];

export const HeroSection: React.FC = () => {
  const { addItem } = useCart();
  const { isCozyNight, toggleAmbience } = useAmbience();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightTone, setLightTone] = useState<"warm" | "moon">("warm");

  const current = FLAGSHIP_CREATIONS[selectedIndex];

  // Auto-cycle through flagship creations every 7 seconds unless user hovers
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % FLAGSHIP_CREATIONS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section 
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Photometric Ambient Aura Backdrops */}
      <div 
        className={`absolute top-1/4 right-8 w-[550px] h-[550px] rounded-full blur-[130px] pointer-events-none -z-10 transition-all duration-700 ${
          lightTone === "warm" ? "bg-palette-pink/35" : "bg-palette-mint/35"
        }`} 
      />
      <div className="absolute bottom-10 left-10 w-[480px] h-[480px] rounded-full bg-palette-mint/20 blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Metadata Frame */}
        <div className="border-b border-noir/10 dark:border-white/10 pb-4 mb-8 md:mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-palette-teal animate-pulse" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slateTeal dark:text-mintFrost">
              EDITION 2026 // COLLECTION N° 01
            </span>
            <span className="hidden sm:inline text-noir/30 dark:text-white/30">•</span>
            <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.12em] text-noir/60 dark:text-canvas/60">
              LATITUDE 23.8583° N • SAVAR ATELIER
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-noir/60 dark:text-canvas/60">
              <span className="w-1.5 h-1.5 rounded-full bg-palette-pink" />
              <span>OPTICAL K9 GRADE</span>
            </div>
            <span className="text-noir/30 dark:text-white/30">•</span>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slateTeal dark:text-mintFrost font-semibold">
              INSURED NATIONWIDE COD
            </div>
          </div>
        </div>

        {/* Main Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Statuesque Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Atelier Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-white/80 dark:bg-noir/80 backdrop-blur-md border border-noir/10 dark:border-white/15 shadow-subtle mb-6">
              <Sparkles className="w-3.5 h-3.5 text-palette-teal" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-noir dark:text-canvas">
                Haute Celestial Objects
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-semibold uppercase tracking-tight text-noir dark:text-canvas leading-[1.04] mb-6">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Sanctuaries
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-slateTeal dark:text-mintFrost"
                >
                  Of Pure Light
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-couture lowercase italic tracking-normal text-noir/90 dark:text-canvas/90"
                >
                  &amp; Timeless Keepsakes
                </motion.span>
              </span>
            </h1>

            {/* Editorial Poetic Narrative */}
            <p className="text-base sm:text-lg text-noir/75 dark:text-canvas/75 font-normal max-w-xl leading-relaxed mb-8 font-sans">
              Laser-sculpted within dense optical K9 crystal and analog voice memorabilia, each piece is engineered to anchor warmth, quietude, and memory into modern living sanctuaries.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <Link
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[10px] bg-noir dark:bg-canvas text-white dark:text-noir font-mono text-xs font-semibold uppercase tracking-[0.14em] hover:bg-noir-hover dark:hover:bg-white shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span>Explore All Creations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/8801320829916"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-[10px] bg-white/70 dark:bg-white/10 text-xs font-mono font-semibold uppercase tracking-[0.14em] text-noir dark:text-canvas hover:bg-white dark:hover:bg-white/20 border border-noir/15 dark:border-white/15 transition-all shadow-subtle"
              >
                <span className="w-2 h-2 rounded-full bg-palette-teal" />
                <span>WhatsApp Concierge</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slateTeal dark:text-mintFrost" />
              </a>
            </div>

            {/* Trust Assurance Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl pt-4 border-t border-noir/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-palette-teal shrink-0" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-noir/70 dark:text-canvas/70 font-medium">
                  Nationwide COD
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-palette-teal shrink-0" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-noir/70 dark:text-canvas/70 font-medium">
                  Damage Insured
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-palette-teal shrink-0" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-noir/70 dark:text-canvas/70 font-medium">
                  Pure K9 Crystal
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Museum-Grade Centered Artifact Stage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[10px] overflow-hidden bg-white dark:bg-noir/90 border border-noir/15 dark:border-white/15 shadow-xl">
              
              {/* Top Archival Tag & Ambient Glow Switcher */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <span className="px-3 py-1 rounded-[8px] bg-noir/85 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-widest border border-white/15 shadow-sm">
                  {current.tag}
                </span>

                {/* Ambient Tone Switcher */}
                <div className="inline-flex items-center gap-1 bg-noir/85 backdrop-blur-md p-1 rounded-[8px] border border-white/15 shadow-sm">
                  <button
                    onClick={() => setLightTone("warm")}
                    className={`px-2 py-0.5 rounded-[6px] font-mono text-[9px] uppercase tracking-wider flex items-center gap-1 transition-all ${
                      lightTone === "warm" 
                        ? "bg-palette-pink text-noir font-bold" 
                        : "text-white/70 hover:text-white"
                    }`}
                    title="2700K Warm Amber Glow"
                  >
                    <SunMedium className="w-3 h-3" />
                    <span>2700K</span>
                  </button>
                  <button
                    onClick={() => setLightTone("moon")}
                    className={`px-2 py-0.5 rounded-[6px] font-mono text-[9px] uppercase tracking-wider flex items-center gap-1 transition-all ${
                      lightTone === "moon" 
                        ? "bg-palette-mint text-noir font-bold" 
                        : "text-white/70 hover:text-white"
                    }`}
                    title="4000K Lunar Glow"
                  >
                    <Moon className="w-3 h-3" />
                    <span>Moon</span>
                  </button>
                </div>
              </div>

              {/* Artifact Visual Display with AnimatePresence */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-black/5 to-black/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Tactile Glass Plinth */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-noir/90 backdrop-blur-md text-white p-4 rounded-[10px] border border-white/15 shadow-xl">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[11px] font-bold text-palette-pink">
                          {current.index} / {FLAGSHIP_CREATIONS.length}
                        </span>
                        <span className="text-white/40 text-[10px]">•</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-palette-mint">
                          {current.provenance}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white tracking-wide leading-snug">
                        {current.title}
                      </h3>
                      <p className="font-mono text-[11px] text-white/70 mt-0.5">
                        {current.specs}
                      </p>
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <span className="font-mono text-base font-bold text-palette-pink">
                        Tk {current.price}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-white/50">
                        In Stock
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addItem(current.id)}
                    className="w-full mt-2 py-2.5 px-4 rounded-[8px] bg-palette-pink text-noir font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Acquire This Creation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Flagship Selector Strip (4 Numbered Pillars) */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-noir/10 dark:border-white/10">
          <div className="text-center sm:text-left mb-4">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slateTeal dark:text-mintFrost">
              Audition Atelier Flagships
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {FLAGSHIP_CREATIONS.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-[10px] border transition-all relative overflow-hidden group ${
                    isSelected
                      ? "bg-white dark:bg-noir border-noir dark:border-palette-pink shadow-md"
                      : "bg-white/50 dark:bg-noir/50 border-noir/10 dark:border-white/10 hover:border-noir/30 dark:hover:border-white/30"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activePillar"
                      className="absolute top-0 left-0 right-0 h-1 bg-palette-pink"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono text-xs font-bold ${
                      isSelected ? "text-palette-teal dark:text-mintFrost" : "text-noir/50 dark:text-canvas/50"
                    }`}>
                      {item.index}
                    </span>
                    <span className="font-mono text-xs font-bold text-noir dark:text-canvas">
                      Tk {item.price}
                    </span>
                  </div>

                  <h4 className="font-display text-sm font-semibold text-noir dark:text-canvas truncate">
                    {item.title}
                  </h4>
                  <p className="font-mono text-[10px] text-noir/60 dark:text-canvas/60 truncate mt-0.5">
                    {item.category}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
