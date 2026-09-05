"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Curated Objects" },
    { id: "crystal-lamps", label: "3D Crystal Spheres" },
    { id: "retro-gadgets", label: "Retro Audio Keepsakes" },
    { id: "romantic-gifts", label: "Romantic Jewelry" },
    { id: "sand-art", label: "Kinetic Sandscapes" },
    { id: "ambient-dioramas", label: "Ambient Dioramas" },
  ];

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slateTeal dark:text-mintFrost font-semibold block mb-2">
          Curated Atelier Collection
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-noir dark:text-canvas mb-3">
          Treasures for the Senses
        </h2>
        <p className="text-xs sm:text-sm text-noir/70 dark:text-canvas/70 font-sans">
          Bespoke optical glass spheres, tactile keepsakes, and ambient bedroom centerpieces designed for longevity.
        </p>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 sm:px-5 py-2 rounded-[10px] text-xs font-mono font-medium uppercase tracking-wider transition-colors ${
                isActive
                  ? "text-white"
                  : "bg-white dark:bg-noir/70 text-noir dark:text-canvas/80 border border-noir/10 dark:border-white/10 hover:border-slateTeal"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-noir rounded-[10px] -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filtered.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={product.id}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
