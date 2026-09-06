"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Gem, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowUp, 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Clock, 
  Mail, 
  Check, 
  Send,
  Truck,
  RotateCcw,
  BadgeCheck,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) return;
    setSubscribed(true);
    setEmailInput("");
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0A0E24] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Ambient Lighting Gradient Accents */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-[#D81B60]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[550px] h-[350px] bg-[#426B69]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D81B60]/50 to-transparent" />

      {/* =========================================================================
          TOP SECTION: VIP NEWSLETTER & PRIVATE CLUB
          ========================================================================= */}
      <div className="relative border-b border-white/[0.08] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[22px] bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-white/10 p-8 sm:p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Subtle glow orb */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FFD3F6]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D81B60]/20 border border-[#D81B60]/40 text-[#FFD3F6] font-mono text-[11px] uppercase tracking-widest font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Zahra&apos;s VIP Circle</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  Receive Private Drops &amp; Exclusive Vouchers
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-lg">
                  Subscribe to get instant coupon codes (like <span className="font-mono text-[#FFD3F6] font-bold">ZAHRA100</span>), personalized gift ideas, and new product announcements.
                </p>
              </div>

              <div className="lg:col-span-6">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-[12px] bg-black/40 border border-white/15 focus:border-[#D81B60] text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md transition-all shadow-inner font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 shrink-0 select-none"
                  >
                    {subscribed ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <span>Join VIP Club</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>

                <AnimatePresence>
                  {subscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 text-xs text-emerald-400 font-mono flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Welcome to the circle! Check your email for your Tk 100 gift voucher.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-3 flex items-center gap-4 text-[11px] font-mono text-white/45">
                  <span>✓ 100% Privacy Protected</span>
                  <span>✓ No Spam Ever</span>
                  <span>✓ Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN MULTI-COLUMN NAVIGATION GRID
          ========================================================================= */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* -------------------------------------------------------------
              COLUMN 1: BRAND ATELIER & IDENTITY (4 cols)
              ------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block group mb-3">
              <span className="font-signature text-5xl sm:text-[54px] text-[#FFD3F6] group-hover:text-white transition-colors duration-300 drop-shadow-[0_2px_12px_rgba(255,211,246,0.3)] block leading-none">
                Zahra&apos;s World
              </span>
            </Link>

            <p className="font-couture text-sm italic text-white/80 tracking-wide mb-4">
              Where Memories Glow Forever
            </p>

            <p className="text-xs text-white/65 font-sans leading-relaxed mb-6 max-w-sm">
              Bangladesh&apos;s premier boutique atelier for 3D laser engraved crystal lamps, custom voice-recording cassette keepsakes, and celestial room decor.
            </p>

            {/* Trust Badges Cluster */}
            <div className="flex flex-col gap-2.5 w-full">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/80">
                <ShieldCheck className="w-4 h-4 text-[#FFD3F6]" />
                <span>100% Quality Checked &amp; Inspected</span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/80">
                <Truck className="w-4 h-4 text-[#C0E6DE]" />
                <span>Doorstep Cash on Delivery Across BD</span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              COLUMN 2: CURATED COLLECTIONS (3 cols)
              ------------------------------------------------------------- */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FFD3F6] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60]" />
              <span>Curated Collections</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-white/70">
              <li>
                <Link href="/products?category=crystal-lamps" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-white/30">›</span> 3D Glowing Crystal Lamps
                </Link>
              </li>
              <li>
                <Link href="/products?category=retro-gadgets" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-white/30">›</span> Voice Recorder Cassettes
                </Link>
              </li>
              <li>
                <Link href="/products?category=sand-art" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-white/30">›</span> 360° Moving Sand Art Lamps
                </Link>
              </li>
              <li>
                <Link href="/products?category=romantic-gifts" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-white/30">›</span> Tulip Mirror Cube &amp; Flowers
                </Link>
              </li>
              <li>
                <Link href="/products?category=ambient-dioramas" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-white/30">›</span> Astronaut Star Projectors
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#FFD3F6] font-semibold hover:underline inline-flex items-center gap-1 mt-2">
                  <span>Browse All 15 Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* -------------------------------------------------------------
              COLUMN 3: QUICK LINKS & CUSTOMER CARE (2 cols)
              ------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FFD3F6] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#426B69]" />
              <span>Customer Care</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-white/70">
              <li>
                <Link href="/wishlist" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-[#D81B60]" />
                  <span>My Wishlist</span>
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <ShoppingBag className="w-3 h-3 text-slateTeal" />
                  <span>Shopping Bag</span>
                </Link>
              </li>
              <li>
                <Link href="/#shop-by-occasion" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-white/30">›</span> Shop by Occasion
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <span className="text-white/30">›</span> Verified Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                  <RotateCcw className="w-3 h-3 text-emerald-400" />
                  <span>7-Day Replacement</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/8801320829916?text=Hi%20Zahra%27s%20World!%20I%20would%20like%20to%20track%20my%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 text-emerald-400 font-semibold"
                >
                  <span className="text-white/30">›</span> Track Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* -------------------------------------------------------------
              COLUMN 4: DHAKA CONCIERGE & WORKSHOP (3 cols)
              ------------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FFD3F6] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Dhaka Concierge</span>
            </h4>

            {/* Direct WhatsApp Callout Card */}
            <a
              href="https://wa.me/8801320829916?text=Hi%20Zahra%27s%20World!%20I%20have%20an%20inquiry%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-[14px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.05] border border-white/10 hover:border-[#25D366]/50 transition-all duration-300 shadow-lg mb-4 block"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#25D366] font-bold">
                    Online • Instant Support
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="flex items-center gap-2.5 text-white">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-white/60">WhatsApp Hotline</div>
                  <div className="font-mono text-sm font-bold tracking-wider text-white">
                    +880 1320-829916
                  </div>
                </div>
              </div>
            </a>

            {/* Workshop Location & Hours */}
            <div className="space-y-2 text-xs font-sans text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C0E6DE] shrink-0 mt-0.5" />
                <span>Atelier Location: Savar, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFD3F6] shrink-0 mt-0.5" />
                <span>Hours: 7 Days a Week • 9:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          PAYMENTS & COURIER PARTNERS RIBBON
          ========================================================================= */}
      <div className="relative border-t border-white/[0.08] py-8 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 font-semibold mr-2">
              Payment Options:
            </span>
            <span className="px-3 py-1 rounded-[8px] bg-white/[0.06] border border-white/10 text-white font-mono text-xs font-semibold">
              Cash on Delivery
            </span>
            <span className="px-3 py-1 rounded-[8px] bg-[#E2136E]/20 border border-[#E2136E]/40 text-[#FFD3F6] font-mono text-xs font-bold">
              bKash
            </span>
            <span className="px-3 py-1 rounded-[8px] bg-[#F7931E]/20 border border-[#F7931E]/40 text-amber-200 font-mono text-xs font-bold">
              Nagad
            </span>
            <span className="px-3 py-1 rounded-[8px] bg-[#8C3494]/20 border border-[#8C3494]/40 text-purple-200 font-mono text-xs font-bold">
              Rocket
            </span>
          </div>

          {/* Logistics Partners */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-[11px] font-mono text-white/50">
            <span className="uppercase tracking-widest font-semibold mr-1">Logistics:</span>
            <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Steadfast</span>
            <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Pathao</span>
            <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">RedX</span>
            <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Sundarban</span>
          </div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM COPYRIGHT BAR & BACK TO TOP
          ========================================================================= */}
      <div className="relative border-t border-white/[0.08] py-6 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          
          <div>
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Zahra&apos;s World Atelier</span>. All rights reserved. Handcrafted in Dhaka, Bangladesh.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/wishlist" className="hover:text-white transition-colors">
              Wishlist
            </Link>
            <Link href="/cart" className="hover:text-white transition-colors">
              Bag
            </Link>
            
            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white text-white/70 hover:text-[#0A0E24] border border-white/10 transition-all duration-300 active:scale-95 ml-2"
            >
              <span className="text-[10px] uppercase tracking-wider font-bold">Top</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};
