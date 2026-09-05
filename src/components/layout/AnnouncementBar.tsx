"use client";

import React from "react";
import { Sparkles, Phone } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-noir text-canvas py-2 border-b border-white/10 text-xs tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase text-mintFrost">
          <Sparkles className="w-3.5 h-3.5 text-palette-pink animate-pulse" />
          <span>Curated Celestial Light &amp; Keepsakes • Nationwide Cash on Delivery</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono">
          <a
            href="https://wa.me/8801320829916"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-canvas hover:text-palette-pink transition-colors"
          >
            <Phone className="w-3 h-3 text-palette-teal" />
            <span>WhatsApp: +880 1320-829916</span>
          </a>
          <span className="hidden sm:inline opacity-60">|</span>
          <span className="hidden sm:inline opacity-75">Savar, Dhaka</span>
        </div>
      </div>
    </div>
  );
};
