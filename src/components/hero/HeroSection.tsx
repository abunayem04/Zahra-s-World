"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  MapPin,
  CheckCircle2,
  PackageCheck
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const HERO_SLIDES = [
  {
    id: "crystal-ball-night-light",
    slug: "crystal-galaxy",
    categoryKicker: "C E L E S T I A L   S P H E R E",
    titleMain: "P O E T R Y",
    titleSub: "LIGHT • MEMORY • SANCTUARY",
    description: "Bespoke 3D laser-engraved optical crystal spheres with warm 2700K solid beechwood LED base.",
    price: 890,
    badge: "Most Loved Atelier Choice",
    image: "/assets/products/crystal_galaxy.jpg",
    accentTone: "Blossom Amber",
  },
  {
    id: "mini-cassette-recorder-keychain",
    slug: "cassette-recorder",
    categoryKicker: "A C O U S T I C   K E E P S A K E",
    titleMain: "V O I C E",
    titleSub: "ANALOG • MECHANICAL • TIMELESS",
    description: "Mini vintage voice recorder keychain with real audio capture, dual spinning spools, and playback.",
    price: 650,
    badge: "Personal Keepsake Edition",
    image: "/assets/products/cassette_keychain.jpg",
    accentTone: "Lo-Fi Pink",
  },
  {
    id: "moving-sand-art-lamp",
    slug: "sand-art-lamp",
    categoryKicker: "K I N E T I C   A E S T H E T I C",
    titleMain: "S A N D S",
    titleSub: "ROTATION • FLUID • TRANQUIL",
    description: "360° rotating dynamic sand art hourglass lamp with touch-dimmable circular halo lighting.",
    price: 1450,
    badge: "Architectural Room Centerpiece",
    image: "/assets/products/sand_art_lamp.jpg",
    accentTone: "Mineral Sunset",
  },
  {
    id: "snowing-streetlamp-night-light",
    slug: "snowing-streetlamp",
    categoryKicker: "V I C T O R I A N   D I O R A M A",
    titleMain: "S N O W",
    titleSub: "WINTER • NOCTURNE • WARMTH",
    description: "Continuous swirling snow vortex diorama with illuminated antique streetlamp lantern.",
    price: 1290,
    badge: "Chamber Ambient Series",
    image: "/assets/products/streetlamp_diorama.jpg",
    accentTone: "Winter Glow",
  },
];

