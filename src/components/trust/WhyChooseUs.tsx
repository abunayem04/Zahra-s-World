"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  Truck, 
  SunMedium, 
  ShieldCheck, 
  Gift, 
  MessageSquare
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  activeColor: string;
  targetY: number;
}

// De Casteljau's algorithm to compute the exact sub-curve from t=0 to current t on the cubic Bézier
// Control points: P0=(0, 320), P1=(70, 320), P2=(90, targetY), P3=(160, targetY)
function getSubCurve(t: number, targetY: number) {
  const p0x = 0, p0y = 320;
  const p1x = 70, p1y = 320;
  const p2x = 90, p2y = targetY;
  const p3x = 160, p3y = targetY;

  // Level 1
  const q0x = (1 - t) * p0x + t * p1x;
  const q0y = (1 - t) * p0y + t * p1y;
  const q1x = (1 - t) * p1x + t * p2x;
  const q1y = (1 - t) * p1y + t * p2y;
  const q2x = (1 - t) * p2x + t * p3x;
  const q2y = (1 - t) * p2y + t * p3y;

  // Level 2
  const r0x = (1 - t) * q0x + t * q1x;
  const r0y = (1 - t) * q0y + t * q1y;
  const r1x = (1 - t) * q1x + t * q2x;
  const r1y = (1 - t) * q1y + t * q2y;

  // Level 3 (Point on curve)
  const bx = (1 - t) * r0x + t * r1x;
  const by = (1 - t) * r0y + t * r1y;

  const path = `M 0 320 C ${q0x.toFixed(2)} ${q0y.toFixed(2)}, ${r0x.toFixed(2)} ${r0y.toFixed(2)}, ${bx.toFixed(2)} ${by.toFixed(2)}`;
  return { path, x: bx, y: by };
}

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // In-View Animation States
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [activeBeam, setActiveBeam] = useState<{ index: number; progress: number } | null>(null);
  const [illuminatedCards, setIlluminatedCards] = useState<boolean[]>([false, false, false, false, false, false]);

  const features: Feature[] = [
    {
      id: "crystal",
      title: "100% Pure K9 Crystal Glass",
      desc: "Clear, lead-free crystal with detailed 3D laser art inside",
      icon: Sparkles,
      iconBg: "bg-[#A80C42]/8 border-[#A80C42]/15",
      iconColor: "text-[#A80C42]",
      activeColor: "#A80C42",
      targetY: 60,
    },
    {
      id: "cod",
      title: "Cash on Delivery Everywhere",
      desc: "Check your parcel at your doorstep before you pay",
      icon: Truck,
      iconBg: "bg-[#A80C42]/8 border-[#A80C42]/15",
      iconColor: "text-[#A80C42]",
      activeColor: "#A80C42",
      targetY: 164,
    },
    {
      id: "guarantee",
      title: "7-Day Easy Replacement",
      desc: "Get a brand new replacement if damaged during delivery",
      icon: ShieldCheck,
      iconBg: "bg-[#A80C42]/8 border-[#A80C42]/15",
      iconColor: "text-[#A80C42]",
      activeColor: "#A80C42",
      targetY: 268,
    },
    {
      id: "pedestal",
      title: "Solid Wooden LED Bases",
      desc: "Warm glowing LED light with USB cable included",
      icon: SunMedium,
      iconBg: "bg-[#A80C42]/8 border-[#A80C42]/15",
      iconColor: "text-[#A80C42]",
      activeColor: "#A80C42",
      targetY: 372,
    },
    {
      id: "packaging",
      title: "Gift-Ready Packaging",
      desc: "Beautiful gift box with soft foam protection and ribbons",
      icon: Gift,
      iconBg: "bg-[#A80C42]/8 border-[#A80C42]/15",
      iconColor: "text-[#A80C42]",
      activeColor: "#A80C42",
      targetY: 476,
    },
    {
      id: "concierge",
      title: "Fast WhatsApp Help & Support",
      desc: "Chat directly with our team for quick orders and tracking",
      icon: MessageSquare,
      iconBg: "bg-[#A80C42]/8 border-[#A80C42]/15",
      iconColor: "text-[#A80C42]",
      activeColor: "#A80C42",
      targetY: 580,
    },
  ];

  // Trigger when user scrolls / enters this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 60fps Ultra-Smooth Mathematical Light Beam Propagation Loop (ONE-TIME ONLY, NO LOOP)
  useEffect(() => {
    if (!hasEnteredView) return;

    let animFrameId: number;
    let isCancelled = false;

    // Step 0: All cards start in clean off-white
    setIlluminatedCards([false, false, false, false, false, false]);
    setActiveBeam(null);

    const TRAVEL_DURATION = 1350; // 1.35s smooth, calming glide per card
    const PAUSE_DURATION = 400;   // 0.4s breathing pause after card ignites
    const INITIAL_DELAY = 450;    // 0.45s gentle delay after entering view

    let currentCardIdx = 0;
    let phase: "initial" | "traveling" | "pausing" | "done" = "initial";
    let phaseStartTime = performance.now();

    const tick = (now: number) => {
      if (isCancelled) return;

      const elapsed = now - phaseStartTime;

      if (phase === "initial") {
        if (elapsed >= INITIAL_DELAY) {
          phase = "traveling";
          phaseStartTime = now;
        }
      } else if (phase === "traveling") {
        const rawProgress = Math.min(1, elapsed / TRAVEL_DURATION);
        // Silky cubic ease-in-out
        const easedProgress =
          rawProgress < 0.5
            ? 4 * rawProgress * rawProgress * rawProgress
            : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

        setActiveBeam({ index: currentCardIdx, progress: easedProgress });

        if (rawProgress >= 1) {
          // Exactly on touching the card dot:
          setIlluminatedCards((prev) => {
            const next = [...prev];
            next[currentCardIdx] = true;
            return next;
          });
          setActiveBeam(null);
          phase = "pausing";
          phaseStartTime = now;
        }
      } else if (phase === "pausing") {
        if (elapsed >= PAUSE_DURATION) {
          currentCardIdx++;
          if (currentCardIdx < features.length) {
            phase = "traveling";
            phaseStartTime = now;
          } else {
            phase = "done";
            return; // Finished all 6 cards smoothly!
          }
        }
      }

      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animFrameId);
    };
  }, [hasEnteredView]);

  return (
    <section 
      ref={sectionRef}
      id="why-choose-us" 
      className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#F5F1F4] via-[#FDFBFD] to-[#FAF6FA] border-t border-noir/[0.06] overflow-hidden"
    >
      {/* Ambient Diffuse Caustic Halo Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#FFD3F6]/35 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#C0E6DE]/25 blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================================================
            DESKTOP: INTERACTIVE HUB-AND-SPOKE BRANCHING TREE (MATCHING USER REFERENCE)
            ========================================================================= */}
        <div className="hidden lg:flex items-center justify-between gap-0 h-[640px]">

          {/* LEFT: Central Hub Card (Anchor) */}
          <div className="w-[360px] xl:w-[400px] flex-shrink-0 relative group">
            {/* Outer Moving Ambient Halo Glow */}
            <div className="absolute -inset-1.5 rounded-[34px] overflow-hidden pointer-events-none opacity-55 blur-xl transition-opacity duration-500 group-hover:opacity-80">
              <div 
                className="absolute -inset-[100%] animate-[spin_5s_linear_infinite]"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, #D81B60 310deg, #A80C42 335deg, #FFD3F6 355deg, transparent 360deg)"
                }}
              />
            </div>

            {/* Glowing Border Track with Moving Light Beam */}
            <div className="relative p-[2.5px] rounded-[30px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(168,12,66,0.18)]">
              {/* Continuously Rotating Conic Light Beam */}
              <div 
                className="absolute -inset-[100%] animate-[spin_5s_linear_infinite] pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, #D81B60 310deg, #A80C42 335deg, #FFD3F6 355deg, transparent 360deg)"
                }}
              />

              {/* Inner White Card */}
              <div className="relative z-10 rounded-[28px] bg-gradient-to-br from-white via-white to-[#FFF0F5]/80 backdrop-blur-xl border border-noir/[0.06] p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[260px]">
                {/* Big, Signature Title Centered */}
                <h2 className="font-signature text-6xl sm:text-7xl xl:text-[80px] text-[#A80C42] leading-[1.08] select-none drop-shadow-sm text-center w-full">
                  Why Choose <br />
                  Us!!
                </h2>
              </div>
            </div>

            {/* Central Node Dot on Right Edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-[#A80C42] border-2 border-white shadow-md z-20 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
          </div>

          {/* CENTER: SVG Branching Bézier Filament Curves Bridge */}
          <div className="flex-1 h-[640px] relative pointer-events-none px-1">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 160 640" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curveGlowDefault" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A80C42" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#8E97AE" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#A80C42" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="curveGlowActive" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A80C42" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#A80C42" stopOpacity="1" />
                </linearGradient>
              </defs>

              {features.map((feat, idx) => {
                const isHovered = hoveredIdx === idx;
                const isCardTheme = illuminatedCards[idx] || isHovered;
                const isBeamActive = activeBeam?.index === idx;
                const pathData = `M 0 320 C 70 320, 90 ${feat.targetY}, 160 ${feat.targetY}`;

                return (
                  <g key={feat.id}>
                    {/* Glow Halo for Activated / Hovered Path */}
                    {(isHovered || isCardTheme) && (
                      <path
                        d={pathData}
                        fill="none"
                        stroke={feat.activeColor}
                        strokeWidth={isHovered ? "6" : "5"}
                        strokeOpacity={isHovered ? "0.45" : "0.2"}
                        className="transition-opacity duration-500"
                      />
                    )}

                    {/* Base Filament Path */}
                    <path
                      d={pathData}
                      fill="none"
                      stroke={
                        isCardTheme 
                          ? feat.activeColor 
                          : "rgba(142, 151, 174, 0.22)"
                      }
                      strokeWidth={isHovered ? "3" : isCardTheme ? "2.2" : "1.5"}
                      className="transition-all duration-500"
                    />

                    {/* Active Traveling Light Beam from Left Hub to Card (Pure 60fps Mathematical Sub-Curve) */}
                    {isBeamActive && (() => {
                      const sub = getSubCurve(activeBeam.progress, feat.targetY);
                      return (
                        <g key={`beam-${feat.id}`}>
                          {/* Laser light line smoothly drawing along the curve */}
                          <path
                            d={sub.path}
                            fill="none"
                            stroke="#A80C42"
                            strokeWidth="3"
                            strokeLinecap="round"
                            style={{
                              filter: "drop-shadow(0 0 5px #D81B60)",
                            }}
                          />
                        </g>
                      );
                    })()}

                    {/* Terminal Connecting Dot at Right Edge */}
                    <circle
                      cx="160"
                      cy={feat.targetY}
                      r={isHovered ? "5" : isCardTheme ? "4" : "3"}
                      fill={isCardTheme ? feat.activeColor : "#8E97AE"}
                      className="transition-all duration-500"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* RIGHT: Stack of 6 Capsule Cards */}
          <div className="w-[460px] xl:w-[500px] flex-shrink-0 flex flex-col justify-between h-[608px] my-auto">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isHovered = hoveredIdx === idx;
              const isCardTheme = illuminatedCards[idx] || isHovered;

              return (
                <div
                  key={feat.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative h-[84px] rounded-[22px] px-5 py-3.5 flex items-center gap-4 cursor-pointer select-none border overflow-hidden transition-all duration-500 ease-out ${
                    isHovered ? "scale-[1.02] -translate-y-0.5" : ""
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? "0 22px 48px -8px rgba(168,12,66,0.5)"
                      : isCardTheme
                      ? "0 16px 36px -6px rgba(168,12,66,0.38)"
                      : "0 2px 12px rgba(0,0,0,0.02)",
                    borderColor: isHovered
                      ? "rgba(255,255,255,0.7)"
                      : isCardTheme
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(13,19,44,0.07)",
                  }}
                >
                  {/* Off-white Base Background */}
                  <div className="absolute inset-0 bg-[#FAF7FA] pointer-events-none" />

                  {/* Radiant Theme Color Gradient Overlay (Smoothly fades in via opacity) */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-[#A80C42] via-[#94083A] to-[#7A002E] pointer-events-none transition-opacity duration-700 ease-out ${
                      isCardTheme ? "opacity-100" : "opacity-0"
                    }`} 
                  />

                  {/* Foreground Content */}
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    {/* Left Minimalist Circular Icon */}
                    <div className={`w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-out ${
                      isCardTheme
                        ? "bg-white/20 border-white/35 text-white shadow-sm"
                        : "bg-white border-noir/[0.08] text-[#A80C42]"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-sans text-[14.5px] xl:text-[15.5px] font-semibold tracking-tight transition-colors duration-700 ease-out leading-tight truncate ${
                        isCardTheme ? "text-white" : "text-noir"
                      }`}>
                        {feat.title}
                      </h3>
                      <p className={`font-sans text-xs font-light tracking-wide truncate mt-0.5 transition-colors duration-700 ease-out ${
                        isCardTheme ? "text-white/85" : "text-noir/45"
                      }`}>
                        {feat.desc}
                      </p>
                    </div>

                    {/* Right Edge Minimalist Glowing Micro-Node */}
                    <div className="flex items-center pl-1 flex-shrink-0">
                      <span className={`w-2 h-2 rounded-full transition-all duration-700 ease-out ${
                        isCardTheme 
                          ? "bg-white shadow-[0_0_8px_#FFFFFF]" 
                          : "bg-noir/20"
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* =========================================================================
            MOBILE & TABLET RESPONSIVE FALLBACK: CONNECTED VERTICAL TIMELINE STACK
            ========================================================================= */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Central Hub Header */}
          <div className="relative group">
            {/* Outer Moving Halo Glow */}
            <div className="absolute -inset-1 rounded-[30px] overflow-hidden pointer-events-none opacity-50 blur-lg">
              <div 
                className="absolute -inset-[100%] animate-[spin_5s_linear_infinite]"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, #D81B60 310deg, #A80C42 335deg, #FFD3F6 355deg, transparent 360deg)"
                }}
              />
            </div>

            {/* Glowing Border Track */}
            <div className="relative p-[2px] rounded-[26px] overflow-hidden shadow-[0_10px_30px_-6px_rgba(168,12,66,0.12)]">
              <div 
                className="absolute -inset-[100%] animate-[spin_5s_linear_infinite] pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, #D81B60 310deg, #A80C42 335deg, #FFD3F6 355deg, transparent 360deg)"
                }}
              />
              <div className="relative z-10 rounded-[24px] bg-gradient-to-br from-white via-white to-[#FFF0F5]/80 border border-noir/[0.06] p-7 text-center">
                <h2 className="font-signature text-5xl sm:text-6xl text-[#A80C42] leading-tight drop-shadow-sm select-none">
                  Why Choose Us!!
                </h2>
              </div>
            </div>
          </div>

          {/* Vertical Stack of 6 Capsules */}
          <div className="flex flex-col gap-3">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isCardTheme = illuminatedCards[idx];

              return (
                <div
                  key={feat.id}
                  className="relative rounded-[20px] px-4 py-3.5 flex items-center gap-3.5 border border-noir/[0.07] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow duration-700"
                  style={{
                    boxShadow: isCardTheme ? "0 12px 28px -6px rgba(168,12,66,0.38)" : undefined,
                    borderColor: isCardTheme ? "rgba(255,255,255,0.3)" : undefined,
                  }}
                >
                  {/* Off-white Base Background */}
                  <div className="absolute inset-0 bg-[#FAF7FA] pointer-events-none" />

                  {/* Radiant Theme Color Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-[#A80C42] via-[#94083A] to-[#7A002E] pointer-events-none transition-opacity duration-700 ease-out ${
                      isCardTheme ? "opacity-100" : "opacity-0"
                    }`} 
                  />

                  <div className="relative z-10 flex items-center gap-3.5 w-full">
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-out ${
                      isCardTheme
                        ? "bg-white/20 border-white/35 text-white scale-105"
                        : "bg-white border-noir/[0.08] text-[#A80C42]"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-sans text-[14px] font-semibold leading-tight truncate transition-colors duration-700 ease-out ${
                        isCardTheme ? "text-white" : "text-noir"
                      }`}>
                        {feat.title}
                      </h3>
                      <p className={`font-sans text-[11px] font-light tracking-wide truncate mt-0.5 transition-colors duration-700 ease-out ${
                        isCardTheme ? "text-white/85" : "text-noir/45"
                      }`}>
                        {feat.desc}
                      </p>
                    </div>
                    <div className="flex items-center pl-1 flex-shrink-0">
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ease-out ${
                        isCardTheme ? "bg-white shadow-[0_0_6px_#FFFFFF]" : "bg-noir/20"
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
