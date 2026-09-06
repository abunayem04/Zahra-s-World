"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Gem, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

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

// Stagger container animation variants for text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Item reveal animation with soft blur and upward drift
const itemRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 28, 
    filter: "blur(6px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.85, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export const HeroSection: React.FC = () => {
  const { openQuickView } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalProducts = PRODUCTS.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalProducts);
  }, [totalProducts]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
  }, [totalProducts]);

  // Auto-cycle cards every 3.8 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextCard();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, nextCard]);

  return (
    <section className="relative overflow-hidden w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      
      {/* =========================================================================
          BACKGROUND: 20 SEAMLESS HORIZONTAL COLOR STEPS (ZERO WHITE LINES)
          AUTHENTIC FROSTED GLASSMORPHY TEXTURE & CAUSTIC DEPTH
          ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="w-full h-full flex flex-col">
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
                boxShadow: "none",
              }}
            />
          ))}
        </div>

        {/* Frosted Sheen Diffusion & Luminous Caustic Light Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 45%, transparent 75%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(0, 0, 0, 0.15) 100%)
            `,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />

        {/* Dynamic Floating Breathing Caustic Halos */}
        <motion.div 
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] rounded-full bg-white/45 blur-[130px] pointer-events-none" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/4 w-[480px] h-[480px] rounded-full bg-[#C0E6DE]/30 blur-[130px] pointer-events-none" 
        />
      </div>

      {/* =========================================================================
          FOREGROUND: 2-COLUMN LAYOUT
          LEFT: BRAND NARRATIVE & CTAS (STAGGERED TEXT REVEAL ANIMATION)
          RIGHT: FANNED AUTO-CYCLING 3D PRODUCT CARD DECK (DYNAMIC PHYSICS)
          ========================================================================= */}
      <div className="relative z-20 max-w-[1360px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* -------------------------------------------------------------------
              LEFT COLUMN: LUXURY BRAND INTRO WITH STAGGERED REVEAL
              ------------------------------------------------------------------- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Atelier Provenance Pill with Shimmer Micro-Animation */}
            <motion.div variants={itemRevealVariants}>
              <div className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-[10px] bg-white/90 backdrop-blur-md border border-white/95 text-noir font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-sm mb-4 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <Gem className="w-4 h-4 text-[#A80C42] animate-pulse" />
                <span>Handmade Decor &amp; Gifts • Est. 2026</span>
              </div>
            </motion.div>

            {/* Sweet Signature Kicker with Radiant Glow */}
            <motion.div variants={itemRevealVariants} className="overflow-visible">
              <span className="font-signature text-6xl sm:text-7xl lg:text-[86px] text-[#A80C42] leading-none mb-2 block drop-shadow-sm select-none transition-transform hover:scale-[1.02] duration-300">
                Zahra&apos;s World
              </span>
            </motion.div>

            {/* Statuesque Headline with Line Split Reveal */}
            <motion.div variants={itemRevealVariants}>
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold tracking-tight text-noir leading-[1.08] mb-4 drop-shadow-[0_2px_18px_rgba(255,255,255,0.7)]">
                Glowing Crystal Lamps <span className="font-playfair italic font-normal text-[#A80C42]">&amp;</span> Unique Gifts
              </h1>
            </motion.div>

            {/* Poetic Italic Subtitle */}
            <motion.div variants={itemRevealVariants}>
              <p className="font-couture text-2xl sm:text-3xl lg:text-[32px] italic font-normal text-white/95 mb-5 tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                Turn Special Moments into Beautiful Memories
              </p>
            </motion.div>

            {/* Editorial Description */}
            <motion.div variants={itemRevealVariants}>
              <p className="text-sm sm:text-base lg:text-[17px] text-white/95 font-sans leading-relaxed max-w-xl mb-9 drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                Discover 3D laser crystal lamps, custom voice-recording cassette keychains, and relaxing moving sand art—made with care and delivered safely to your door.
              </p>
            </motion.div>

            {/* Tactile Action Buttons with Magnetic Feel & Glow Sheen */}
            <motion.div variants={itemRevealVariants} className="flex flex-wrap items-center gap-4">
              <Link
                href="#collection"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[10px] bg-noir text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] shadow-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_12px_32px_rgba(168,12,66,0.45)] hover:bg-gradient-to-r hover:from-[#A80C42] hover:via-[#C2185B] hover:to-[#880E4F]"
              >
                {/* Shimmer sweep effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10">Shop Collection</span>
                <ArrowRight className="w-4 h-4 text-[#FFD3F6] relative z-10 group-hover:translate-x-1.5 group-hover:text-white transition-all duration-300" />
              </Link>

              <a
                href="https://wa.me/8801320829916"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-[10px] bg-white/90 text-noir font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] border border-white/90 backdrop-blur-md shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] hover:bg-noir hover:text-white hover:border-noir hover:shadow-[0_10px_28px_rgba(13,19,44,0.35)]"
              >
                <span className="relative z-10">Order on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#A80C42] relative z-10 group-hover:text-[#FFD3F6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: FANNED 3D AUTO-CYCLING PRODUCT CARDS (MESMERIZING PHYSICS)
              ------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative w-full pt-4 lg:pt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Card Deck Stage with Perspective */}
            <div 
              className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] h-[490px] sm:h-[530px] lg:h-[550px] flex items-center justify-center"
              style={{ perspective: "1200px" }}
            >
              {PRODUCTS.map((product, idx) => {
                // Calculate position offset relative to active card
                let offset = (idx - activeIndex + totalProducts) % totalProducts;
                if (offset > totalProducts / 2) {
                  offset -= totalProducts;
                }

                // If card is far off, hide
                const isVisible = Math.abs(offset) <= 2;
                if (!isVisible) return null;

                const isFront = offset === 0;

                // Exact fanned deck 3D geometry:
                const rotation = offset * 8;
                const rotateY = offset * -5;
                const translateX = offset * 44;
                const translateY = Math.abs(offset) * 14;
                const scale = isFront ? 1 : 1 - Math.abs(offset) * 0.065;
                const zIndex = 20 - Math.abs(offset) * 4;
                const blurAmount = isFront ? 0 : Math.min(Math.abs(offset) * 0.7, 2);
                const brightness = isFront ? 1 : 0.92 - Math.abs(offset) * 0.08;

                return (
                  <motion.div
                    key={product.id}
                    onClick={() => setActiveIndex(idx)}
                    layout
                    initial={false}
                    animate={{
                      x: translateX,
                      y: translateY,
                      rotate: rotation,
                      rotateY: rotateY,
                      scale: scale,
                      zIndex: zIndex,
                      filter: `blur(${blurAmount}px) brightness(${brightness})`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                      mass: 0.8,
                    }}
                    whileHover={
                      isFront
                        ? { 
                            scale: 1.025, 
                            y: translateY - 8,
                            rotate: 0,
                            transition: { duration: 0.3, ease: "easeOut" } 
                          }
                        : { 
                            scale: scale * 1.04, 
                            filter: "blur(0px) brightness(1)",
                            transition: { duration: 0.3 } 
                          }
                    }
                    style={{
                      border: isFront 
                        ? "2px solid rgba(255, 255, 255, 0.95)" 
                        : "1.5px solid rgba(255, 255, 255, 0.7)",
                    }}
                    className={`absolute w-[280px] sm:w-[330px] lg:w-[350px] h-[390px] sm:h-[450px] lg:h-[480px] rounded-[20px] overflow-hidden cursor-pointer select-none ${
                      isFront
                        ? "shadow-[0_32px_80px_-12px_rgba(0,0,0,0.42),0_16px_36px_-6px_rgba(168,12,66,0.3)]"
                        : "shadow-[0_16px_38px_-8px_rgba(0,0,0,0.28)] opacity-90"
                    }`}
                  >
                    {/* Active Card Subtle Dynamic Edge Glare Light */}
                    {isFront && (
                      <motion.div 
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-[20px] pointer-events-none ring-1 ring-white/60 z-20" 
                      />
                    )}

                    {/* Product Photograph */}
                    <Image
                      src={product.image}
                      alt={product.nameEn}
                      fill
                      sizes="(max-width: 768px) 320px, 400px"
                      priority={isFront}
                      className="object-cover pointer-events-none transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Vignette for Razor-Sharp Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/35 pointer-events-none" />

                    {/* Top Badge: Category with Glassmorphism */}
                    <div className="absolute top-3.5 left-3.5 pointer-events-none z-10">
                      <span className="px-3 py-1.5 rounded-[9px] bg-black/65 backdrop-blur-md border border-white/25 text-white font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#FFD3F6]" />
                        <span>{product.categoryNameEn}</span>
                      </span>
                    </div>

                    {/* =========================================================
                        PURE CRYSTALLINE GLASSMORPHY BAR
                        ========================================================= */}
                    <div
                      className="absolute bottom-3.5 left-3.5 right-3.5 rounded-[16px] p-3.5 sm:p-4 z-10 overflow-hidden"
                      style={{
                        background: "rgba(255, 255, 255, 0.18)",
                        backdropFilter: "blur(22px) saturate(180%)",
                        WebkitBackdropFilter: "blur(22px) saturate(180%)",
                        border: "1px solid rgba(255, 255, 255, 0.22)",
                        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
                      }}
                    >
                      {/* Product Name on Pure Glass Bar */}
                      <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
                        <h3 className="font-display text-sm sm:text-[15px] font-bold text-white truncate uppercase tracking-wider leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                          {product.nameEn}
                        </h3>
                      </div>

                      {/* Action Row: Luxury Satin View Button with Animated Hover */}
                      <div className="pt-2 border-t border-white/20 relative z-10 w-full">
                        {isFront ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openQuickView(product.id);
                            }}
                            className="w-full py-2.5 px-4 rounded-[10px] bg-gradient-to-r from-[#A80C42] via-[#C2185B] to-[#880E4F] hover:from-[#C2185B] hover:to-[#A80C42] text-white font-mono text-xs font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(168,12,66,0.4)] hover:shadow-[0_6px_24px_rgba(168,12,66,0.6)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                            aria-label={`Quick View ${product.nameEn}`}
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Quick View</span>
                          </button>
                        ) : (
                          <div className="py-1 text-center font-mono text-[10px] uppercase tracking-wider text-white/70">
                            Click to bring forward
                          </div>
                        )}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            {/* Deck Navigation & Progress Dots with Tactile Micro-Animations */}
            <div className="flex items-center justify-center gap-4 mt-4 z-20">
              <button
                onClick={prevCard}
                aria-label="Previous Creation"
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-noir flex items-center justify-center border border-white/95 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 active:scale-90 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Glowing Interactive Progress Dots Indicator */}
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                {PRODUCTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                      idx === activeIndex
                        ? "w-8 bg-gradient-to-r from-[#FFD3F6] to-[#A80C42] shadow-[0_0_12px_rgba(255,211,246,0.8)]"
                        : "w-2.5 bg-white/45 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCard}
                aria-label="Next Creation"
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-noir flex items-center justify-center border border-white/95 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 active:scale-90 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

