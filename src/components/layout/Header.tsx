"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAmbience } from "@/context/AmbienceContext";
import { useCart } from "@/context/CartContext";
import { Moon, Sun, ShoppingBag, Menu, X, Gem } from "lucide-react";

export const Header: React.FC = () => {
  const { isNight, toggleNight } = useAmbience();
  const { totalCount, openDrawer } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-md shadow-sm h-16"
          : "bg-canvas/90 backdrop-blur-sm h-20"
      } border-b border-noir/5 dark:border-white/10`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Crest */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-noir flex items-center justify-center text-slateTeal border border-slateTeal/40 shadow-sm group-hover:rotate-[-6deg] group-hover:scale-105 transition-transform">
            <Gem className="w-5 h-5 text-palette-pink" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-wider text-noir dark:text-canvas uppercase leading-tight">
              Zahra&apos;s World
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slateTeal dark:text-mintFrost">
              Digital Flagship Atelier
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-noir/80 dark:text-canvas/80">
          <Link href="#collection" className="hover:text-palette-teal transition-colors">
            Collection
          </Link>
          <Link href="#crystal-showcase" className="hover:text-palette-teal transition-colors">
            3D Crystal Lamps
          </Link>
          <Link href="#cassette-showcase" className="hover:text-palette-teal transition-colors">
            Voice Memorabilia
          </Link>
          <Link href="#dispatch-proof" className="hover:text-palette-teal transition-colors">
            Insured Delivery
          </Link>
          <Link href="#contact" className="hover:text-palette-teal transition-colors">
            Concierge
          </Link>
        </nav>

        {/* Header Action Tools */}
        <div className="flex items-center gap-3">
          {/* Photometric Cozy Ambience Toggle */}
          <button
            onClick={toggleNight}
            aria-label="Toggle Cozy Room Light"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] text-xs font-mono font-medium transition-all ${
              isNight
                ? "bg-noir text-palette-pink border border-palette-pink/40 shadow-glowPink"
                : "bg-white text-noir border border-noir/10 hover:border-slateTeal shadow-sm"
            }`}
          >
            {isNight ? (
              <Moon className="w-3.5 h-3.5 text-palette-pink animate-pulse" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-slateTeal" />
            )}
            <span className="hidden sm:inline">
              {isNight ? "Cozy Glow ON" : "Cozy Glow"}
            </span>
          </button>

          {/* Cart Drawer Button */}
          <button
            onClick={openDrawer}
            aria-label="View Shopping Bag"
            className="relative w-10 h-10 rounded-[10px] bg-white dark:bg-noir/80 border border-noir/10 dark:border-white/15 flex items-center justify-center text-noir dark:text-canvas hover:border-noir transition-colors shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-palette-pink text-noir font-mono text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-noir shadow-sm animate-bounce">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-[10px] flex items-center justify-center border border-noir/10 text-noir dark:text-canvas"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas dark:bg-noir border-b border-noir/10 px-6 py-6 flex flex-col gap-4 text-sm font-mono uppercase tracking-wider">
          <Link
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-noir/5 dark:border-white/10"
          >
            Collection
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
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2"
          >
            Concierge
          </Link>
        </div>
      )}
    </header>
  );
};
