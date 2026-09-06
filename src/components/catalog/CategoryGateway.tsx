"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Radio, Mountain, Gift } from "lucide-react";

interface CategoryItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  colSpan: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  targetHref: string;
}

export const CategoryGateway: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: "crystal-lamps",
      index: "01 // COSMIC LIGHT",
      title: "Celestial 3D Crystals",
      subtitle: "Optical K9 Glass Spheres",
      desc: "Subsurface 3D holographic nebula & galaxy motifs trapped in bubble-free optical K9 glass with solid beechwood amber illumination.",
      image: "/assets/categories/celestial_crystal.jpg",
      colSpan: "lg:col-span-7",
      icon: Sparkles,
      accentColor: "#FFD3F6",
      targetHref: "#crystal-showcase",
    },
    {
      id: "retro-gadgets",
      index: "02 // TIMELESS VOICE",
      title: "Playable Audio Keepsakes",
      subtitle: "Analog Cassette Voice Recorders",
      desc: "Record heartfelt 30-second messages onto tactile vintage miniature cassettes you can cherish and carry everywhere.",
      image: "/assets/categories/retro_audio.jpg",
      colSpan: "lg:col-span-5",
      icon: Radio,
      accentColor: "#C0E6DE",
      targetHref: "#cassette-showcase",
    },
    {
      id: "sand-art",
      index: "03 // LIVING MOTION",
      title: "Kinetic Sandscapes & Dioramas",
      subtitle: "360° Rotating Dunes & Snow Lamps",
      desc: "Ever-shifting mountain horizons and swirling snowy Victorian streetlamps designed for calming visual meditation.",
      image: "/assets/categories/kinetic_sand.jpg",
      colSpan: "lg:col-span-5",
      icon: Mountain,
      accentColor: "#C0E6DE",
      targetHref: "#collection",
    },
    {
      id: "romantic-gifts",
      index: "04 // TIMELESS ELEGANCE",
      title: "Deluxe Velvet Gift Sets",
      subtitle: "Sterling Silver Jewelry & Presentation Cases",
      desc: "Skin-friendly 925 sterling silver pendants nestled inside luxury plush blush pink presentation boxes with gift ribbons.",
      image: "/assets/categories/romantic_velvet.jpg",
      colSpan: "lg:col-span-7",
      icon: Gift,
      accentColor: "#FFD3F6",
      targetHref: "#collection",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#F5F1F4] via-[#FAF6FA] to-[#F2ECF1] overflow-hidden">
      {/* Luminous Ambient Halo Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#FFD3F6]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C0E6DE]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Sweet Signature Kicker */}
          <span className="font-signature text-4xl sm:text-5xl lg:text-[54px] text-[#D81B60] leading-none block mb-2 select-none drop-shadow-sm">
            Curated Realms of Light
          </span>

          {/* Statuesque Headline */}
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-noir tracking-tight leading-[1.12] mb-4">
            Shop by Mood &amp; Sensation
          </h2>

          <p className="font-sans text-sm sm:text-base text-noir/70 max-w-xl mx-auto leading-relaxed">
            Each creation is sculpted for a distinct state of being — from cosmic bedside tranquility to tactile voice keepsakes and desktop visual meditation.
          </p>
        </div>

        {/* =========================================================================
            7+5 / 5+7 ASYMMETRICAL MILANESE BENTO GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <Link
                key={cat.id}
                href={cat.targetHref}
                className={`${cat.colSpan} group relative rounded-[20px] overflow-hidden h-[360px] sm:h-[420px] lg:h-[440px] border border-noir/[0.08] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_54px_-12px_rgba(216,27,96,0.25)] hover:border-[#D81B60]/40 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 select-none`}
              >
                {/* Cinematic Photographic Background */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Chiaroscuro Gradient Vignette for Razor-Sharp Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

                {/* Top Badge: Category Index & Vector Icon */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-black/50 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-[#FFD3F6]" />
                    <span>{cat.index}</span>
                  </span>

                  {/* Micro Arrow Pill */}
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#D81B60] group-hover:border-[#D81B60] group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Narrative Cluster */}
                <div className="relative z-10 flex flex-col items-start mt-auto">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFD3F6] font-semibold mb-1 drop-shadow-sm">
                    {cat.subtitle}
                  </span>

                  <h3 className="font-playfair text-2xl sm:text-3xl lg:text-[34px] font-bold text-white mb-2 leading-tight drop-shadow-md group-hover:text-[#FFD3F6] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-white/80 max-w-lg leading-relaxed mb-4 line-clamp-2 drop-shadow-sm font-light">
                    {cat.desc}
                  </p>

                  {/* Explore Button */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-white/20 hover:bg-[#D81B60] text-white font-mono text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-md border border-white/30 group-hover:bg-[#D81B60] group-hover:border-[#D81B60] transition-all duration-300 shadow-sm">
                    <span>Explore Realm</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
