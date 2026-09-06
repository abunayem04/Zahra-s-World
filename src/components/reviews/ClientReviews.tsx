"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, Quote, Sparkles, Gem, MapPin } from "lucide-react";

interface Review {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  product: string;
  comment: string;
  date: string;
}

const ROW_ONE_REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Anika Tabassum",
    initials: "AT",
    location: "Gulshan, Dhaka",
    rating: 5,
    product: "3D Solar System Sphere",
    comment: "The crystal ball looks breathtaking when illuminated at night! Ordered it for my husband's birthday and he was totally amazed. Safe packaging too!",
    date: "2 days ago",
  },
  {
    id: "r2",
    name: "Tanvir Ahmed",
    initials: "TA",
    location: "Chittagong",
    rating: 5,
    product: "Voice Recorder Cassette",
    comment: "Recorded a 30s voice message for my fiancé before leaving abroad. The audio playback is loud and crystal clear. Best keepsake ever!",
    date: "5 days ago",
  },
  {
    id: "r3",
    name: "Nusrat Jahan",
    initials: "NJ",
    location: "Uttara, Dhaka",
    rating: 5,
    product: "Hello Kitty Silver Set",
    comment: "The pink velvet box and matching gift bag were so pretty! Received within 24 hours via Cash on Delivery. Highly recommended boutique.",
    date: "1 week ago",
  },
  {
    id: "r4",
    name: "Sazzad Hossain",
    initials: "SH",
    location: "Sylhet",
    rating: 5,
    product: "360° Moving Sand Art",
    comment: "Every time I rotate the glass, a new beautiful mountain forms. Keeps my work desk calm and peaceful during long office hours.",
    date: "1 week ago",
  },
  {
    id: "r5",
    name: "Farhana Rahman",
    initials: "FR",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    product: "3D Glowing Rose Sphere",
    comment: "The warm wooden LED light gives the coziest vibe to my bedroom. Exactly as shown in the pictures and 100% authentic crystal glass!",
    date: "2 weeks ago",
  },
  {
    id: "r6",
    name: "Mahmudul Hasan",
    initials: "MH",
    location: "Rajshahi",
    rating: 5,
    product: "Snowing Tabletop Lamp",
    comment: "The automatic swirling snow and warm vintage light look like a fairytale scene on my bookshelf. 10/10 quality and fast delivery.",
    date: "2 weeks ago",
  },
];

const ROW_TWO_REVIEWS: Review[] = [
  {
    id: "r7",
    name: "Sadia Islam",
    initials: "SI",
    location: "Khulna",
    rating: 5,
    product: "3D Moon Surface Sphere",
    comment: "I was worried about glass breakage during courier delivery, but the custom foam packaging protected it 100%. Super impressed!",
    date: "3 days ago",
  },
  {
    id: "r8",
    name: "Rifat Karim",
    initials: "RK",
    location: "Mirpur, Dhaka",
    rating: 5,
    product: "Voice Cassette Keychain",
    comment: "Gifted this to my best friend on her graduation with our group song recorded. She literally cried happy tears! Such a unique concept.",
    date: "6 days ago",
  },
  {
    id: "r9",
    name: "Tasnim Chowdhury",
    initials: "TC",
    location: "Cumilla",
    rating: 5,
    product: "360° Rotating Sand Lamp",
    comment: "The 3 light modes are very gentle on the eyes. The purple and gold sand layers are mesmerizing to watch every evening.",
    date: "1 week ago",
  },
  {
    id: "r10",
    name: "Afrin Sultana",
    initials: "AS",
    location: "Gazipur",
    rating: 5,
    product: "Saturn Planet 3D Sphere",
    comment: "The planetary rings engraved inside the crystal look like real 3D holograms. Beautiful craftsmanship and fast COD service.",
    date: "10 days ago",
  },
  {
    id: "r11",
    name: "Fahim Shahriar",
    initials: "FS",
    location: "Banani, Dhaka",
    rating: 5,
    product: "Voice Recorder Cassette",
    comment: "Smooth WhatsApp ordering experience and got it delivered to my doorstep in less than 24 hours. Fantastic service!",
    date: "2 weeks ago",
  },
  {
    id: "r12",
    name: "Nadia Parveen",
    initials: "NP",
    location: "Narayanganj",
    rating: 5,
    product: "Hello Kitty Velvet Set",
    comment: "Bought this for my little sister's 18th birthday. The shine on the sterling silver is top tier and doesn't cause any skin irritation.",
    date: "2 weeks ago",
  },
];

