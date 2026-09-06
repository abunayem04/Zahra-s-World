"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Gem,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const brandPillars = [
    {
      icon: Gem,
      title: "Optical K9 Precision",
      desc: "Flawless, lead-free crystal glass engraved with micron-level laser fidelity to preserve 3D celestial nebulas for generations.",
    },
    {
      icon: HeartHandshake,
      title: "Crafted with Intention",
      desc: "Every creation—from tactile analog voice keepsakes to kinetic sandscapes—is curated to turn fleeting emotions into permanent light.",
    },
    {
      icon: ShieldCheck,
      title: "Insured Nationwide Care",
      desc: "Each item is encased in custom shockproof foam with double-wall corrugated packaging and 100% door-to-door transit protection.",
    },
  ];

  return (
    <section 
      id="about-us" 
      className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#F5F1F4] via-[#FDFBFD] to-[#FAF5F8] overflow-hidden border-t border-noir/[0.06]"
    >
      {/* Ambient Diffuse Caustic Halo Lights */}
      <div className="absolute top-1/3 left-10 w-[650px] h-[400px] rounded-full bg-[#FFD3F6]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#C0E6DE]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="font-signature text-4xl sm:text-5xl lg:text-[54px] text-[#A80C42] leading-none block mb-2 select-none drop-shadow-sm">
            The Atelier Story
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-noir tracking-tight leading-[1.12] mb-4">
            Where Light Meets Human Feeling
          </h2>
          <p className="font-sans text-sm sm:text-base text-noir/70 max-w-xl mx-auto leading-relaxed">
            Founded with a passion for celestial wonder and thoughtful keepsakes, Zahra&apos;s World bridges the gap between artisanal illumination and cherished personal memories.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Visual Composition with Layered Glass Cards */}
          <div className="lg:col-span-6 relative">
            {/* Main Atelier Photograph */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden border border-noir/[0.08] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] bg-[#FAF5F8]">
              <Image
                src="/assets/categories/celestial_crystal.jpg"
                alt="Zahra's World Artisan Celestial Light Crafting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Floating Glassmorphism Provenance Badge */}
            <div 
              className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 max-w-[260px] sm:max-w-[280px] p-4 sm:p-5 rounded-[18px] bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_18px_40px_-6px_rgba(168,12,66,0.25)] select-none"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-8 h-8 rounded-full bg-[#A80C42]/10 border border-[#A80C42]/20 flex items-center justify-center text-[#A80C42]">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-noir">
                  Handcrafted QA
                </span>
              </div>
              <p className="text-[11px] font-sans text-noir/75 leading-relaxed">
                Individually calibrated for 2700K soothing warm amber illumination and optical clarity before dispatch.
              </p>
            </div>

            {/* Floating Top Pill */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD3F6]" />
              <span>Celestial Atelier • Est. 2026</span>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pt-6 lg:pt-0">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A80C42] mb-2 block">
              Our Vision &amp; Heritage
            </span>
            
            <h3 className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-noir leading-snug mb-5">
              Turning fleeting moments into enduring light and living art.
            </h3>

            <p className="font-sans text-sm sm:text-[15px] text-noir/80 leading-relaxed mb-4">
              We believe every gift tells a story. Whether it is a laser-sculpted solar system sphere resting beside your bed, a miniature cassette keychain preserving a loved one&apos;s laugh, or kinetic sand creating calming mountain horizons—our objects are made to be felt, kept, and cherished.
            </p>

            <p className="font-sans text-sm sm:text-[15px] text-noir/80 leading-relaxed mb-8">
              Based in Dhaka, our team handles every order with bespoke care, offering seamless nationwide Cash on Delivery and direct WhatsApp concierge assistance from inquiry to doorstep delivery.
            </p>

            {/* Action Link to Collection */}
            <Link
              href="#collection"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[10px] bg-noir hover:bg-[#A80C42] text-white font-mono text-xs font-bold uppercase tracking-[0.14em] shadow-lg hover:shadow-[0_10px_26px_rgba(168,12,66,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Curated Creations</span>
              <ArrowRight className="w-4 h-4 text-[#FFD3F6]" />
            </Link>
          </div>

        </div>

        {/* 3 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-noir/[0.08]">
          {brandPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="group p-6 sm:p-7 rounded-[20px] bg-white border border-noir/[0.07] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(168,12,66,0.18)] hover:border-[#A80C42]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF5F8] border border-noir/[0.08] group-hover:bg-[#A80C42] group-hover:border-[#A80C42] text-[#A80C42] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <h4 className="font-playfair text-lg font-bold text-noir group-hover:text-[#A80C42] transition-colors mb-2">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-noir/70 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
