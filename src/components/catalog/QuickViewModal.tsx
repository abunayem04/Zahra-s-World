"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Star, ShoppingBag, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");

  if (!quickViewProduct) return null;

  const currentVariantId = selectedVariantId || quickViewProduct.variants[0]?.id || "default";
  const activeVariant =
    quickViewProduct.variants.find((v) => v.id === currentVariantId) ||
    quickViewProduct.variants[0];

  const handleAdd = () => {
    addItem(quickViewProduct.id, activeVariant?.id);
    closeQuickView();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-noir/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white dark:bg-noir rounded-[10px] border border-noir/10 dark:border-white/15 shadow-2xl p-6 sm:p-10 z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-canvas-warm dark:bg-white/10 flex items-center justify-center text-noir/70 dark:text-canvas hover:text-noir dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            {/* Media Box */}
            <div className="relative aspect-square w-full rounded-[10px] overflow-hidden bg-canvas-warm border border-noir/10">
              <Image
                src={activeVariant?.image || quickViewProduct.image}
                alt={quickViewProduct.nameEn}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-slateTeal mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-slateTeal stroke-slateTeal" />
                ))}
                <span className="font-mono text-xs text-noir/60 dark:text-canvas/60 ml-1">
                  5.0 ({quickViewProduct.reviewCount} reviews)
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-noir dark:text-canvas mb-1">
                {quickViewProduct.nameEn}
              </h2>

              <p className="text-xs text-noir/60 dark:text-canvas/60 mb-4 font-sans">
                {quickViewProduct.taglineEn}
              </p>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-noir/10 dark:border-white/10">
                <span className="font-mono text-2xl font-bold text-noir dark:text-canvas">
                  Tk {quickViewProduct.price}
                </span>
                <span className="font-mono text-sm text-noir/40 dark:text-canvas/40 line-through">
                  Tk {quickViewProduct.originalPrice}
                </span>
                <span className="font-mono text-xs font-semibold text-roseBlossom-dark">
                  Save Tk {quickViewProduct.originalPrice - quickViewProduct.price}
                </span>
              </div>

              {/* Variant Picker */}
              {quickViewProduct.variants.length > 1 && (
                <div className="mb-6">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-slateTeal dark:text-mintFrost font-semibold block mb-2">
                    Select Edition / Motif:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`px-3 py-1.5 rounded-[8px] font-mono text-xs transition-colors border ${
                          activeVariant.id === v.id
                            ? "bg-noir text-white border-noir dark:bg-palette-teal"
                            : "bg-canvas-warm dark:bg-white/5 text-noir dark:text-canvas border-noir/10 hover:border-slateTeal"
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {quickViewProduct.featuresEn.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-sans text-noir/70 dark:text-canvas/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-palette-teal shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button
                  onClick={handleAdd}
                  className="py-3 px-4 rounded-[10px] bg-noir text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-noir-hover transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <a
                  href={`https://wa.me/8801320829916?text=${encodeURIComponent(
                    `Hi, I want to order "${quickViewProduct.nameEn}" (${activeVariant?.name}) for Tk ${quickViewProduct.price}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-[10px] bg-canvas-warm dark:bg-white/5 border border-noir/15 text-noir dark:text-canvas font-mono text-xs font-semibold uppercase tracking-wider hover:border-noir transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slateTeal" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
