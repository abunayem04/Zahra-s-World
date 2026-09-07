"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Respect user's motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Initialize Lenis with boutique luxury cinematic inertia (60-120fps fluid)
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    // Intercept in-page hash links for fluid Lenis scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, { 
            offset: -76, 
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
