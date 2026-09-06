"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUp, 
  Mail, 
  Check, 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink 
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 4500);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#090C1A] text-[#D1D5DB] border-t border-white/[0.08] font-sans antialiased selection:bg-[#D81B60] selection:text-white">
      
      {/* =========================================================================
          1. NEWSLETTER & ATELIER CLUB (Refined, Editorial, Non-Gimmicky)
          ========================================================================= */}
      <div className="border-b border-white/[0.06] bg-[#070914]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFD3F6] font-semibold block mb-1">
                Atelier Updates &amp; Private Offers
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Join the Zahra&apos;s World Circle
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1.5 leading-relaxed font-sans">
                Subscribe for private invitations to limited seasonal batches, new keepsake releases, and voucher codes.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-white/[0.04] border border-white/15 focus:border-[#D81B60] text-xs sm:text-sm text-white placeholder:text-white/40 outline-none transition-colors font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-[#A80C42] hover:bg-[#C2185B] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  {isSubscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Joined</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {isSubscribed && (
                <p className="text-xs text-emerald-400 font-sans mt-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing. We respect your inbox and never send spam.</span>
                </p>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          3. MAIN NAVIGATION (Professional 4-Column Luxury Architecture)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Atelier Story (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-3">
              <span className="font-playfair text-2xl sm:text-[26px] font-bold tracking-tight text-white block">
                Zahra&apos;s World
              </span>
            </Link>
            
            <p className="text-xs text-white/50 leading-relaxed font-sans mb-6 max-w-sm">
              An artisanal gifting studio based in Dhaka, crafting customized 3D crystal lights, personalized audio cassettes, and serene home ambient decor for meaningful celebrations.
            </p>

            {/* Quick Contact Micro-Cards */}
            <div className="space-y-2.5 text-xs text-white/70">
              <a 
                href="https://wa.me/8801320829916" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Hotline: +880 1320-829916</span>
              </a>

              <div className="flex items-center gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 text-[#FFD3F6] shrink-0" />
                <span>Atelier: Savar, Dhaka - 1340, Bangladesh</span>
              </div>

              <div className="flex items-center gap-2.5 text-white/60">
                <Clock className="w-4 h-4 text-[#C0E6DE] shrink-0" />
                <span>Studio Hours: 9:00 AM – 11:00 PM (Daily)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Curated Collections (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Collections
            </h3>
            <ul className="space-y-3 text-xs text-white/65">
              <li>
                <Link href="/products?category=crystal-lamps" className="hover:text-white transition-colors block">
                  3D Glowing Crystal Ball Lamps
                </Link>
              </li>
              <li>
                <Link href="/products?category=retro-gadgets" className="hover:text-white transition-colors block">
                  Mini Voice Recorder Cassettes
                </Link>
              </li>
              <li>
                <Link href="/products?category=sand-art" className="hover:text-white transition-colors block">
                  360° Moving Sand Art Tabletop Lamps
                </Link>
              </li>
              <li>
                <Link href="/products?category=romantic-gifts" className="hover:text-white transition-colors block">
                  Infinite Tulip Mirror Cube
                </Link>
              </li>
              <li>
                <Link href="/products?category=crystal-lamps" className="hover:text-white transition-colors block">
                  Astronaut Starry Galaxy Projector
                </Link>
              </li>
              <li>
                <Link href="/products?category=retro-gadgets" className="hover:text-white transition-colors block">
                  Laser Carved Hand-Crank Music Boxes
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#FFD3F6] font-semibold hover:text-white transition-colors inline-flex items-center gap-1 pt-1">
                  <span>Browse All 15 Products</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Customer Care
            </h3>
            <ul className="space-y-3 text-xs text-white/65">
              <li>
                <Link href="/cart" className="hover:text-white transition-colors block">
                  Shopping Bag &amp; Checkout
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors block">
                  Saved Wishlist Items
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors block">
                  Client Reviews &amp; Photos
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-white transition-colors block">
                  7-Day Replacement Policy
                </Link>
              </li>
              <li>
                <Link href="/#shop-by-occasion" className="hover:text-white transition-colors block">
                  Gifting by Occasion
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/8801320829916?text=Hi%20Zahra%27s%20World!%20I%20would%20like%20to%20track%20my%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Track Order via WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Concierge Support (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Instant Support
            </h3>
            
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-sans text-emerald-400 font-medium">
                  Active Online
                </span>
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed mb-3">
                Have questions regarding custom voice recordings or bulk gift boxes?
              </p>
              <a
                href="https://wa.me/8801320829916"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3 h-3 text-[#25D366]" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          4. PAYMENT METHODS & LOGISTICS (Professional, Subtle Badges)
          ========================================================================= */}
      <div className="border-t border-white/[0.06] bg-[#070914] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <span className="text-xs text-white/40 font-medium mr-2">
              Payment Methods:
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-xs text-white/80 font-medium">
              Cash on Delivery (COD)
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-xs text-white/80 font-medium">
              bKash
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-xs text-white/80 font-medium">
              Nagad
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-xs text-white/80 font-medium">
              Rocket
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-xs text-white/80 font-medium">
              Visa / Mastercard
            </span>
          </div>

          {/* Delivery Partners */}
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>Nationwide Couriers:</span>
            <span className="text-white/70 font-medium">Steadfast • Pathao • RedX • Sundarban</span>
          </div>

        </div>
      </div>

      {/* =========================================================================
          5. LEGAL & COPYRIGHT BAR
          ========================================================================= */}
      <div className="border-t border-white/[0.04] bg-[#05070F] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          
          <div>
            &copy; {new Date().getFullYear()} <span className="text-white/80 font-medium">Zahra&apos;s World</span>. All rights reserved. Handcrafted with care in Dhaka, Bangladesh.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/wishlist" className="hover:text-white transition-colors">
              Wishlist
            </Link>
            <Link href="/cart" className="hover:text-white transition-colors">
              Cart
            </Link>
            
            {/* Minimalist Smooth Back to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors ml-2"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};
