"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Star, Eye, ShoppingBag, ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, openQuickView } = useCart();
  const savings = product.originalPrice - product.price;

  return (
    <div className="group rounded-[10px] bg-white dark:bg-noir/80 border border-noir/10 dark:border-white/10 overflow-hidden shadow-subtle hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Media Box */}
      <div className="relative aspect-square w-full overflow-hidden bg-canvas/60 dark:bg-white/5">
        <Image
          src={product.image}
          alt={product.nameEn}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Top Tag Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[8px] bg-noir/80 backdrop-blur-sm text-white font-mono text-[10px] uppercase tracking-wider">
          {product.badgeEn}
        </div>

        {/* Discount Pill */}
        {savings > 0 && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-[6px] bg-roseBlossom-dark text-white font-mono text-[10px] font-bold">
            Save Tk {savings}
          </div>
        )}

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 bg-noir/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => openQuickView(product.id)}
            className="px-4 py-2 rounded-[8px] bg-white text-noir font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-md hover:bg-noir hover:text-white transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex flex-col flex-1">
        {/* Rating & Stock */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1 text-slateTeal">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-slateTeal stroke-slateTeal"
              />
            ))}
            <span className="font-mono text-[11px] text-noir/60 dark:text-canvas/60 ml-1">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-slateTeal font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-slateTeal animate-ping" />
            <span>In Stock</span>
          </div>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => openQuickView(product.id)}
          className="font-display text-sm font-semibold text-noir dark:text-canvas hover:text-roseBlossom-dark transition-colors cursor-pointer line-clamp-2 mb-1 leading-snug"
        >
          {product.nameEn}
        </h3>

        <p className="text-xs text-noir/60 dark:text-canvas/60 line-clamp-1 mb-4 font-sans">
          {product.taglineEn}
        </p>

        {/* Price Row */}
        <div className="mt-auto pt-3 border-t border-noir/5 dark:border-white/10 flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-base font-bold text-noir dark:text-canvas">
              Tk {product.price}
            </span>
            <span className="font-mono text-xs text-noir/40 dark:text-canvas/40 line-through">
              Tk {product.originalPrice}
            </span>
          </div>
        </div>

        {/* Action Buttons (10px Radius) */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => addItem(product.id)}
            className="py-2.5 px-3 rounded-[10px] bg-canvas-warm dark:bg-white/5 border border-noir/15 dark:border-white/15 text-noir dark:text-canvas font-mono text-xs font-semibold uppercase tracking-wider hover:bg-noir hover:text-white dark:hover:bg-white dark:hover:text-noir transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>

          <a
            href={`https://wa.me/8801320829916?text=${encodeURIComponent(
              `Hi Zahra's World, I want to order "${product.nameEn}" (Tk ${product.price}). Please share details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-[10px] bg-noir text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-noir-hover transition-colors flex items-center justify-center gap-1 border border-white/10"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 text-palette-pink" />
          </a>
        </div>
      </div>
    </div>
  );
};
