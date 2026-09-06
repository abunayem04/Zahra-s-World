"use client";

import React from "react";
import Link from "next/link";
import { 
  Cake, 
  Heart, 
  Gem, 
  Sparkles, 
  Compass, 
  Briefcase 
} from "lucide-react";

interface OccasionItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const OccasionGateway: React.FC = () => {
  const occasions: OccasionItem[] = [
    {
      id: "birthday",
      name: "Birthday",
      icon: Cake,
    },
    {
      id: "anniversary",
      name: "Anniversary",
      icon: Heart,
    },
    {
      id: "wedding",
      name: "Wedding",
      icon: Gem,
    },
    {
      id: "for-her",
      name: "For Her",
      icon: Sparkles,
    },
    {
      id: "for-him",
      name: "For Him",
      icon: Compass,
    },
    {
      id: "corporate",
      name: "Corporate",
      icon: Briefcase,
    },
  ];

  return (
    <section 
      id="shop-by-occasion" 
      className="w-full py-10 sm:py-14 bg-gradient-to-b from-[#FAF5F8] via-[#FDFBFD] to-[#F5F1F4] border-t border-b border-noir/[0.06]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Minimal Header */}
        <div className="text-center max-w-xl mx-auto mb-7 sm:mb-9">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-noir tracking-tight mb-1.5">
            Shop by <span className="text-[#D81B60]">Occasion</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-noir/60">
            Find the perfect gift from our collection
          </p>
        </div>

        {/* 6 Compact Minimal Cards in a Clean Single-Row Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {occasions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href="#collection"
                className="group relative bg-white rounded-[14px] sm:rounded-[16px] border border-noir/[0.08] p-5 sm:p-6 flex flex-col items-center justify-center gap-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_-6px_rgba(216,27,96,0.18)] hover:border-[#D81B60]/40 hover:-translate-y-1 transition-all duration-300 select-none cursor-pointer"
              >
                {/* Icon Box */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5F8] group-hover:bg-[#FFF0F6] flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-noir group-hover:text-[#D81B60] group-hover:scale-110 transition-transform duration-300 stroke-[1.75]" />
                </div>

                {/* Text Label */}
                <span className="font-sans font-semibold text-xs sm:text-[13px] text-noir group-hover:text-[#D81B60] transition-colors tracking-tight text-center">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
