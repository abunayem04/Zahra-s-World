"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const HeroSection: React.FC = () => {
  const { addItem } = useCart();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 transition-colors duration-500">
      {/* Photometric Ambient Aura Gradients */}
      <div className="absolute top-1/4 right-10 w-[480px] h-[480px] rounded-full bg-palette-pink/30 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] rounded-full bg-palette-mint/25 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Statuesque Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Minimalist Atelier Marker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[10px] bg-white dark:bg-noir/80 border border-noir/10 dark:border-white/10 shadow-subtle mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-palette-teal animate-pulse" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slateTeal dark:text-mintFrost">
                Haute Celestial Atelier
              </span>
            </motion.div>

            {/* Master Headline with Masked Kinetic Reveal */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold uppercase tracking-tight text-noir dark:text-canvas leading-[1.08] mb-6">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Poetry in Light
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-couture lowercase italic tracking-normal text-roseBlossom-dark relative"
                >
                  &amp; Living Form
                  <span className="absolute bottom-1 left-0 right-0 h-2 bg-palette-pink/60 -z-10 rounded-sm" />
                </motion.span>
              </span>
            </h1>

            {/* Single Evocative Statement */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-noir/75 dark:text-canvas/75 font-normal max-w-xl leading-relaxed mb-8 font-sans"
            >
              Bespoke celestial light sculptures and analog keepsakes, handcrafted for modern sanctuaries.
            </motion.p>

            {/* Streamlined Action Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <Link
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[10px] bg-noir dark:bg-canvas text-white dark:text-noir font-mono text-xs font-semibold uppercase tracking-widest hover:bg-noir-hover dark:hover:bg-white shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/8801320829916"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] text-xs font-mono font-semibold uppercase tracking-widest text-noir dark:text-canvas hover:bg-black/5 dark:hover:bg-white/5 border border-transparent hover:border-noir/10 transition-all"
              >
                <span>Concierge Order</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-palette-teal" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Museum-Grade Visual Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[10px] overflow-hidden bg-white dark:bg-noir/90 border border-noir/10 dark:border-white/15 shadow-lg group">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/assets/products/crystal_galaxy.jpg"
                  alt="3D Laser-Engraved Celestial Crystal Ball Night Light"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Minimalist Floating Glass Corner Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-noir/90 backdrop-blur-md text-white px-4 py-2.5 rounded-[10px] border border-white/15 shadow-md flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-canvas/80">
                    01 / Milky Way Sphere
                  </span>
                  <span className="font-mono text-xs font-bold text-palette-pink">
                    Tk 890
                  </span>
                </div>
                <button
                  onClick={() => addItem("crystal-ball-night-light")}
                  className="p-1.5 rounded-[8px] bg-white/10 hover:bg-palette-pink hover:text-noir transition-colors text-white"
                  title="Acquire this sphere"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
