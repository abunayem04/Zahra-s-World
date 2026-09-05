"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Menu, 
  X, 
  Sparkles,
  LogIn,
  UserPlus
} from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";

export const Header: React.FC = () => {
  const { totalCount, openDrawer } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);

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
          ? "bg-white/90 backdrop-blur-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] h-[68px]"
          : "bg-white/80 backdrop-blur-xl h-20"
      } border-b border-black/[0.06]`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity (Sweet Signature Script, No Logo Icon) */}
        <Link 
          href="/" 
          className="group inline-flex items-center py-1 select-none shrink-0"
          aria-label="Zahra's World Home"
        >
          <span className="font-signature text-3xl sm:text-[38px] text-noir tracking-wide group-hover:text-[#D81B60] transition-colors duration-300 drop-shadow-sm leading-none">
            Zahra&apos;s World
          </span>
        </Link>

        {/* Center: Refined Luxury Frosted Search Capsule */}
        <form 
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-lg relative mx-4 group"
        >
          <div className="relative w-full flex items-center">
            <Search className="w-4 h-4 text-noir/35 absolute left-3.5 pointer-events-none group-focus-within:text-[#D81B60] transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search crystal lamps, cassette keychains, sand art..."
              className="w-full pl-10 pr-12 py-2.5 rounded-[10px] bg-black/[0.03] hover:bg-black/[0.04] focus:bg-white border border-black/[0.07] focus:border-[#D81B60]/60 text-xs text-noir placeholder:text-noir/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] focus:shadow-[0_0_0_3px_rgba(216,27,96,0.1)] outline-none transition-all font-sans"
            />
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 absolute right-3 text-[10px] font-mono text-noir/35 bg-black/[0.04] rounded border border-black/[0.06] pointer-events-none">
              ⌘K
            </kbd>
          </div>
        </form>

        {/* Right: Actions Cluster (All Creations, Wishlist, Cart, Login, Sign Up, Concierge) */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* "All Creations" Luxury Satin Pill Button */}
          <Link
            href="#collection"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_2px_10px_rgba(216,27,96,0.25)] hover:shadow-[0_4px_16px_rgba(216,27,96,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>All Creations</span>
          </Link>

          {/* Wishlist Frosted Glass Button */}
          <button
            onClick={() => setWishlistCount((prev) => (prev === 0 ? 1 : 0))}
            aria-label="Wishlist"
            className="relative w-9 h-9 rounded-[10px] bg-white/70 backdrop-blur-md border border-black/[0.08] hover:border-pink-300 hover:bg-white flex items-center justify-center text-noir hover:text-[#D81B60] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] active:scale-95"
          >
            <Heart className={`w-4 h-4 transition-transform duration-200 ${wishlistCount > 0 ? "fill-[#D81B60] text-[#D81B60] scale-110" : "hover:scale-110"}`} />
          </button>

          {/* Cart Bag Frosted Button with Count Badge */}
          <button
            onClick={openDrawer}
            aria-label="View Shopping Bag"
            className="relative w-9 h-9 rounded-[10px] bg-white/70 backdrop-blur-md border border-black/[0.08] hover:border-pink-300 hover:bg-white flex items-center justify-center text-noir hover:text-[#D81B60] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white font-mono text-[9px] font-bold flex items-center justify-center ring-2 ring-white shadow-sm animate-bounce">
                {totalCount}
              </span>
            )}
          </button>

          {/* Log In Button */}
          <button
            onClick={() => setAuthMode("login")}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-white/70 backdrop-blur-md border border-black/[0.08] hover:border-[#D81B60]/40 text-xs font-mono font-semibold uppercase tracking-[0.14em] text-noir hover:text-[#D81B60] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] active:scale-95"
            aria-label="Client Log In"
          >
            <LogIn className="w-3.5 h-3.5 text-noir/70" />
            <span>Log In</span>
          </button>

          {/* Sign Up Button */}
          <button
            onClick={() => setAuthMode("signup")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-noir hover:bg-noir-light text-white text-xs font-mono font-semibold uppercase tracking-[0.14em] shadow-sm hover:shadow transition-all active:scale-95"
            aria-label="Create Atelier Account"
          >
            <UserPlus className="w-3.5 h-3.5 text-palette-pink" />
            <span>Sign Up</span>
          </button>

          {/* Concierge VIP Button with Live Dot */}
          <a
            href="https://wa.me/8801320829916"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px] border border-black/[0.08] bg-white/70 backdrop-blur-md hover:bg-noir hover:text-white text-xs font-mono font-semibold uppercase tracking-[0.14em] text-noir transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-sm active:scale-[0.98]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Concierge</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-[10px] flex items-center justify-center bg-white/70 border border-black/[0.08] text-noir"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-black/[0.08] px-6 py-6 flex flex-col gap-3.5 text-xs font-mono uppercase tracking-[0.12em] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <form onSubmit={handleSearchSubmit} className="relative w-full mb-1">
            <Search className="w-4 h-4 text-noir/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search crystal lamps, voice cassettes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-black/[0.03] border border-black/[0.08] text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60]"
            />
          </form>
          <Link
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] flex items-center justify-between text-noir font-semibold"
          >
            <span>All Creations</span>
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
          </Link>
          <Link
            href="#crystal-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] text-noir"
          >
            3D Crystal Lamps
          </Link>
          <Link
            href="#cassette-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] text-noir"
          >
            Voice Memorabilia
          </Link>
          <Link
            href="#dispatch-proof"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] text-noir"
          >
            Insured Delivery
          </Link>
          <a
            href="https://wa.me/8801320829916"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 flex items-center gap-2 text-[#D81B60] font-bold tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp Concierge (+880 1320-829916)</span>
          </a>

          {/* Mobile Auth Actions */}
          <div className="pt-2 border-t border-black/[0.06] flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthMode("login");
              }}
              className="flex-1 py-2.5 rounded-[10px] bg-white border border-black/10 text-xs font-mono font-semibold uppercase tracking-wider text-noir text-center"
            >
              Log In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthMode("signup");
              }}
              className="flex-1 py-2.5 rounded-[10px] bg-noir text-white text-xs font-mono font-semibold uppercase tracking-wider text-center"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Client Atelier Auth Modal */}
      <AuthModal
        isOpen={authMode !== null}
        initialMode={authMode || "login"}
        onClose={() => setAuthMode(null)}
      />
    </header>
  );
};
