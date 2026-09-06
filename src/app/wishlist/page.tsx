"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { 
  Heart, 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  Star, 
  Check, 
  MessageCircle, 
  Share2,
  PackageCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WishlistPage() {
  const { 
    wishlist, 
    toggleWishlist, 
    clearWishlist, 
    addItem, 
    openQuickView 
  } = useCart();

  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [allAdded, setAllAdded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter products that are in the user's wishlist
  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleAddToCart = (productId: string) => {
    addItem(productId);
    setAddedIds((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  const handleAddAllToCart = () => {
    wishlistedProducts.forEach((product) => {
      addItem(product.id);
    });
    setAllAdded(true);
    setTimeout(() => {
      setAllAdded(false);
    }, 2500);
  };

  const handleShareWishlist = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F8] pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-white via-rose-50/40 to-[#FAF6F8] border-b border-black/[0.06] pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-noir/50 mb-3">
            <Link href="/" className="hover:text-[#D81B60] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-noir font-semibold">Wishlist</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="font-signature text-4xl sm:text-5xl text-[#D81B60] block">
                  Saved Keepsakes
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-[#D81B60] font-mono text-xs font-bold border border-pink-200">
                  {wishlistedProducts.length} {wishlistedProducts.length === 1 ? "item" : "items"}
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-noir tracking-tight">
                My Curated Wishlist
              </h1>
              <p className="text-xs sm:text-sm text-noir/60 font-sans mt-1">
                Your personalized collection of heartfelt gifts and glowing night lights.
              </p>
            </div>

            {/* Quick Actions if items exist */}
            {wishlistedProducts.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleShareWishlist}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-white border border-black/10 hover:border-[#D81B60]/40 text-noir text-xs font-mono font-semibold transition-all shadow-sm active:scale-95"
                  title="Copy Wishlist Link"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#D81B60]" />
                  <span>{copiedLink ? "Link Copied!" : "Share Wishlist"}</span>
                </button>

                <button
                  onClick={clearWishlist}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-mono font-semibold transition-all shadow-sm active:scale-95"
                  title="Remove All Items"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>

                <button
                  onClick={handleAddAllToCart}
                  disabled={allAdded}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 disabled:opacity-80"
                >
                  {allAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5 animate-scale-in" />
                      <span>All Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add All to Bag</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {wishlistedProducts.length === 0 ? (
          /* Empty Wishlist State */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[20px] bg-white border border-black/[0.06] p-12 sm:p-16 text-center max-w-2xl mx-auto shadow-sm my-8"
          >
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-pink-100/70 animate-ping opacity-30" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-pink-100 to-rose-50 border border-pink-200 flex items-center justify-center shadow-inner">
                <Heart className="w-9 h-9 text-[#D81B60] fill-pink-200" />
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-noir mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-sm text-noir/60 font-sans max-w-md mx-auto mb-8 leading-relaxed">
              Explore our boutique collection of 3D glowing crystal lamps, customizable voice cassette keychains, and romantic gifts to save your favorites!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] bg-gradient-to-r from-[#D81B60] to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore All Products</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Wishlist Grid */
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {wishlistedProducts.map((product) => {
                const savings = product.originalPrice - product.price;
                const isItemAdded = addedIds[product.id];

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    className="group rounded-[16px] bg-white border border-black/[0.08] hover:border-[#D81B60]/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Media Container */}
                    <div className="relative aspect-square w-full overflow-hidden bg-rose-50/20">
                      <Image
                        src={product.image}
                        alt={product.nameEn}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[8px] bg-black/65 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider font-semibold z-10">
                        {product.categoryNameEn}
                      </div>

                      {/* Remove From Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Remove from Wishlist"
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-rose-600 hover:text-rose-700 shadow-md backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 z-10"
                        title="Remove from Wishlist"
                      >
                        <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
                      </button>

                      {/* Quick View Hover Button */}
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                        <button
                          onClick={() => openQuickView(product.id)}
                          className="px-4 py-2 rounded-[8px] bg-white text-noir font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-noir hover:text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Quick View</span>
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Rating & Stock */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1 text-[#426B69]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-[#426B69] stroke-[#426B69]"
                            />
                          ))}
                          <span className="font-mono text-[11px] text-noir/60 ml-1">
                            ({product.reviewCount})
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#426B69] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#426B69] animate-ping" />
                          <span>In Stock</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="font-display text-sm font-bold text-noir hover:text-[#D81B60] transition-colors line-clamp-2 mb-1 leading-snug"
                      >
                        {product.nameEn}
                      </Link>

                      <p className="text-xs text-noir/60 line-clamp-1 mb-4 font-sans">
                        {product.taglineEn}
                      </p>

                      {/* Price Row */}
                      <div className="mt-auto pt-3 border-t border-black/[0.06] flex items-baseline justify-between mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-base font-bold text-noir">
                            Tk {product.price}
                          </span>
                          <span className="font-mono text-xs text-noir/40 line-through">
                            Tk {product.originalPrice}
                          </span>
                        </div>
                        {savings > 0 && (
                          <span className="font-mono text-[10px] font-bold text-[#D81B60] bg-pink-50 px-2 py-0.5 rounded border border-pink-100">
                            Save Tk {savings}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className={`w-full py-2.5 px-3 rounded-[10px] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 ${
                            isItemAdded
                              ? "bg-emerald-600 text-white shadow-emerald-200"
                              : "bg-gradient-to-r from-[#D81B60] to-[#C2185B] hover:from-[#E91E63] hover:to-[#D81B60] text-white shadow-pink-100"
                          }`}
                        >
                          {isItemAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 animate-scale-in" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>

                        <Link
                          href={`/products/${product.slug}`}
                          className="w-full py-2.5 px-3 rounded-[10px] bg-white hover:bg-rose-50 border border-black/10 hover:border-[#D81B60]/40 text-noir font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1 transition-all active:scale-95 text-center"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Concierge / Assistance Strip */}
        <div className="mt-16 rounded-[16px] bg-gradient-to-r from-[#0D132C] via-[#1A2035] to-[#0D132C] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">
                Need Help Selecting or Customizing Your Gift?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans">
                Chat with our Dhaka concierge on WhatsApp for custom audio recording tips or photo engraving help.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801320829916?text=Hi%20Zahra%27s%20World!%20I%20have%20questions%20about%20my%20saved%20wishlist%20items."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 shadow-lg hover:scale-105 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
