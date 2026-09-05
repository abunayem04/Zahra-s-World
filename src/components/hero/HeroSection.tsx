"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Gem } from "lucide-react";

// Exact 20 color steps sampled directly from the user's reference palette image
const GLASS_PALETTE_STEPS = [
  { color: "#FFFFFF", name: "Pure Light" },
  { color: "#FFF0F9", name: "Pale Blush" },
  { color: "#FFE2F4", name: "Soft Blossom" },
  { color: "#FFD4F0", name: "Rose Mist" },
  { color: "#FFC4EB", name: "Petal Frost" },
  { color: "#FFB2E6", name: "Orchid Tint" },
  { color: "#FFA0E0", name: "Luminous Pink" },
  { color: "#FF8DDA", name: "Sweet Rose" },
  { color: "#FF76D3", name: "Radiant Pink" },
  { color: "#FF5ECC", name: "Vivid Bloom" },
  { color: "#FA41C3", name: "Neon Magenta" },
  { color: "#EB1FB6", name: "Electric Berry" },
  { color: "#D405A3", name: "Deep Orchid" },
  { color: "#B8008C", name: "Rich Magenta" },
  { color: "#9C0076", name: "Royal Berry" },
  { color: "#810061", name: "Velvet Plum" },
  { color: "#67004D", name: "Midnight Wine" },
  { color: "#4E003A", name: "Deep Amethyst" },
  { color: "#370028", name: "Dark Mulberry" },
  { color: "#220017", name: "Obsidian Violet" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      
      {/* =========================================================================
          BACKGROUND: 20 EXACT COLOR BANDS, SLIGHTLY ANGLED ("AKTU TERA VABE")
          WITH APPLE-LEVEL GLASSMORPHY REFRACTIONS, SPECULAR SHEEN & HAIRLINES
          ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        
        {/* Angled container rotated at -14deg, scaled to bleed seamlessly off-screen */}
        <div 
          className="absolute -inset-[60%] flex flex-col justify-center items-stretch"
          style={{
            transform: "rotate(-14deg) scale(1.35)",
            transformOrigin: "center center",
          }}
        >
          {GLASS_PALETTE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-full relative transition-all duration-500"
              style={{
                backgroundColor: step.color,
              }}
            >
              {/* Glass Specular Top Highlight (Apple Glass Bevel) */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40 pointer-events-none" />
              
              {/* Glass Inner Reflection Sheen */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)",
                }}
              />

              {/* Glass Bottom Shadow Line (Subtle Depth Step) */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/15 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Ambient Radial Glass Glow (Softens center for ultra-luxurious frosted contrast) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-white/25 blur-3xl pointer-events-none" />
        
        {/* Apple Glass Refraction Overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 pointer-events-none" />
      </div>

      {/* =========================================================================
          FOREGROUND: APPLE-GRADE FROSTED GLASS EMBLEM & STATUESQUE TYPOGRAPHY
          COMPLETELY UNCLUTTERED ("HERO PAGE A KISU E RAKHA LAGBE NA")
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full mx-auto"
      >
        {/* Apple-Level Glassmorphism Centerpiece Card */}
        <div className="relative rounded-[10px] p-8 sm:p-12 md:p-14 text-center overflow-hidden backdrop-blur-2xl bg-white/35 dark:bg-black/35 border border-white/60 dark:border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.15)]">
          
          {/* Subtle Glass Card Specular Light Sheen */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-white/40 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-palette-pink/30 blur-2xl pointer-events-none" />

          {/* Minimalist Atelier Mark */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/15 text-noir dark:text-canvas font-mono text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm mb-6">
            <Gem className="w-3 h-3 text-pink-600 dark:text-palette-pink" />
            <span>Haute Celestial Atelier</span>
          </div>

          {/* Master Headline: Pure, Statuesque & Elegant */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-widest text-noir dark:text-white leading-[1.05] mb-4">
            Zahra&apos;s World
          </h1>

          {/* Poetic Subtitle */}
          <p className="font-couture text-xl sm:text-2xl md:text-3xl italic font-normal text-noir/85 dark:text-white/90 mb-8 tracking-wide">
            Poetry in Light &amp; Living Form
          </p>

          {/* Two Apple-Style Glass Frosted Action Buttons (Strict 10px Radius) */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#collection"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[10px] bg-noir text-white font-mono text-xs font-bold uppercase tracking-[0.14em] hover:bg-noir/85 hover:scale-[1.02] shadow-lg transition-all"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5 text-palette-pink" />
            </Link>

            <a
              href="https://wa.me/8801320829916"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-white/60 dark:bg-white/10 hover:bg-white/90 text-noir dark:text-canvas font-mono text-xs font-semibold uppercase tracking-[0.14em] border border-white/70 dark:border-white/20 backdrop-blur-md shadow-sm transition-all hover:scale-[1.02]"
            >
              <span>Concierge</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-pink-600 dark:text-palette-pink" />
            </a>
          </div>

          {/* Minimalist Monospace Provenance Footer */}
          <div className="mt-8 pt-6 border-t border-noir/10 dark:border-white/10 flex items-center justify-center gap-4 text-noir/60 dark:text-white/60 font-mono text-[10px] uppercase tracking-widest">
            <span>Edition 2026</span>
            <span>•</span>
            <span>Savar, Dhaka</span>
            <span>•</span>
            <span>Insured COD</span>
          </div>

        </div>
      </motion.div>

    </section>
  );
};
