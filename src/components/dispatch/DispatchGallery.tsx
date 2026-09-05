"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Truck, Package, Clock } from "lucide-react";

export const DispatchGallery: React.FC = () => {
  return (
    <section id="dispatch-proof" className="py-20 bg-canvas-warm dark:bg-black/20 border-t border-noir/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slateTeal dark:text-mintFrost font-semibold block mb-2">
            Insured Logistics &amp; Packing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-noir dark:text-canvas mb-3">
            Secure Nationwide Dispatch
          </h2>
          <p className="text-xs sm:text-sm text-noir/70 dark:text-canvas/70 font-sans">
            Every celestial glass sphere and analog keepsake is encased in high-density shockproof foam and reinforced corrugated mailers.
          </p>
        </div>

        <div className="rounded-[10px] bg-white dark:bg-noir/80 border border-noir/10 dark:border-white/10 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Dispatch Image Showcase */}
          <div className="lg:col-span-6 relative rounded-[10px] overflow-hidden aspect-[4/3] border border-noir/10 shadow-md">
            <Image
              src="/assets/products/parcels_dispatch.jpg"
              alt="Daily Dispatch Handover and Shockproof Corrugated Packaging"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-noir/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-[8px] border border-white/15 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-palette-pink" />
              <span>Verified Courier Handover</span>
            </div>
          </div>

          {/* Delivery Timelines & Protocol */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-noir dark:text-canvas mb-4">
              Doorstep Cash on Delivery Across Bangladesh
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
              <div className="p-4 rounded-[10px] bg-canvas-warm dark:bg-white/5 border border-noir/10 dark:border-white/10">
                <div className="flex items-center gap-2 text-slateTeal font-mono text-[11px] uppercase tracking-wider font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Dhaka Metropolitan</span>
                </div>
                <div className="font-display text-lg font-bold text-noir dark:text-canvas">
                  24 – 48 Hours
                </div>
                <div className="font-mono text-xs text-noir/60 dark:text-canvas/60">
                  Flat Fee: Tk 70
                </div>
              </div>

              <div className="p-4 rounded-[10px] bg-canvas-warm dark:bg-white/5 border border-noir/10 dark:border-white/10">
                <div className="flex items-center gap-2 text-slateTeal font-mono text-[11px] uppercase tracking-wider font-semibold mb-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Nationwide Districts</span>
                </div>
                <div className="font-display text-lg font-bold text-noir dark:text-canvas">
                  48 – 72 Hours
                </div>
                <div className="font-mono text-xs text-noir/60 dark:text-canvas/60">
                  Flat Fee: Tk 130
                </div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs text-noir/70 dark:text-canvas/70 w-full">
              <div className="flex items-center gap-2.5">
                <Package className="w-4 h-4 text-slateTeal shrink-0" />
                <span>Double-wall corrugated shipping boxes with custom shock-absorption foam.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-slateTeal shrink-0" />
                <span>Zero-risk guarantee: Immediate replacement if courier causes any transit defect.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
