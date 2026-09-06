"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  colSpan: string;
  aspectClass: string;
}

export const UnboxingGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "unboxing-crystal",
      image: "/assets/gallery/unboxing_crystal.jpg",
      alt: "Unboxing the glowing 3D Celestial Crystal Sphere",
      colSpan: "lg:col-span-7",
      aspectClass: "h-[320px] sm:h-[400px] lg:h-[440px]",
    },
    {
      id: "unboxing-cassette",
      image: "/assets/gallery/unboxing_cassette.jpg",
      alt: "Playing the Retro Pastel Voice Cassette Keychain",
      colSpan: "lg:col-span-5",
      aspectClass: "h-[320px] sm:h-[400px] lg:h-[440px]",
    },
    {
      id: "unboxing-sandart",
      image: "/assets/gallery/unboxing_sandart.jpg",
      alt: "Interacting with the 360 Rotating Moving Sand Art Lamp",
      colSpan: "lg:col-span-5",
      aspectClass: "h-[320px] sm:h-[400px] lg:h-[440px]",
    },
    {
      id: "unboxing-diorama",
      image: "/assets/gallery/unboxing_diorama.jpg",
      alt: "Unboxing the Swirling Snow Streetlamp Lantern and Velvet Jewelry Set",
      colSpan: "lg:col-span-7",
      aspectClass: "h-[320px] sm:h-[400px] lg:h-[440px]",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#FAF5F8] via-[#FDFBFD] to-[#F5F1F4] overflow-hidden">
      {/* Soft Ambient Caustic Halo Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] rounded-full bg-[#FFD3F6]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[480px] h-[480px] rounded-full bg-[#C0E6DE]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Sweet Signature Kicker */}
          <span className="font-signature text-4xl sm:text-5xl lg:text-[54px] text-[#D81B60] leading-none block mb-2 select-none drop-shadow-sm">
            Moments of Wonder
          </span>

          {/* Statuesque Headline */}
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-noir tracking-tight leading-[1.12] mb-3">
            The Unboxing Experience
          </h2>

          <p className="font-sans text-xs sm:text-sm text-noir/70 max-w-xl mx-auto leading-relaxed">
            Real smiles, authentic reactions, and the pure warmth of unwrapping timeless keepsakes.
          </p>
        </div>

        {/* =========================================================================
            PURE TEXT-FREE ASYMMETRICAL 7+5 / 5+7 BENTO GALLERY (MATCHING USER SKETCH)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 lg:gap-3.5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className={`${item.colSpan} ${item.aspectClass} group relative rounded-[14px] sm:rounded-[16px] overflow-hidden cursor-pointer border border-noir/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-8px_rgba(216,27,96,0.18)] hover:border-[#D81B60]/40 transition-all duration-500 bg-[#FAF5F8] select-none`}
            >
              {/* Pure Unobstructed Photographic Canvas (Zero Text On Image) */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Ambient Hover Sheen */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-md text-noir flex items-center justify-center shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 text-noir/80" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full-Screen Picture View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-noir flex items-center justify-center backdrop-blur-md border border-white/30 transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] h-[650px] rounded-[18px] overflow-hidden shadow-2xl border border-white/20"
          >
            <Image
              src={selectedImage}
              alt="Unboxing preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
