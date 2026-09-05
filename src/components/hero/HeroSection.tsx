"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Gem, Sparkles } from "lucide-react";

// Exact 20 color steps sampled directly from the user's reference image
const GLASS_SLABS = [
  { hex: "#FFFFFF", rgb: "255, 255, 255", name: "Pure Light" },
  { hex: "#FFF0F9", rgb: "255, 240, 249", name: "Pale Blush" },
  { hex: "#FFE2F4", rgb: "255, 226, 244", name: "Soft Blossom" },
  { hex: "#FFD4F0", rgb: "255, 212, 240", name: "Rose Mist" },
  { hex: "#FFC4EB", rgb: "255, 196, 235", name: "Petal Frost" },
  { hex: "#FFB2E6", rgb: "255, 178, 230", name: "Orchid Tint" },
  { hex: "#FFA0E0", rgb: "255, 160, 224", name: "Luminous Pink" },
  { hex: "#FF8DDA", rgb: "255, 141, 218", name: "Sweet Rose" },
  { hex: "#FF76D3", rgb: "255, 118, 211", name: "Radiant Pink" },
  { hex: "#FF5ECC", rgb: "255, 94, 204", name: "Vivid Bloom" },
  { hex: "#FA41C3", rgb: "250, 65, 195", name: "Neon Magenta" },
  { hex: "#EB1FB6", rgb: "235, 31, 182", name: "Electric Berry" },
  { hex: "#D405A3", rgb: "212, 5, 163", name: "Deep Orchid" },
  { hex: "#B8008C", rgb: "184, 0, 140", name: "Rich Magenta" },
  { hex: "#9C0076", rgb: "156, 0, 118", name: "Royal Berry" },
  { hex: "#810061", rgb: "129, 0, 97", name: "Velvet Plum" },
  { hex: "#67004D", rgb: "103, 0, 77", name: "Midnight Wine" },
  { hex: "#4E003A", rgb: "78, 0, 58", name: "Deep Amethyst" },
  { hex: "#370028", rgb: "55, 0, 40", name: "Dark Mulberry" },
  { hex: "#220017", rgb: "34, 0, 23", name: "Obsidian Violet" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      
      {/* =========================================================================
          BACKGROUND: 20 SEAMLESS HORIZONTAL COLOR STEPS (ZERO WHITE LINES)
          AUTHENTIC FROSTED GLASSMORPHY TEXTURE & CAUSTIC DEPTH
          ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex flex-col justify-stretch">
        
        {/* 20 Clean Seamless Color Bands - Exactly Matching Reference Swatches (NO BORDERS) */}
        <div className="relative w-full h-full flex flex-col justify-stretch flex-1">
          {GLASS_SLABS.map((slab, idx) => (
            <div
              key={idx}
              className="w-full flex-1"
              style={{
                backgroundColor: slab.hex,
                border: "none",
                outline: "none",
                margin: 0,
                padding: 0,
                // Zero white lines or shadows between rows
                boxShadow: "none",
              }}
            />
          ))}
        </div>

        {/* Apple-Level Frosted Glass Diffusion & Luminous Caustic Light Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            // Soft frosted sheen diffusing the stepped backdrop
            background: `
              radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 45%, transparent 75%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(0, 0, 0, 0.15) 100%)
            `,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />

        {/* Ambient Caustic Light Points Illuminating the Glass Surface */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-white/40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-16 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C0E6DE]/25 blur-[120px] pointer-events-none" />
      </div>

      {/* =========================================================================
          FOREGROUND: APPLE PRO FROSTED GLASS FLOATING MONOLITH
          STATUESQUE, UNCLUTTERED, PURE LUXURY
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-2xl w-full mx-auto"
      >
        {/* Apple VisionOS-Grade Frosted Glass Tablet Card (Strict 10px Radius) */}
        <div 
          className="relative rounded-[10px] p-8 sm:p-12 md:p-14 text-center overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.28)",
            backdropFilter: "blur(36px) saturate(190%)",
            WebkitBackdropFilter: "blur(36px) saturate(190%)",
            border: "1px solid rgba(255, 255, 255, 0.75)",
            boxShadow: `
              0 35px 90px -15px rgba(0, 0, 0, 0.32),
              0 15px 40px -10px rgba(0, 0, 0, 0.18),
              inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95),
              inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.12)
            `,
          }}
        >
          {/* Specular Ambient Glow Orbs inside the Glass Tablet */}
          <div className="absolute -top-28 -left-28 w-56 h-56 rounded-full bg-white/55 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-56 h-56 rounded-full bg-palette-pink/45 blur-3xl pointer-events-none" />

          {/* Minimalist Atelier Provenance Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[10px] bg-white/75 backdrop-blur-md border border-white/80 text-noir font-mono text-[10px] font-bold uppercase tracking-[0.24em] shadow-sm mb-6">
            <Gem className="w-3.5 h-3.5 text-pink-600" />
            <span>Haute Celestial Atelier</span>
          </div>

          {/* Master Brand Headline: Statuesque, Regal & Pure */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-widest text-noir leading-[1.05] mb-3 drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
            Zahra&apos;s World
          </h1>

          {/* Poetic Italic Subtitle */}
          <p className="font-couture text-xl sm:text-2xl md:text-3xl italic font-normal text-noir/90 mb-8 tracking-wide">
            Poetry in Light &amp; Living Form
          </p>

          {/* Apple-Grade Tactile Frosted Buttons (Strict 10px Radius) */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#collection"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[10px] bg-noir text-white font-mono text-xs font-bold uppercase tracking-[0.14em] hover:bg-noir/85 hover:scale-[1.02] shadow-xl transition-all"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5 text-palette-pink" />
            </Link>

            <a
              href="https://wa.me/8801320829916"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-white/70 hover:bg-white text-noir font-mono text-xs font-semibold uppercase tracking-[0.14em] border border-white/90 backdrop-blur-md shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Concierge Order</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-pink-600" />
            </a>
          </div>

          {/* Subtle Monospace Spec Ledger */}
          <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-center gap-4 text-noir/70 font-mono text-[10px] uppercase tracking-widest">
            <span>Edition 2026</span>
            <span>•</span>
            <span>Optical K9 Glass</span>
            <span>•</span>
            <span>Nationwide COD</span>
          </div>

        </div>
      </motion.div>

    </section>
  );
};
