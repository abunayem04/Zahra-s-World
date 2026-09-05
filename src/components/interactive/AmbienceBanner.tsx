"use client";

import React from "react";
import { useAmbience } from "@/context/AmbienceContext";
import { Moon, Sun, Sparkles } from "lucide-react";

export const AmbienceBanner: React.FC = () => {
  const { isNight, toggleNight } = useAmbience();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="relative rounded-[10px] overflow-hidden bg-noir text-white p-8 sm:p-12 border border-slateTeal/30 shadow-lg">
        {/* Glow Halo */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-palette-pink/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-palette-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-palette-pink mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Optical Experience</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-white mb-3">
              Experience Bedside Night Warmth
            </h2>
            <p className="text-xs sm:text-sm text-canvas/75 font-sans leading-relaxed">
              Toggle the cozy ambient mode to dim daylight and observe how our 3D laser crystal lamps, dynamic sandscapes, and snowing streetlamps cast a soothing amber glow.
            </p>
          </div>

          <button
            onClick={toggleNight}
            className={`px-6 py-3.5 rounded-[10px] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-md shrink-0 ${
              isNight
                ? "bg-palette-pink text-noir hover:bg-palette-mint hover:shadow-glowMint"
                : "bg-white text-noir hover:bg-palette-pink hover:shadow-glowPink"
            }`}
          >
            {isNight ? (
              <Sun className="w-4 h-4 text-noir" />
            ) : (
              <Moon className="w-4 h-4 text-noir" />
            )}
            <span>{isNight ? "Restore Daylight" : "Switch Cozy Night View"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
