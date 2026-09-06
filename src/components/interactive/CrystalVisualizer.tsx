"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Sparkles, ShoppingBag, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const CrystalVisualizer: React.FC = () => {
  const crystalProduct = PRODUCTS.find((p) => p.id === "crystal-ball-night-light");
  const variants = crystalProduct?.variants || [];
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const { addItem } = useCart();

  if (!crystalProduct) return null;

  return (
    <section id="crystal-showcase" className="py-20 bg-canvas-warm dark:bg-black/20 border-y border-noir/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slateTeal dark:text-mintFrost font-semibold block mb-2">
            Interactive Preview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-noir dark:text-canvas mb-3">
            Preview 3D Crystal Ball Designs
          </h2>
          <p className="text-xs sm:text-sm text-noir/70 dark:text-canvas/70 font-sans">
            Click on any design below to see how it looks when illuminated on the warm wooden LED base.
          </p>
        </div>

        <div className="rounded-[10px] bg-white dark:bg-noir/80 border border-noir/10 dark:border-white/10 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Stage Visualizer Box */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-8 sm:p-12 rounded-[10px] bg-noir overflow-hidden shadow-inner min-h-[380px]">
            {/* Photometric Uplight Ambient Halo */}
            <div className="absolute bottom-8 w-44 h-44 rounded-full bg-palette-pink/35 blur-[45px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-4 w-52 h-20 rounded-full bg-palette-mint/25 blur-[35px] pointer-events-none" />

            <motion.div
              key={selectedVariant?.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 drop-shadow-2xl z-10"
            >
              <Image
                src={selectedVariant?.image || crystalProduct.image}
                alt={selectedVariant?.name || crystalProduct.nameEn}
                fill
                className="object-contain rounded-[10px]"
              />
            </motion.div>
          </div>

          {/* Right Selector & Specifications */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-palette-pink/20 text-roseBlossom-dark dark:text-palette-pink font-mono text-[10px] font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Pure K9 Crystal Glass</span>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase text-noir dark:text-canvas mb-2">
              {selectedVariant?.name}
            </h3>

            <p className="text-xs sm:text-sm text-noir/70 dark:text-canvas/70 leading-relaxed mb-6 font-sans">
              Detailed 3D laser engraving inside pure crystal glass that never fades, paired with a natural wooden LED base.
            </p>

            <label className="font-mono text-[11px] uppercase tracking-wider text-slateTeal dark:text-mintFrost font-semibold block mb-3">
              Choose a 3D Design:
            </label>

            {/* Motifs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full mb-8">
              {variants.map((v) => {
                const isSelected = selectedVariant?.id === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-3 py-2.5 rounded-[10px] text-xs font-mono font-medium tracking-wide text-left transition-all border ${
                      isSelected
                        ? "bg-noir text-white border-noir shadow-sm dark:bg-palette-teal"
                        : "bg-canvas-warm dark:bg-white/5 text-noir dark:text-canvas border-noir/10 hover:border-slateTeal"
                    }`}
                  >
                    <span className="line-clamp-1">{v.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Price & Action Row */}
            <div className="w-full pt-6 border-t border-noir/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-noir dark:text-canvas">
                  Tk {crystalProduct.price}
                </span>
                <span className="font-mono text-sm text-noir/40 dark:text-canvas/40 line-through">
                  Tk {crystalProduct.originalPrice}
                </span>
                <span className="font-mono text-xs font-semibold text-roseBlossom-dark">
                  Save Tk {crystalProduct.originalPrice - crystalProduct.price}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => addItem("crystal-ball-night-light", selectedVariant?.id)}
                  className="px-6 py-3 rounded-[10px] bg-noir text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-noir-hover transition-colors flex items-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>

                <a
                  href={`https://wa.me/8801320829916?text=${encodeURIComponent(
                    `Hi, I want to order 3D Crystal Ball with motif: "${selectedVariant?.name}" (Tk ${crystalProduct.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[10px] bg-canvas-warm dark:bg-white/5 border border-noir/15 text-noir dark:text-canvas hover:border-noir transition-colors"
                  title="Order on WhatsApp"
                >
                  <ArrowUpRight className="w-4 h-4 text-slateTeal" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
