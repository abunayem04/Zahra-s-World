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
  ExternalLink,
  Sparkles,
  ShieldCheck
} from "lucide-react";

import Image from "next/image";

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
    <footer className="font-sans antialiased selection:bg-[#D81B60] selection:text-white">
      
      {/* =========================================================================
          1. VIP NEWSLETTER & ATELIER CIRCLE (Clean Luxury White Background)
          ========================================================================= */}
      <div className="bg-gradient-to-b from-[#FAF7F9] via-white to-white border-t border-black/[0.06] text-noir py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-[#A80C42] font-mono text-[11px] uppercase tracking-[0.2em] font-bold mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D81B60]" />
                <span>Atelier Updates &amp; Private Offers</span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-noir tracking-tight">
                Join the Zahra&apos;s World Circle
              </h2>
              <p className="text-xs sm:text-sm text-noir/65 mt-2.5 leading-relaxed font-sans max-w-lg">
                Subscribe for private invitations to limited seasonal batches, new keepsake releases, and your <span className="font-semibold text-[#A80C42]">Tk 100 welcome gift voucher</span>.
              </p>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <Mail className="w-4 h-4 text-noir/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-[#D81B60] transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-[12px] bg-[#FAF5F8] hover:bg-white focus:bg-white border border-black/10 focus:border-[#D81B60] text-xs sm:text-sm text-noir placeholder:text-noir/40 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] focus:shadow-[0_0_0_3px_rgba(216,27,96,0.12)] font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-[12px] bg-gradient-to-r from-[#A80C42] via-[#C2185B] to-[#880E4F] hover:from-[#C2185B] hover:to-[#A80C42] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_16px_rgba(168,12,66,0.3)] hover:shadow-[0_6px_22px_rgba(168,12,66,0.45)] hover:scale-[1.02] active:scale-95 shrink-0 select-none flex items-center justify-center gap-2"
                >
                  {isSubscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {isSubscribed ? (
                <p className="text-xs text-emerald-700 font-sans mt-3 flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Thank you for subscribing! Your welcome gift code is active.</span>
                </p>
              ) : (
                <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] font-mono text-noir/50">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Instant Tk 100 Voucher</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>No Spam Ever</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>100% Privacy Protected</span>
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          2. MAIN DARK FOOTER (Refined Luxury Architecture)
          ========================================================================= */}
      <div className="bg-[#090C1A] text-[#D1D5DB] border-t border-white/[0.08]">
        
        {/* Navigation Columns */}
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

        {/* Payments & Logistics Ribbon with Official Brand Logos */}
        <div className="border-t border-white/[0.08] bg-[#060813] py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
            
            {/* Official Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/50 font-semibold shrink-0">
                Payment Methods:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <div className="relative h-[34px] w-[96px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Cash on Delivery">
                  <Image src="/assets/payments/cod.svg" alt="Cash on Delivery" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[96px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="bKash">
                  <Image src="/assets/payments/bkash.svg" alt="bKash" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[96px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Nagad">
                  <Image src="/assets/payments/nagad.svg" alt="Nagad" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[96px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Rocket DBBL">
                  <Image src="/assets/payments/rocket.svg" alt="Rocket DBBL" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[80px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Visa">
                  <Image src="/assets/payments/visa.svg" alt="Visa" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[80px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Mastercard">
                  <Image src="/assets/payments/mastercard.svg" alt="Mastercard" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Official Courier Delivery Partners */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/50 font-semibold shrink-0">
                Logistics Partners:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <div className="relative h-[34px] w-[110px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Steadfast Courier">
                  <Image src="/assets/couriers/steadfast.svg" alt="Steadfast Courier" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[96px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Pathao Logistics">
                  <Image src="/assets/couriers/pathao.svg" alt="Pathao Logistics" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[96px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="RedX Delivery">
                  <Image src="/assets/couriers/redx.svg" alt="RedX Delivery" fill className="object-cover" />
                </div>
                <div className="relative h-[34px] w-[115px] rounded-[8px] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200" title="Sundarban Courier Service">
                  <Image src="/assets/couriers/sundarban.svg" alt="Sundarban Courier Service" fill className="object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Legal & Copyright */}
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

      </div>

    </footer>
  );
};
