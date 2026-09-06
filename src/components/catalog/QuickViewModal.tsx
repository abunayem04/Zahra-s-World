"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Star, ShoppingBag, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
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
          className="relative w-full max-w-3xl bg-white rounded-3xl border border-black/10 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-noir/70 hover:text-noir transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Media Box */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF5F8] border border-black/10">
              <Image
                src={activeVariant?.image || quickViewProduct.image}
                alt={quickViewProduct.nameEn}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
                <span className="font-mono text-xs text-noir/60 ml-1">
                  5.0 ({quickViewProduct.reviewCount} reviews)
                </span>
              </div>

              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-noir mb-1">
                {quickViewProduct.nameEn}
              </h2>

              <p className="text-xs text-noir/60 mb-4 font-sans leading-relaxed">
                {quickViewProduct.taglineEn}
              </p>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-black/[0.08]">
                <span className="font-mono text-2xl font-bold text-noir">
                  Tk {quickViewProduct.price}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="font-mono text-sm text-noir/40 line-through">
                    Tk {quickViewProduct.originalPrice}
                  </span>
                )}
                {quickViewProduct.originalPrice && (
                  <span className="font-mono text-xs font-bold text-[#D81B60] bg-rose-50 px-2 py-0.5 rounded-full">
                    Save Tk {quickViewProduct.originalPrice - quickViewProduct.price}
                  </span>
                )}
              </div>

              {/* Variant Picker */}
              {quickViewProduct.variants.length > 1 && (
                <div className="mb-5">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-slateTeal font-bold block mb-2">
                    Select Motif / Color:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all border ${
                          activeVariant.id === v.id
                            ? "bg-[#D81B60] text-white border-[#D81B60] shadow-sm"
                            : "bg-[#FAF5F8] text-noir border-black/10 hover:border-black/30"
                        }`}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-2 mt-auto pt-2">
                <button
                  onClick={handleAdd}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/products/${quickViewProduct.slug}`}
                    onClick={closeQuickView}
                    className="py-2.5 px-3 rounded-xl border border-black/10 bg-white hover:bg-rose-50/50 text-noir font-sans text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <a
                    href={`https://wa.me/8801320829916?text=${encodeURIComponent(
                      `Hi, I want to order "${quickViewProduct.nameEn}" (${activeVariant?.name}) for Tk ${quickViewProduct.price}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-sans text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
