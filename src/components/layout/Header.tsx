"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Menu, 
  X, 
  Sparkles,
  User,
  LogOut,
  ChevronDown
} from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";

export const Header: React.FC = () => {
  const router = useRouter();
  const { totalCount, openDrawer, wishlistCount, user, logout } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] h-[68px]"
          : "bg-white/85 backdrop-blur-xl h-20"
      } border-b border-black/[0.06]`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity */}
        <Link 
          href="/" 
          className="group inline-flex items-center py-1 select-none shrink-0"
          aria-label="Zahra's World Home"
        >
          <span className="font-signature text-[32px] sm:text-[40px] text-noir tracking-wide group-hover:text-[#D81B60] transition-colors duration-300 drop-shadow-sm leading-none font-normal">
            Zahra&apos;s World
          </span>
        </Link>

        {/* Center: Search Bar */}
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
              placeholder="Search 3D crystal lamps, cassette keychains, sand art..."
              className="w-full pl-10 pr-12 py-2.5 rounded-[10px] bg-black/[0.03] hover:bg-black/[0.04] focus:bg-white border border-black/[0.07] focus:border-[#D81B60]/60 text-xs text-noir placeholder:text-noir/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] focus:shadow-[0_0_0_3px_rgba(216,27,96,0.1)] outline-none transition-all font-sans"
            />
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 absolute right-3 text-[10px] font-mono text-noir/35 bg-black/[0.04] rounded border border-black/[0.06] pointer-events-none">
              Enter
            </kbd>
          </div>
        </form>

        {/* Right: Actions Cluster */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* "Shop All" / Products Link */}
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_2px_10px_rgba(216,27,96,0.25)] hover:shadow-[0_4px_16px_rgba(216,27,96,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>All Products</span>
          </Link>

          {/* Wishlist Button */}
          <Link
            href="/products"
            aria-label="Wishlist"
            className="relative w-9 h-9 rounded-[10px] bg-white/70 backdrop-blur-md border border-black/[0.08] hover:border-pink-300 hover:bg-white flex items-center justify-center text-noir hover:text-[#D81B60] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] active:scale-95"
          >
            <Heart className={`w-4 h-4 transition-transform duration-200 ${wishlistCount > 0 ? "fill-[#D81B60] text-[#D81B60] scale-110" : "hover:scale-110"}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-[#D81B60] to-[#AD1457] text-white font-mono text-[9px] font-bold flex items-center justify-center ring-2 ring-white shadow-sm">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart Bag Button with Counter */}
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

          {/* User Account State / Login Buttons */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#FAF5F8] border border-black/10 hover:border-[#D81B60]/40 text-noir text-xs font-sans font-semibold transition-all shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#D81B60] to-rose-400 text-white flex items-center justify-center text-[10px] font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="max-w-[90px] truncate hidden sm:inline">
                  {user.isGuest ? "Guest" : user.name.split(" ")[0]}
                </span>
                <ChevronDown className="w-3 h-3 text-noir/50" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-black/[0.08] shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-black/[0.06]">
                    <div className="font-sans font-bold text-xs text-noir truncate">{user.name}</div>
                    <div className="font-mono text-[10px] text-noir/50 truncate">
                      {user.email || (user.isGuest ? "Guest Account" : "Signed in")}
                    </div>
                  </div>

                  <Link
                    href="/cart"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-sans text-noir hover:bg-rose-50 hover:text-[#D81B60] transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>View Shopping Bag</span>
                  </Link>

                  <Link
                    href="/products"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-sans text-noir hover:bg-rose-50 hover:text-[#D81B60] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Browse All Products</span>
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-sans text-rose-600 hover:bg-rose-50 border-t border-black/[0.06] transition-colors text-left"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setAuthMode("login")}
                className="inline-flex items-center justify-center px-4 py-2 rounded-[10px] border-[1.5px] border-[#3D0C24] bg-white hover:bg-rose-50/70 text-[#3D0C24] font-sans font-semibold text-xs tracking-tight shadow-sm hover:shadow transition-all duration-200 active:scale-95 select-none"
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode("signup")}
                className="inline-flex items-center justify-center px-4 py-2 rounded-[10px] bg-gradient-to-r from-[#D81B60] to-[#C2185B] hover:from-[#E91E63] hover:to-[#D81B60] text-white font-sans font-semibold text-xs tracking-tight shadow-[0_2px_12px_rgba(216,27,96,0.3)] hover:shadow-[0_4px_18px_rgba(216,27,96,0.4)] transition-all duration-200 active:scale-95 select-none"
              >
                Sign Up
              </button>
            </div>
          )}

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
              placeholder="Search crystal lamps, keychains..."
              className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-black/[0.03] border border-black/[0.08] text-xs text-noir placeholder:text-noir/40 outline-none focus:border-[#D81B60]"
            />
          </form>

          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] flex items-center justify-between text-noir font-semibold"
          >
            <span>All Products Catalog</span>
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
          </Link>

          <Link
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] flex items-center justify-between text-noir"
          >
            <span>Shopping Bag ({totalCount})</span>
            <ShoppingBag className="w-4 h-4 text-slateTeal" />
          </Link>

          <Link
            href="/#shop-by-occasion"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] text-noir"
          >
            Shop by Occasion
          </Link>

          <Link
            href="/#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-black/[0.04] text-noir"
          >
            Client Reviews
          </Link>

          <a
            href="https://wa.me/8801320829916"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 flex items-center gap-2 text-[#D81B60] font-bold tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp Order &amp; Help (+880 1320-829916)</span>
          </a>

          {/* Mobile Auth Actions */}
          {!user ? (
            <div className="pt-3 border-t border-black/[0.06] flex items-center gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthMode("login");
                }}
                className="flex-1 py-2.5 rounded-[10px] bg-white border-[1.5px] border-[#3D0C24] text-[#3D0C24] text-xs font-sans font-semibold tracking-tight text-center shadow-sm active:scale-95"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthMode("signup");
                }}
                className="flex-1 py-2.5 rounded-[10px] bg-gradient-to-r from-[#D81B60] to-[#C2185B] text-white text-xs font-sans font-semibold tracking-tight text-center shadow-md active:scale-95"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
              <span className="text-xs font-sans font-semibold text-noir">Signed in as {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-mono font-bold text-rose-600 uppercase"
              >
                Logout
              </button>
            </div>
          )}
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
