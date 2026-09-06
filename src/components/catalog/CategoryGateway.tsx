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
      index: "01 // CRYSTAL LAMPS",
      title: "3D Crystal Ball Lamps",
      subtitle: "Glowing Solar System & Moon Spheres",
      desc: "Laser-engraved 3D planets and galaxies inside high-clarity crystal with a warm wooden LED base for your bedroom or desk.",
      image: "/assets/categories/celestial_crystal.jpg",
      colSpan: "lg:col-span-7",
      icon: Sparkles,
      accentColor: "#FFD3F6",
      targetHref: "#crystal-showcase",
    },
    {
      id: "retro-gadgets",
      index: "02 // VOICE KEEPSAKES",
      title: "Voice Recording Cassettes",
      subtitle: "Miniature Cassette Keychains",
      desc: "Record a personal 30-second voice message on a mini retro cassette keychain to give to your partner, friend, or family.",
      image: "/assets/categories/retro_audio.jpg",
      colSpan: "lg:col-span-5",
      icon: Radio,
      accentColor: "#C0E6DE",
      targetHref: "#collection",
    },
    {
      id: "sand-art",
      index: "03 // KINETIC ART",
      title: "Moving Sand Art & Lamps",
      subtitle: "Relaxing 360° Rotating Sandscapes",
      desc: "Watch calming sand mountains form with every gentle turn—perfect for stress relief and beautiful home decoration.",
      image: "/assets/categories/kinetic_sand.jpg",
      colSpan: "lg:col-span-5",
      icon: Mountain,
      accentColor: "#C0E6DE",
      targetHref: "#collection",
    },
    {
      id: "romantic-gifts",
      index: "04 // SPECIAL GIFTS",
      title: "Gift Sets & Jewelry",
      subtitle: "Ready-to-Gift Velvet Presentation Sets",
      desc: "Complete gift boxes featuring sterling silver necklaces, scented rose soap flowers, and gift bags ready for giving.",
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
            Explore Our Collections
          </span>

          {/* Statuesque Headline */}
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-noir tracking-tight leading-[1.12] mb-4">
            Shop by Category
          </h2>

          <p className="font-sans text-sm sm:text-base text-noir/70 max-w-xl mx-auto leading-relaxed">
            Find the perfect piece for your room or a special gift for someone you love—from glowing crystal lamps to voice keepsakes.
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
