"use client";

import React from "react";
import { Sparkles, ShieldCheck, Truck, RefreshCw, MessageSquare } from "lucide-react";

export const TrustLedger: React.FC = () => {
  const items = [
    {
      num: "01",
      icon: Sparkles,
      title: "Optical K9 Crystal",
      desc: "Flawless transparency & permanent internal 3D laser precision",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Verified Inspection",
      desc: "Individually benchmarked for circuitry & finish before dispatch",
    },
    {
      num: "03",
      icon: Truck,
      title: "Express Delivery",
      desc: "Dhaka 24–48h • Nationwide 48–72h door-to-door courier",
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Damage-Free Promise",
      desc: "Hassle-free direct replacement in the rare event of transit defect",
    },
    {
      num: "05",
      icon: MessageSquare,
      title: "Concierge WhatsApp",
      desc: "Human assistance for custom orders, queries & dispatch tracking",
    },
  ];

  return (
    <section className="bg-white dark:bg-noir/40 border-y border-noir/10 dark:border-white/10 py-6 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-noir/10 dark:divide-white/10">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.num}
                className="px-6 py-5 first:pl-0 last:pr-0 flex flex-col justify-between hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slateTeal dark:text-mintFrost tracking-widest">
                    {it.num}
                  </span>
                  <Icon className="w-4 h-4 text-noir/60 dark:text-canvas/60" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-noir dark:text-canvas mb-1">
                    {it.title}
                  </h3>
                  <p className="text-[11px] text-noir/60 dark:text-canvas/60 leading-relaxed font-sans">
                    {it.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