export const HeroSection: React.FC = () => {
  const { addItem } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = HERO_SLIDES[currentSlide];

  // Auto-play slider every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section 
      className="relative overflow-hidden py-6 md:py-10 transition-all duration-700"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(255, 211, 246, 0.65) 0%, rgba(255, 182, 234, 0.35) 45%, rgba(244, 244, 248, 0) 75%),
          linear-gradient(180deg, 
            #FFF4FA 0%, 
            #FFE6F7 20%, 
            #FFD3F6 45%, 
            #F8BBE5 70%, 
            #F299D6 88%, 
            #E062B8 96%, 
            #0D132C 100%
          )
        `,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Radiant Background Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-palette-pink/40 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-palette-mint/25 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid: 72% Wide Slider Banner + 28% Two Stacked Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* ============================================================
              LEFT: WIDE HERO SLIDER BANNER (lg:col-span-8 or 9)
              ============================================================ */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative flex-1 min-h-[440px] sm:min-h-[480px] rounded-[10px] overflow-hidden bg-[#FFF5FA]/90 backdrop-blur-md border border-white/60 shadow-xl flex flex-col justify-between p-6 sm:p-10 transition-all">
              
              {/* Top Row: Slide Provenance & Price Tag */}
              <div className="relative z-20 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-white/85 text-noir font-mono text-[10px] font-bold uppercase tracking-[0.18em] shadow-sm border border-noir/5">
                  <Sparkles className="w-3 h-3 text-pink-600" />
                  <span>{slide.badge}</span>
                </div>

                <div className="flex items-center gap-2 bg-noir/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-[8px] font-mono text-xs font-bold tracking-wider shadow-sm border border-white/10">
                  <span className="text-palette-pink font-semibold">Tk</span>
                  <span className="text-base">{slide.price}</span>
                </div>
              </div>

              {/* Center Content: Asymmetric Text + Layered Product Photography */}
              <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto py-4">
                
                {/* Text Content (md:col-span-6) */}
                <div className="md:col-span-6 flex flex-col items-start text-left">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-noir/60 mb-2">
                    {slide.categoryKicker}
                  </span>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-noir uppercase tracking-widest leading-[1.05] mb-2">
                    {slide.titleMain}
                  </h1>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-[1px] w-6 bg-noir/40" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-noir/70">
                      {slide.titleSub}
                    </span>
                    <span className="h-[1px] w-6 bg-noir/40" />
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-noir/80 font-normal leading-relaxed max-w-sm mb-6">
                    {slide.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => addItem(slide.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-noir text-white font-mono text-xs font-bold uppercase tracking-[0.14em] hover:bg-noir/85 hover:scale-[1.02] shadow-md transition-all"
                    >
                      <span>Acquire Creation</span>
                      <ArrowRight className="w-3.5 h-3.5 text-palette-pink" />
                    </button>

                    <Link
                      href="#collection"
                      className="inline-flex items-center px-4 py-3 rounded-[10px] bg-white/70 hover:bg-white text-noir font-mono text-xs font-semibold uppercase tracking-wider border border-noir/10 transition-all shadow-sm"
                    >
                      <span>Explore</span>
                    </Link>
                  </div>
                </div>

                {/* Visual Product Staging (md:col-span-6) */}
                <div className="md:col-span-6 relative flex items-center justify-center">
                  <div className="relative w-full max-w-[320px] aspect-square rounded-[10px] overflow-hidden shadow-2xl border border-white/80 group">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={slide.image}
                          alt={slide.titleMain}
                          fill
                          priority
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    </AnimatePresence>

                    {/* Subtle Tone Tag Pill */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[6px] border border-black/5 font-mono text-[9px] font-bold uppercase tracking-wider text-noir shadow-sm">
                      {slide.accentTone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Next/Prev Controls & Pill Pagination Indicators */}
              <div className="relative z-20 flex items-center justify-between pt-2 border-t border-black/5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="w-8 h-8 rounded-[8px] bg-white/80 hover:bg-white text-noir flex items-center justify-center border border-black/10 shadow-sm transition-all hover:scale-105"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="w-8 h-8 rounded-[8px] bg-white/80 hover:bg-white text-noir flex items-center justify-center border border-black/10 shadow-sm transition-all hover:scale-105"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Dashed / Pill Pagination Bars (like Screenshot 1) */}
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-8 bg-noir shadow-sm"
                          : "w-2.5 bg-noir/20 hover:bg-noir/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="font-mono text-[10px] font-semibold text-noir/60 uppercase tracking-widest">
                  0{currentSlide + 1} / 0{HERO_SLIDES.length}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT: TWO STACKED PROMOTIONAL VALUE CARDS (lg:col-span-4)
              ============================================================ */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* 1. Nationwide Delivery Card (Top) */}
            <div className="flex-1 rounded-[10px] overflow-hidden bg-gradient-to-br from-[#FFF5FA] via-[#FFEBF7] to-[#FFD8F3] border border-white/70 shadow-lg p-6 sm:p-7 flex flex-col justify-between relative group hover:shadow-xl hover:-translate-y-0.5 transition-all">
              {/* Background ambient radial highlight */}
              <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-palette-pink/30 blur-2xl pointer-events-none" />

              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-[10px] bg-white shadow-md border border-pink-200/60 flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[1px] w-4 bg-pink-400" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pink-700">
                    Insured Courier
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-noir leading-snug mb-2">
                  DELIVERY ALL OVER BANGLADESH
                </h3>

                <p className="font-sans text-xs text-noir/75 leading-relaxed mb-4">
                  Doorstep courier delivery with 100% Cash on Delivery (COD) inspection promise.
                </p>
              </div>

              {/* Delivery Rates Pill Strip */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[8px] p-3 border border-pink-200/50 shadow-sm flex items-center justify-between font-mono text-[11px]">
                <div className="flex flex-col">
                  <span className="text-noir/60 uppercase text-[9px] tracking-wider font-semibold">Inside Dhaka (24-48h)</span>
                  <span className="text-noir font-bold">Tk 70</span>
                </div>
                <div className="h-6 w-[1px] bg-pink-200" />
                <div className="flex flex-col items-end">
                  <span className="text-noir/60 uppercase text-[9px] tracking-wider font-semibold">Outside Dhaka (48-72h)</span>
                  <span className="text-pink-700 font-bold">Tk 130</span>
                </div>
              </div>
            </div>

            {/* 2. Easy Exchange & Quality Seal Card (Bottom) */}
            <div className="flex-1 rounded-[10px] overflow-hidden bg-gradient-to-br from-[#FFF5FA] via-[#FFEBF7] to-[#FFD8F3] border border-white/70 shadow-lg p-6 sm:p-7 flex flex-col justify-between relative group hover:shadow-xl hover:-translate-y-0.5 transition-all">
              {/* Background ambient radial highlight */}
              <div className="absolute bottom-0 right-0 w-36 h-36 rounded-full bg-palette-mint/25 blur-2xl pointer-events-none" />

              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-[10px] bg-white shadow-md border border-pink-200/60 flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                  <RotateCcw className="w-6 h-6 text-pink-600" />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[1px] w-4 bg-pink-400" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pink-700">
                    Peace of Mind
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-noir leading-snug mb-2">
                  EASY EXCHANGE AVAILABLE
                </h3>

                <p className="font-sans text-xs text-noir/75 leading-relaxed mb-4">
                  Check product before paying courier. Full 7-day immediate replacement for any transit damage.
                </p>
              </div>

              {/* Trust Badge Footer */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[8px] p-3 border border-pink-200/50 shadow-sm flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slateTeal" />
                  <span className="text-noir font-semibold uppercase text-[10px] tracking-wider">
                    Zero Damage Guarantee
                  </span>
                </div>
                <div className="flex items-center gap-1 text-pink-700 font-bold text-[10px] uppercase">
                  <span>Shop Confidently</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