export const ClientReviews: React.FC = () => {
  const [isRowOnePaused, setIsRowOnePaused] = useState(false);
  const [isRowTwoPaused, setIsRowTwoPaused] = useState(false);

  // Duplicate items for seamless infinite scroll loop
  const rowOneItems = [...ROW_ONE_REVIEWS, ...ROW_ONE_REVIEWS, ...ROW_ONE_REVIEWS];
  const rowTwoItems = [...ROW_TWO_REVIEWS, ...ROW_TWO_REVIEWS, ...ROW_TWO_REVIEWS];

  return (
    <section 
      id="reviews" 
      className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#F5F1F4] via-[#FDFBFD] to-[#FAF6FA] border-t border-noir/[0.06] overflow-hidden"
    >
      {/* Ambient Diffuse Caustic Halo Lights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[380px] rounded-full bg-[#FFD3F6]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C0E6DE]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Sweet Signature Kicker */}
          <span className="font-signature text-4xl sm:text-5xl lg:text-[52px] text-[#A80C42] leading-none block mb-2 select-none drop-shadow-sm">
            Loved Across Bangladesh
          </span>

          {/* Statuesque Headline */}
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-noir tracking-tight leading-[1.12] mb-3">
            Our clients says.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-noir/70 max-w-lg mx-auto leading-relaxed mb-5">
            Real stories and unboxing experiences from happy customers who found the perfect gift with us.
          </p>

          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#A80C42]/20 shadow-[0_4px_16px_rgba(168,12,66,0.08)]">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <span className="font-mono text-xs font-bold text-noir">
              4.9/5 Average Rating
            </span>
            <span className="text-[#A80C42]/30">•</span>
            <span className="font-mono text-[11px] text-noir/70">
              1,200+ Happy Parcels Delivered
            </span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          DUAL-DIRECTION INFINITE MARQUEE CAROUSEL
          LINE 1: RIGHT TO LEFT (direction="left")
          LINE 2: LEFT TO RIGHT (direction="right")
          ========================================================================= */}
      <div className="relative w-full space-y-5 sm:space-y-7">
        
        {/* Left & Right Soft Blur Gradient Masks for Seamless Edge Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#F5F1F4] via-[#F5F1F4]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAF6FA] via-[#FAF6FA]/80 to-transparent z-20 pointer-events-none" />

        {/* LINE 1: Move Right to Left */}
        <div 
          className="relative w-full overflow-hidden flex"
          onMouseEnter={() => setIsRowOnePaused(true)}
          onMouseLeave={() => setIsRowOnePaused(false)}
        >
          <div 
            className="flex gap-4 sm:gap-6 w-max animate-marquee-left py-2"
            style={{
              animationPlayState: isRowOnePaused ? "paused" : "running",
            }}
          >
            {rowOneItems.map((review, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[320px] sm:w-[370px] lg:w-[400px] relative rounded-[20px] bg-gradient-to-br from-white via-white to-[#FFF0F6]/80 border border-[#A80C42]/15 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-8px_rgba(168,12,66,0.22)] hover:border-[#A80C42]/45 hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between select-none shrink-0 group overflow-hidden"
              >
                {/* Top Subtle Luxury Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD3F6] via-[#D81B60] to-[#A80C42] opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* Decorative Background Quote Watermark */}
                <Quote className="absolute -bottom-3 -right-3 w-20 h-20 text-[#A80C42]/[0.04] group-hover:text-[#A80C42]/[0.08] transition-colors pointer-events-none stroke-[1]" />

                {/* Subtle Ambient Glow Orb */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FFD3F6]/35 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Top Row: Customer Avatar, Name, Location & Verified Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Monogram Gradient Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#A80C42] via-[#C2185B] to-[#FFD3F6] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-white select-none shrink-0">
                        {review.initials}
                      </div>

                      <div>
                        <h4 className="font-playfair font-bold text-sm text-noir group-hover:text-[#A80C42] transition-colors leading-tight">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-noir/55 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#A80C42]/70 shrink-0" />
                          <span>{review.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Verified Buyer Pill */}
                    <div className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400 drop-shadow-2xs" />
                      ))}
                    </div>
                    <span className="font-mono text-[11px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80">
                      5.0
                    </span>
                  </div>

                  {/* Comment Quote */}
                  <p className="font-sans text-[13px] text-noir/80 leading-relaxed mb-4">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: Product Pill & Date */}
                <div className="relative z-10 pt-3 border-t border-noir/[0.07] flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] bg-white/90 backdrop-blur-md border border-[#A80C42]/20 text-[#A80C42] text-[10px] font-mono font-semibold shadow-2xs max-w-[210px] truncate">
                    <Sparkles className="w-3 h-3 shrink-0 text-[#D81B60]" />
                    <span className="truncate">{review.product}</span>
                  </span>

                  <span className="text-[10px] font-mono text-noir/40 shrink-0">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINE 2: Move Left to Right */}
        <div 
          className="relative w-full overflow-hidden flex"
          onMouseEnter={() => setIsRowTwoPaused(true)}
          onMouseLeave={() => setIsRowTwoPaused(false)}
        >
          <div 
            className="flex gap-4 sm:gap-6 w-max animate-marquee-right py-2"
            style={{
              animationPlayState: isRowTwoPaused ? "paused" : "running",
            }}
          >
            {rowTwoItems.map((review, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[320px] sm:w-[370px] lg:w-[400px] relative rounded-[20px] bg-gradient-to-br from-white via-white to-[#FFF0F6]/80 border border-[#A80C42]/15 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-8px_rgba(168,12,66,0.22)] hover:border-[#A80C42]/45 hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between select-none shrink-0 group overflow-hidden"
              >
                {/* Top Subtle Luxury Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A80C42] via-[#D81B60] to-[#FFD3F6] opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* Decorative Background Quote Watermark */}
                <Quote className="absolute -bottom-3 -right-3 w-20 h-20 text-[#A80C42]/[0.04] group-hover:text-[#A80C42]/[0.08] transition-colors pointer-events-none stroke-[1]" />

                {/* Subtle Ambient Glow Orb */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FFD3F6]/35 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Top Row: Customer Avatar, Name, Location & Verified Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Monogram Gradient Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#A80C42] via-[#C2185B] to-[#FFD3F6] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-white select-none shrink-0">
                        {review.initials}
                      </div>

                      <div>
                        <h4 className="font-playfair font-bold text-sm text-noir group-hover:text-[#A80C42] transition-colors leading-tight">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-noir/55 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#A80C42]/70 shrink-0" />
                          <span>{review.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Verified Buyer Pill */}
                    <div className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400 drop-shadow-2xs" />
                      ))}
                    </div>
                    <span className="font-mono text-[11px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80">
                      5.0
                    </span>
                  </div>

                  {/* Comment Quote */}
                  <p className="font-sans text-[13px] text-noir/80 leading-relaxed mb-4">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: Product Pill & Date */}
                <div className="relative z-10 pt-3 border-t border-noir/[0.07] flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] bg-white/90 backdrop-blur-md border border-[#A80C42]/20 text-[#A80C42] text-[10px] font-mono font-semibold shadow-2xs max-w-[210px] truncate">
                    <Sparkles className="w-3 h-3 shrink-0 text-[#D81B60]" />
                    <span className="truncate">{review.product}</span>
                  </span>

                  <span className="text-[10px] font-mono text-noir/40 shrink-0">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
