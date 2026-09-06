"use client";

import React from "react";
import { Sparkles, ShieldCheck, Truck, RefreshCw, MessageSquare } from "lucide-react";

export const TrustRibbon: React.FC = () => {
  const trustPillars = [
    {
      num: "01",
      icon: Sparkles,
      title: "Pure Crystal Glass",
      desc: "Crystal clear glass with detailed 3D laser engraving that never fades",
      accent: "text-[#FFD3F6]",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Hand-Checked Quality",
      desc: "Every piece is individually tested for brightness, wiring, and smooth finish",
      accent: "text-[#C0E6DE]",
    },
    {
      num: "03",
      icon: Truck,
      title: "Cash on Delivery (COD)",
      desc: "Fast 24–48h delivery in Dhaka and all 64 districts across Bangladesh",
      accent: "text-[#FFD3F6]",
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "7-Day Easy Replacement",
      desc: "Hassle-free replacement if your item is damaged during transit",
      accent: "text-[#C0E6DE]",
    },
    {
      num: "05",
      icon: MessageSquare,
      title: "Instant WhatsApp Support",
      desc: "Chat directly with us anytime for quick orders, help & tracking",
      accent: "text-[#FFD3F6]",
    },
  ];

  return (
    <section className="relative w-full bg-[#180011] border-t border-b border-white/[0.08] overflow-hidden z-20">
      {/* Subtle Luminous Sheen & Ambient Caustic Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(216, 27, 96, 0.15) 0%, rgba(255, 211, 246, 0.05) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group px-4 lg:px-5 py-2 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.03] rounded-lg lg:rounded-none"
              >
                {/* Top Row: Index and Hairline Vector Icon */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-bold text-white/40 tracking-[0.2em] group-hover:text-white/70 transition-colors">
                    {pillar.num}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-white/25 group-hover:scale-110 transition-all duration-300">
                    <Icon className={`w-3.5 h-3.5 ${pillar.accent}`} />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-1 drop-shadow-sm group-hover:text-[#FFD3F6] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-sans font-light">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
