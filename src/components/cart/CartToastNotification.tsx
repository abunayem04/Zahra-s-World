"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Check, X, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CartToastNotification: React.FC = () => {
  const { lastAddedProduct, clearLastAddedProduct, totalCount } = useCart();

  useEffect(() => {
    if (lastAddedProduct) {
      const timer = setTimeout(() => {
        clearLastAddedProduct();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [lastAddedProduct, clearLastAddedProduct]);

  return (
    <AnimatePresence>
      {lastAddedProduct && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.92, transition: { duration: 0.2 } }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="fixed bottom-6 right-4 sm:right-6 z-[9999] max-w-md w-[calc(100vw-32px)] sm:w-auto bg-white rounded-2xl border border-black/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] p-4 overflow-hidden"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Added to Shopping Bag!
              </span>
            </div>

            <button
              onClick={clearLastAddedProduct}
              className="w-6 h-6 rounded-full hover:bg-black/5 flex items-center justify-center text-noir/40 hover:text-noir transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Product Snippet Row */}
          <div className="flex items-center gap-3.5 p-2 rounded-xl bg-[#FAF5F8] border border-black/[0.05] mb-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white shrink-0 border border-black/10">
              <Image
                src={lastAddedProduct.image}
                alt={lastAddedProduct.product.nameEn}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-sans text-xs font-bold text-noir truncate">
                {lastAddedProduct.product.nameEn}
              </h4>
              {lastAddedProduct.variantName && (
                <span className="font-mono text-[10px] text-slateTeal block truncate">
                  {lastAddedProduct.variantName}
                </span>
              )}
              <div className="font-mono text-xs font-bold text-[#D81B60]">
                Tk {lastAddedProduct.product.price}
              </div>
            </div>
          </div>

          {/* Actions Row */}
          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              onClick={clearLastAddedProduct}
              className="flex-1 py-2 px-3 rounded-xl border border-black/10 hover:border-black/25 bg-white text-noir font-mono text-[11px] font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>View Bag ({totalCount})</span>
            </Link>

            <Link
              href="/checkout"
              onClick={clearLastAddedProduct}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#D81B60] to-[#C2185B] hover:from-[#E91E63] hover:to-[#D81B60] text-white font-mono text-[11px] font-bold uppercase tracking-wider text-center shadow-md transition-all flex items-center justify-center gap-1"
            >
              <span>Checkout</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* 3.5-second auto-dismiss progress bar */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 3.5, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D81B60] to-emerald-500 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
