"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Gem } from "lucide-react";

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
  const [activeSlab, setActiveSlab] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      
      {/* =========================================================================
          BACKGROUND: 20 STRAIGHT HORIZONTAL FROSTED GLASS SLABS ("SOJASUJI")
          WITH REAL OPTICAL REFRACTION, SPECULAR BEVEL LIGHT & CAUSTIC DEPTH
          ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex flex-col justify-stretch">
        
        {/* Luminous Light Sources Behind Glass (Crucial for Glassmorphism Illumination) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full bg-white/70 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#FFD3F6]/50 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#C0E6DE]/30 blur-[120px] pointer-events-none" />

        {/* 20 Straight Horizontal Glass Louvers Stacked Vertically */}
        <div className="relative w-full h-full flex flex-col justify-stretch flex-1">
          {GLASS_SLABS.map((slab, idx) => {
            const isHovered = activeSlab === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveSlab(idx)}
                onMouseLeave={() => setActiveSlab(null)}
                className="relative w-full flex-1 min-h-[26px] sm:min-h-[30px] md:min-h-[36px] transition-all duration-300 pointer-events-auto group"
                style={{
                  // Translucent tinted glass substrate
                  background: `linear-gradient(180deg, rgba(${slab.rgb}, 0.72) 0%, rgba(${slab.rgb}, 0.88) 100%)`,
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  // Apple-grade specular top bevel highlight & bottom edge shadow
                  boxShadow: isHovered
                    ? `inset 0 2px 0 0 rgba(255, 255, 255, 0.95), 0 4px 16px rgba(${slab.rgb}, 0.5)`
                    : `inset 0 1.2px 0 0 rgba(255, 255, 255, 0.65), inset 0 -1px 0 0 rgba(0, 0, 0, 0.22)`,
                  borderBottom: "1px solid rgba(0, 0, 0, 0.18)",
                }}
              >
                {/* Diagonal Prismatic Glass Sheen Across Each Slab */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                  style={{
                    background: "linear-gradient(115deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 35%, transparent 60%, rgba(255,255,255,0.2) 100%)",
                  }}
                />

                {/* Micro-Refraction Glass Edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Global Liquid Glass Satin Reflection Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 50%, transparent 85%)",
          }}
        />
      </div>

      {/* =========================================================================
          FOREGROUND: APPLE PRO GLASS FLOATING MONOLITH
          CLEAN, STATUESQUE, ZERO CLUTTER ("HERO PAGE A KISU E RAKHA LAGBE NA")
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-2xl w-full mx-auto"
      >
        {/* Apple-Level Frosted Glass Tablet Card (Strict 10px Radius) */}
        <div 
          className="relative rounded-[10px] p-8 sm:p-12 md:p-14 text-center overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.32)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255, 255, 255, 0.7)",
            boxShadow: `
              0 30px 90px -15px rgba(0, 0, 0, 0.28),
              0 15px 35px -10px rgba(0, 0, 0, 0.15),
              inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95),
              inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.12)
            `,
          }}
        >
          {/* Specular Ambient Glow Orbs inside the Glass Tablet */}
          <div className="absolute -top-28 -left-28 w-56 h-56 rounded-full bg-white/50 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-56 h-56 rounded-full bg-palette-pink/40 blur-3xl pointer-events-none" />

          {/* Minimalist Atelier Provenance Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[10px] bg-white/70 backdrop-blur-md border border-white/80 text-noir font-mono text-[10px] font-bold uppercase tracking-[0.24em] shadow-sm mb-6">
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
