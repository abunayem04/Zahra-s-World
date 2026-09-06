"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

// Triple list for completely seamless infinite loop wrapping
const DISPLAY_PRODUCTS = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

export const TrendingShowcase: React.FC = () => {
  const { addItem, toggleWishlist, isWishlisted, openQuickView } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll & Interaction States
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pause auto-movement momentarily during manual navigation
  const triggerInteractionPause = useCallback(() => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2200);
  }, []);

  // Arrow Buttons Smooth Scroll
  const scroll = (direction: "left" | "right") => {
    triggerInteractionPause();
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.35; // fluid pan sensitivity
    if (Math.abs(walk) > 6) {
      setHasMoved(true);
    }
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setHasMoved(false);
    }, 80);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  // Initial center alignment to middle set so users can pan both left & right
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      if (el && el.children.length >= PRODUCTS.length * 2) {
        const child0 = el.children[0] as HTMLElement;
        const childSet1 = el.children[PRODUCTS.length] as HTMLElement;
        if (child0 && childSet1) {
          const exactSetWidth = childSet1.offsetLeft - child0.offsetLeft;
          if (exactSetWidth > 0 && el.scrollLeft === 0) {
            el.scrollLeft = exactSetWidth;
          }
        }
      }
    }, 60);

    return () => clearTimeout(timer);
  }, []);

  // Global mouseup listener for smooth drag release anywhere
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  // Smooth continuous auto-looping animation (Slow Right-to-Left)
  useEffect(() => {
    let animId: number;
    let lastTime: number | null = null;
    const SPEED_PX_PER_SEC = 35; // Gentle, elegant slow crawl (~35px/s)

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const el = scrollRef.current;
      if (el && el.children.length >= PRODUCTS.length * 2) {
        const child0 = el.children[0] as HTMLElement;
        const childSet1 = el.children[PRODUCTS.length] as HTMLElement;
        const exactSetWidth = childSet1 && child0 ? childSet1.offsetLeft - child0.offsetLeft : 0;

        if (exactSetWidth > 0) {
          // Move slowly right to left when not hovered, dragged, or interacted with
          if (!isHovered && !isDragging && !isTouching && !isInteracting) {
            el.scrollLeft += SPEED_PX_PER_SEC * delta;
          }

          // Seamless infinite wrap check
          if (!isInteracting) {
            if (el.scrollLeft >= exactSetWidth * 2) {
              el.scrollLeft -= exactSetWidth;
            } else if (el.scrollLeft <= exactSetWidth * 0.4) {
              el.scrollLeft += exactSetWidth;
            }
          }
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, isDragging, isTouching, isInteracting]);

  return (
    <section id="collection" className="relative w-full py-14 sm:py-20 bg-gradient-to-b from-[#FAF5F8] via-[#FDFBFD] to-[#F5F1F4] overflow-hidden">
      {/* Soft Ambient Caustic Halo Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[340px] rounded-full bg-[#FFD3F6]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-[#C0E6DE]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header & Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            {/* Sweet Signature Kicker */}
            <span className="font-signature text-4xl sm:text-5xl lg:text-[50px] text-[#D81B60] leading-none block mb-1.5 select-none drop-shadow-sm">
              Hand-Selected Atelier Icons
            </span>

            {/* Statuesque Headline */}
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-noir tracking-tight">
              Our Most Demanded Products
            </h2>
          </div>

          {/* Left & Right Smooth Navigation Arrows */}
          <div 
            className="flex items-center gap-2 self-end sm:self-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-noir/10 hover:border-[#D81B60]/40 flex items-center justify-center text-noir hover:text-[#D81B60] shadow-sm transition-all duration-200 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-noir/10 hover:border-[#D81B60]/40 flex items-center justify-center text-noir hover:text-[#D81B60] shadow-sm transition-all duration-200 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            INFINITE CONTINUOUS LOOP HORIZONTAL TRACK (AUTO-MOVE + HOVER/CLICK PAUSE)
            ========================================================================= */}
        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={() => setIsTouching(true)}
          onTouchEnd={() => setIsTouching(false)}
          className={`flex items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {DISPLAY_PRODUCTS.map((product, idx) => {
            const wishlisted = isWishlisted(product.id);

            return (
              <div
                key={`${product.id}-loop-${idx}`}
                className="w-[260px] sm:w-[280px] lg:w-[295px] xl:w-[310px] flex-shrink-0 group rounded-[16px] bg-white border border-noir/[0.08] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_38px_-8px_rgba(216,27,96,0.18)] hover:border-[#D81B60]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Media Box */}
                <div 
                  className="relative aspect-square w-full overflow-hidden bg-[#FAF5F8] cursor-pointer"
                  onClick={() => {
                    if (!hasMoved) openQuickView(product.id);
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.nameEn}
                    fill
                    sizes="320px"
                    draggable={false}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                  />

                  {/* Top Right: Wishlist Heart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!hasMoved) toggleWishlist(product.id);
                    }}
                    aria-label={wishlisted ? `Remove ${product.nameEn} from wishlist` : `Add ${product.nameEn} to wishlist`}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 z-10 shadow-sm ${
                      wishlisted
                        ? "bg-[#D81B60] border-[#D81B60] text-white"
                        : "bg-white/85 hover:bg-white border-white/60 text-noir hover:text-[#D81B60]"
                    }`}
                  >
                    <Heart className={`w-4 h-4 transition-transform duration-150 ${wishlisted ? "fill-white" : ""}`} />
                  </button>
                </div>

                {/* Card Content: Strictly ONLY Name, Price, and Add to Bag */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  {/* Product Title */}
                  <h3
                    onClick={() => {
                      if (!hasMoved) openQuickView(product.id);
                    }}
                    className="font-sans text-[13.5px] sm:text-[14.5px] font-semibold text-noir hover:text-[#D81B60] transition-colors cursor-pointer line-clamp-2 leading-snug mb-3 tracking-normal"
                    title={product.nameEn}
                  >
                    {product.nameEn}
                  </h3>

                  {/* Price & Add to Bag Row */}
                  <div className="mt-auto flex flex-col gap-3 pt-2 border-t border-noir/[0.06]">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-base sm:text-lg font-bold text-noir">
                        Tk {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="font-mono text-xs text-noir/40 line-through">
                          Tk {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Bag Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!hasMoved) addItem(product.id);
                      }}
                      className="w-full py-2.5 px-4 rounded-[10px] bg-gradient-to-r from-[#D81B60] via-[#C2185B] to-[#AD1457] hover:from-[#E91E63] hover:to-[#C2185B] text-white font-mono text-xs font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-[0_3px_12px_rgba(216,27,96,0.25)] hover:shadow-[0_4px_18px_rgba(216,27,96,0.4)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                      aria-label={`Add ${product.nameEn} to bag`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

