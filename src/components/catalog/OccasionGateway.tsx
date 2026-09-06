"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Heart, 
  Gift, 
  Briefcase, 
  Compass, 
  ArrowRight,
  Gem,
  Smile,
  Home as HomeIcon
} from "lucide-react";
import { motion } from "framer-motion";

interface Occasion {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accentBg: string;
  iconColor: string;
  hoverBorder: string;
  popularItems: string[];
}

export const OccasionGateway: React.FC = () => {
  const occasions: Occasion[] = [
    {
      id: "birthday",
      badge: "Most Popular",
      badgeColor: "bg-[#A80C42]/10 text-[#A80C42] border-[#A80C42]/20",
      title: "Birthday Surprises",
      subtitle: "For Friends, Partners & Family",
      desc: "Thoughtful gifts that bring pure joy—from glowing 3D crystal lamps to custom voice cassette keychains.",
      icon: Sparkles,
      accentBg: "from-[#FFF0F6] to-[#FFF5FA]",
      iconColor: "text-[#A80C42]",
      hoverBorder: "hover:border-[#A80C42]/40 hover:shadow-[0_16px_36px_-8px_rgba(168,12,66,0.18)]",
      popularItems: ["3D Crystal Ball", "Voice Cassette", "Silver Pendant Set"],
    },
    {
      id: "anniversary",
      badge: "Romantic Pick",
      badgeColor: "bg-[#D81B60]/10 text-[#D81B60] border-[#D81B60]/20",
      title: "Anniversary & Romance",
      subtitle: "For Your Special Someone",
      desc: "Preserve your love with 30-second playable voice memories, glowing roses, and luxury gift presentation sets.",
      icon: Heart,
      accentBg: "from-[#FFF2F5] to-[#FDF8F9]",
      iconColor: "text-[#D81B60]",
      hoverBorder: "hover:border-[#D81B60]/40 hover:shadow-[0_16px_36px_-8px_rgba(216,27,96,0.18)]",
      popularItems: ["Voice Cassette Keychain", "Glowing Rose Sphere", "Velvet Gift Box"],
    },
    {
      id: "for-her",
      badge: "Sweet & Pretty",
      badgeColor: "bg-[#9C0076]/10 text-[#9C0076] border-[#9C0076]/20",
      title: "Gifts for Her",
      subtitle: "For Girlfriend, Wife & Sister",
      desc: "Delicate silver necklaces, blush pink voice cassettes, and soft aesthetic night lights she will adore.",
      icon: Gem,
      accentBg: "from-[#FAF0F8] to-[#FFF8FD]",
      iconColor: "text-[#9C0076]",
      hoverBorder: "hover:border-[#9C0076]/40 hover:shadow-[0_16px_36px_-8px_rgba(156,0,118,0.16)]",
      popularItems: ["Hello Kitty Set", "Blossom Pink Cassette", "Moon Lamp"],
    },
    {
      id: "for-him",
      badge: "Cool & Unique",
      badgeColor: "bg-[#0D132C]/10 text-[#0D132C] border-[#0D132C]/20",
      title: "Gifts for Him",
      subtitle: "For Boyfriend, Husband & Brother",
      desc: "Milky Way solar system crystal spheres, midnight black keychains, and hypnotic moving sand art for his desk.",
      icon: Compass,
      accentBg: "from-[#F2F4F8] to-[#F9FAFC]",
      iconColor: "text-[#0D132C]",
      hoverBorder: "hover:border-[#0D132C]/40 hover:shadow-[0_16px_36px_-8px_rgba(13,19,44,0.18)]",
      popularItems: ["Solar System Sphere", "Midnight Cassette", "Sand Art Lamp"],
    },
    {
      id: "wedding",
      badge: "Home & Couple",
      badgeColor: "bg-[#426B69]/10 text-[#426B69] border-[#426B69]/20",
      title: "Wedding & New Home",
      subtitle: "Warm Room Decor & Centerpieces",
      desc: "Elegant 360° dynamic sandscapes and warm ambient lamps that elevate any bedside table or living room.",
      icon: HomeIcon,
      accentBg: "from-[#F0F7F6] to-[#F8FCFB]",
      iconColor: "text-[#426B69]",
      hoverBorder: "hover:border-[#426B69]/40 hover:shadow-[0_16px_36px_-8px_rgba(66,107,105,0.18)]",
      popularItems: ["Rotating Sand Lamp", "Snowing Streetlamp", "Crystal Sphere"],
    },
    {
      id: "corporate",
      badge: "Desk & Office",
      badgeColor: "bg-[#426B69]/10 text-[#426B69] border-[#426B69]/20",
      title: "Workplace & Stress Relief",
      subtitle: "For Colleagues & Executives",
      desc: "Relaxing desk decor that relieves screen fatigue, promotes calm focus, and looks sophisticated in any workspace.",
      icon: Briefcase,
      accentBg: "from-[#F4F6F9] to-[#FAFBFD]",
      iconColor: "text-[#426B69]",
      hoverBorder: "hover:border-[#426B69]/40 hover:shadow-[0_16px_36px_-8px_rgba(66,107,105,0.18)]",
      popularItems: ["360° Sand Hourglass", "Saturn Crystal Ball", "Ambient Lamp"],
    },
  ];

  return (
    <section 
      id="shop-by-occasion" 
      className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#FAF5F8] via-[#FDFBFD] to-[#F5F1F4] border-t border-b border-noir/[0.06] overflow-hidden"
    >
      {/* Soft Ambient Caustic Halo Lights */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[700px] h-[340px] rounded-full bg-[#FFD3F6]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-[#C0E6DE]/25 blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Sweet Signature Kicker */}
          <span className="font-signature text-4xl sm:text-5xl lg:text-[52px] text-[#A80C42] leading-none block mb-2 select-none drop-shadow-sm">
            Find the Perfect Gift
          </span>

          {/* Statuesque Headline */}
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-noir tracking-tight leading-[1.15] mb-3">
            Shop by Occasion
          </h2>

          <p className="font-sans text-xs sm:text-sm text-noir/70 max-w-xl mx-auto leading-relaxed">
            Choose what you are celebrating today. We have tailored quick recommendations to make gifting effortless.
          </p>
        </div>

        {/* 6-Card Responsive Occasion Grid (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {occasions.map((occ, idx) => {
            const Icon = occ.icon;

            return (
              <Link
                key={occ.id}
                href="#collection"
                className={`group relative rounded-[16px] bg-white border border-noir/[0.08] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] ${occ.hoverBorder} hover:-translate-y-1`}
              >
                {/* Background Subtle Gradient Glow */}
                <div 
                  className={`absolute inset-0 rounded-[16px] bg-gradient-to-br ${occ.accentBg} opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} 
                />

                <div className="relative z-10">
                  {/* Top Row: Tag Badge & Vector Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-[8px] border text-[11px] font-mono font-bold uppercase tracking-wider ${occ.badgeColor}`}>
                      {occ.badge}
                    </span>

                    <div className="w-10 h-10 rounded-full bg-white border border-noir/[0.08] shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-5 h-5 ${occ.iconColor}`} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-playfair text-xl font-bold text-noir group-hover:text-[#A80C42] transition-colors mb-1">
                    {occ.title}
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-noir/50 mb-3">
                    {occ.subtitle}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-noir/70 leading-relaxed mb-5">
                    {occ.desc}
                  </p>

                  {/* Quick Pill Suggestions */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {occ.popularItems.map((item, itemIdx) => (
                      <span 
                        key={itemIdx}
                        className="px-2 py-0.5 rounded-[6px] bg-white/90 border border-noir/[0.07] text-[10px] font-mono text-noir/65"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Prompt */}
                <div className="relative z-10 pt-3 border-t border-noir/[0.06] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-noir group-hover:text-[#A80C42] transition-colors">
                  <span>Explore Gift Ideas</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
