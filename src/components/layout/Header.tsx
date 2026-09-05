"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAmbience } from "@/context/AmbienceContext";
import { useCart } from "@/context/CartContext";
import { 
  Moon, 
  Sun, 
  ShoppingBag, 
  Search, 
  Heart, 
  Menu, 
  X, 
  Gem, 
  Sparkles 
} from "lucide-react";

export const Header: React.FC = () => {
  const { isNight, toggleNight } = useAmbience();
  const { totalCount, openDrawer } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const collectionEl = document.getElementById("collection");
    if (collectionEl) {
      collectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-noir/95 backdrop-blur-md shadow-sm h-16"
          : "bg-white/90 dark:bg-noir/90 backdrop-blur-sm h-20"
      } border-b border-pink-100/60 dark:border-white/10`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo with Couture Typography */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-full bg-noir flex items-center justify-center text-palette-pink border border-pink-200 shadow-sm group-hover:scale-105 transition-transform">
            <Gem className="w-4 h-4 text-palette-pink" />
          </div>
          <div className="flex flex-col">
            <span className="font-couture text-2xl font-bold tracking-tight text-noir dark:text-canvas capitalize leading-tight">
              Zahra&apos;s World
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-pink-700 dark:text-mintFrost font-semibold">
              Haute Atelier
            </span>
          </div>
        </Link>

        {/* Center: Search Bar (as shown in User's Screenshot 1) */}
        <form 
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-lg relative mx-2"
        >
          <div className="relative w-full">
            <Search className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for crystal lamps, cassette keychains, sand art, SKU..."
              className="w-full pl-10 pr-4 py-2 rounded-[10px] bg-[#F7F4F7] dark:bg-white/10 border border-noir/10 dark:border-white/15 text-xs text-noir dark:text-canvas placeholder:text-noir/40 dark:placeholder:text-canvas/40 focus:outline-none focus:border-pink-500 focus:bg-white transition-all font-sans"
            />
          </div>
        </form>

        {/* Right: Actions Cluster (All Products, Wishlist, Cart, Ambience, Concierge) */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* "All Creations" Button (like "All Products" in Screenshot 1) */}
          <Link
            href="#collection"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-pink-600 hover:bg-pink-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Creations</span>
          </Link>

          {/* Wishlist Heart Icon */}
          <button
            onClick={() => setWishlistCount((prev) => (prev === 0 ? 1 : 0))}
            aria-label="Wishlist"
            className="relative w-9 h-9 rounded-[10px] bg-white dark:bg-white/10 border border-noir/10 dark:border-white/15 flex items-center justify-center text-noir dark:text-canvas hover:text-pink-600 hover:border-pink-300 transition-colors shadow-sm"
          >
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? "fill-pink-600 text-pink-600" : ""}`} />
          </button>

          {/* Cart Bag Icon with Count Badge */}
          <button
            onClick={openDrawer}
            aria-label="View Shopping Bag"
            className="relative w-9 h-9 rounded-[10px] bg-white dark:bg-white/10 border border-noir/10 dark:border-white/15 flex items-center justify-center text-noir dark:text-canvas hover:border-pink-300 transition-colors shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-pink-600 text-white font-mono text-[9px] font-bold flex items-center justify-center border-2 border-white dark:border-noir shadow-sm animate-bounce">
                {totalCount}
              </span>
            )}
          </button>

          {/* Photometric Cozy Ambience Toggle */}
          <button
            onClick={toggleNight}
            aria-label="Toggle Cozy Room Light"
            className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-xs font-mono font-medium transition-all ${
              isNight
                ? "bg-noir text-palette-pink border border-palette-pink/40 shadow-glowPink"
                : "bg-white text-noir border border-noir/10 hover:border-pink-300 shadow-sm"
            }`}
          >
            {isNight ? (
              <Moon className="w-3 h-3 text-palette-pink animate-pulse" />
            ) : (
              <Sun className="w-3 h-3 text-pink-600" />
            )}
            <span className="text-[11px]">
              {isNight ? "Cozy Mode" : "Daylight"}
            </span>
          </button>

          {/* Concierge Link Button */}
          <a
            href="https://wa.me/8801320829916"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-[10px] border border-noir/15 dark:border-white/15 text-xs font-mono font-semibold uppercase tracking-wider text-noir dark:text-canvas hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >
            <span>Concierge</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-[10px] flex items-center justify-center border border-noir/10 text-noir dark:text-canvas"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-noir border-b border-noir/10 px-6 py-6 flex flex-col gap-4 text-sm font-mono uppercase tracking-wider shadow-lg">
          <form onSubmit={handleSearchSubmit} className="relative w-full mb-2">
            <Search className="w-4 h-4 text-noir/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2 rounded-[10px] bg-[#F7F4F7] border border-noir/10 text-xs text-noir"
            />
          </form>
          <Link
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-noir/5 dark:border-white/10 flex items-center justify-between"
          >
            <span>All Creations</span>
            <Sparkles className="w-4 h-4 text-pink-600" />
          </Link>
          <Link
            href="#crystal-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-noir/5 dark:border-white/10"
          >
            3D Crystal Lamps
          </Link>
          <Link
            href="#cassette-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-noir/5 dark:border-white/10"
          >
            Voice Memorabilia
          </Link>
          <Link
            href="#dispatch-proof"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-noir/5 dark:border-white/10"
          >
            Insured Delivery
          </Link>
          <a
            href="https://wa.me/8801320829916"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-pink-600 font-bold"
          >
            WhatsApp Concierge (+880 1320-829916)
          </a>
        </div>
      )}
    </header>
  );
};
