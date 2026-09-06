"use client";

import React from "react";
import Link from "next/link";
import { Gem, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-noir text-canvas pt-20 pb-10 border-t border-slateTeal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-slateTeal/20 border border-slateTeal flex items-center justify-center text-palette-pink">
                <Gem className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold uppercase tracking-wider text-canvas">
                Zahra&apos;s World
              </span>
            </div>
            <p className="text-xs text-canvas/70 leading-relaxed mb-6 font-sans">
              Handcrafted 3D laser crystal lamps, custom voice recording cassettes, and aesthetic home decor designed to bring warm light and joy to your special moments.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-mintFrost bg-white/5 px-3 py-1.5 rounded-[10px] border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-palette-pink" />
              <span>100% Quality Checked &amp; Safe Delivery</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-mintFrost mb-5">
              Categories
            </h4>
            <ul className="space-y-3 text-xs font-mono text-canvas/70">
              <li>
                <Link href="#collection" className="hover:text-palette-pink transition-colors">
                  3D Crystal Lamps
                </Link>
              </li>
              <li>
                <Link href="#collection" className="hover:text-palette-pink transition-colors">
                  Voice Cassette Keychains
                </Link>
              </li>
              <li>
                <Link href="#collection" className="hover:text-palette-pink transition-colors">
                  Moving Sand Art Lamps
                </Link>
              </li>
              <li>
                <Link href="#collection" className="hover:text-palette-pink transition-colors">
                  Snowing Night Lights
                </Link>
              </li>
              <li>
                <Link href="#collection" className="hover:text-palette-pink transition-colors">
                  Gift Sets &amp; Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Experience */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-mintFrost mb-5">
              Customer Help
            </h4>
            <ul className="space-y-3 text-xs font-mono text-canvas/70">
              <li>
                <Link href="#why-choose-us" className="hover:text-palette-pink transition-colors">
                  Cash on Delivery in BD
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-palette-pink transition-colors">
                  7-Day Replacement Policy
                </Link>
              </li>
              <li>
                <Link href="#about-us" className="hover:text-palette-pink transition-colors">
                  About Zahra&apos;s World
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-palette-pink transition-colors">
                  Order Tracking &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge Contact */}
          <div id="contact">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-mintFrost mb-5">
              Contact &amp; Support
            </h4>
            <div className="space-y-3 text-xs font-mono text-canvas/80">
              <a
                href="https://wa.me/8801320829916"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-[10px] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-canvas"
              >
                <Phone className="w-4 h-4 text-palette-pink" />
                <div>
                  <div className="text-[10px] text-canvas/60">WhatsApp Direct Line</div>
                  <div className="font-bold">+880 1320-829916</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slateTeal" />
              </a>

              <div className="flex items-start gap-2.5 text-xs text-canvas/70 pt-2">
                <MapPin className="w-4 h-4 text-slateTeal shrink-0 mt-0.5" />
                <span>Store Location: Savar, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-canvas/50">
          <div>
            &copy; {new Date().getFullYear()} Zahra&apos;s World. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>PREMIUM GIFTS &amp; ROOM DECOR</span>
            <span>CASH ON DELIVERY BD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
