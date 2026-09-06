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
  ShieldCheck,
  Truck
} from "lucide-react";
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

  // Auto-cycle cards every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextCard();
    }, 3500);
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

        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-white/40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-16 right-1/4 w-[450px] h-[450px] rounded-full bg-[#C0E6DE]/25 blur-[120px] pointer-events-none" />
      </div>

      {/* =========================================================================
          FOREGROUND: 2-COLUMN LAYOUT
          LEFT: BRAND NARRATIVE & CTAS (100% INSTANT VISIBILITY)
          RIGHT: FANNED AUTO-CYCLING PRODUCT CARD DECK (MATCHING USER SKETCH)
          ========================================================================= */}
      <div className="relative z-20 max-w-[1360px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* -------------------------------------------------------------------
              LEFT COLUMN: LUXURY BRAND INTRO & CALLS TO ACTION (EXPANDED PROPORTIONS)
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Atelier Provenance Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[10px] bg-white/85 backdrop-blur-md border border-white/90 text-noir font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-sm mb-4">
              <Gem className="w-4 h-4 text-[#D81B60]" />
              <span>Haute Celestial Atelier • Est. 2026</span>
            </div>

            {/* Sweet Signature Kicker */}
            <span className="font-signature text-6xl sm:text-7xl lg:text-[84px] text-[#D81B60] leading-none mb-2 drop-shadow-sm select-none">
              Zahra&apos;s World
            </span>

            {/* Statuesque Headline */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold tracking-tight text-noir leading-[1.08] mb-4 drop-shadow-[0_2px_18px_rgba(255,255,255,0.65)]">
              Celestial Elegance <span className="font-playfair italic font-normal text-[#D81B60]">&amp;</span> Keepsakes
            </h1>

            {/* Poetic Italic Subtitle */}
            <p className="font-couture text-2xl sm:text-3xl lg:text-[32px] italic font-normal text-white/95 mb-5 tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Poetry in Light &amp; Living Form
            </p>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-white/95 font-sans leading-relaxed max-w-xl mb-9 drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
              Bespoke 3D laser-engraved optical crystal spheres, nostalgic analog audio recorder keychains, and ambient bedroom centerpieces designed to turn fleeting moments into permanent light.
            </p>

            {/* Tactile Action Buttons with Animated Hover Color Transitions */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              <Link
                href="#collection"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[10px] bg-noir text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] shadow-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_10px_28px_rgba(216,27,96,0.5)] hover:bg-gradient-to-r hover:from-[#D81B60] hover:via-[#E91E63] hover:to-[#AD1457]"
              >
                <span className="relative z-10">Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-palette-pink relative z-10 group-hover:translate-x-1.5 group-hover:text-white transition-all duration-300" />
              </Link>

              <a
                href="https://wa.me/8801320829916"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-[10px] bg-white/90 text-noir font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] border border-white/90 backdrop-blur-md shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] hover:bg-noir hover:text-white hover:border-noir hover:shadow-[0_10px_28px_rgba(13,19,44,0.35)]"
              >
                <span className="relative z-10">Concierge Order</span>
                <ArrowUpRight className="w-4 h-4 text-[#D81B60] relative z-10 group-hover:text-palette-pink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            </div>

            {/* Spec Ledger */}
            <div className="flex flex-wrap items-center gap-5 text-white font-mono text-xs uppercase tracking-wider pt-5 border-t border-white/25 w-full drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              <span className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-palette-pink" />
                Optical K9 Glass
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-2 text-white font-semibold">
                <Truck className="w-4 h-4 text-palette-pink" />
                Nationwide COD
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white font-semibold">24–48h Dhaka Dispatch</span>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: FANNED AUTO-CYCLING PRODUCT CARDS (EXPANDED STAGE)
              ------------------------------------------------------------------- */}
          <div
            className="lg:col-span-6 flex flex-col items-center justify-center relative w-full pt-4 lg:pt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Card Deck Stage */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] h-[490px] sm:h-[530px] lg:h-[550px] flex items-center justify-center">
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

                // Exact fanned deck geometry:
                const rotation = offset * 7.5;
                const translateX = offset * 42;
                const translateY = Math.abs(offset) * 12;
                const scale = isFront ? 1 : 1 - Math.abs(offset) * 0.06;
                const zIndex = 20 - Math.abs(offset) * 4;

                return (
                  <div
                    key={product.id}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
                      zIndex: zIndex,
                      border: "1.5px solid rgba(255, 255, 255, 0.9)",
                    }}
                    className={`absolute w-[280px] sm:w-[330px] lg:w-[350px] h-[390px] sm:h-[450px] lg:h-[480px] rounded-[18px] overflow-hidden cursor-pointer select-none transition-all duration-500 ease-out ${
                      isFront
                        ? "shadow-[0_28px_70px_-10px_rgba(0,0,0,0.38),0_12px_30px_-5px_rgba(0,0,0,0.22)]"
                        : "shadow-[0_15px_35px_-8px_rgba(0,0,0,0.28)] hover:brightness-105 opacity-90"
                    }`}
                  >
                    {/* Product Photograph */}
                    <Image
                      src={product.image}
                      alt={product.nameEn}
                      fill
                      sizes="(max-width: 768px) 320px, 400px"
                      priority={isFront}
                      className="object-cover pointer-events-none"
                    />

                    {/* Subtle Gradient Vignette to enhance glass bar readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Badge: Category */}
                    <div className="absolute top-3.5 left-3.5 pointer-events-none z-10">
                      <span className="px-3 py-1.5 rounded-[9px] bg-black/65 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                        {product.categoryNameEn}
                      </span>
                    </div>

                    {/* =========================================================
                        PURE CRYSTALLINE GLASSMORPHY BAR (CLEAN, ZERO BORDER GLOW)
                        ========================================================= */}
                    <div
                      className="absolute bottom-3.5 left-3.5 right-3.5 rounded-[16px] p-3.5 sm:p-4 z-10 overflow-hidden"
                      style={{
                        background: "rgba(255, 255, 255, 0.16)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        WebkitBackdropFilter: "blur(20px) saturate(180%)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                      }}
                    >

                      {/* Product Name on Pure Glass Bar */}
                      <div className="flex items-center justify-between gap-2 mb-1.5 relative z-10">
                        <h3 className="font-display text-sm sm:text-[15px] font-bold text-white truncate uppercase tracking-wider leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                          {product.nameEn}
                        </h3>
                      </div>

                      {/* Action Row: Luxury Satin View Button (Price Removed As Requested) */}
                      <div className="pt-2 border-t border-white/15 relative z-10 w-full">
                        {isFront ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openQuickView(product.id);
                            }}
                            className="w-full py-2.5 px-4 rounded-[10px] bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-[0_3px_14px_rgba(216,27,96,0.35)] hover:shadow-[0_4px_20px_rgba(216,27,96,0.5)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                            aria-label={`Quick View ${product.nameEn}`}
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Quick View</span>
                          </button>
                        ) : (
                          <div className="py-1 text-center font-mono text-[10px] uppercase tracking-wider text-white/50">
                            Click to bring forward
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Deck Navigation & Progress Dots */}
            <div className="flex items-center justify-center gap-4 mt-4 z-20">
              <button
                onClick={prevCard}
                aria-label="Previous Creation"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-white text-noir flex items-center justify-center border border-white/90 backdrop-blur-md shadow-sm transition-transform active:scale-90"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Glowing Dots Indicator */}
              <div className="flex items-center gap-2">
                {PRODUCTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-8 bg-[#D81B60] shadow-[0_0_12px_rgba(216,27,96,0.65)]"
                        : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCard}
                aria-label="Next Creation"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 hover:bg-white text-noir flex items-center justify-center border border-white/90 backdrop-blur-md shadow-sm transition-transform active:scale-90"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
