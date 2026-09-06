"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, Quote, Sparkles, Heart } from "lucide-react";

interface Review {
  id: string;
  name: string;
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
    location: "Gulshan, Dhaka",
    rating: 5,
    product: "3D Solar System Crystal Ball",
    comment: "The crystal ball looks breathtaking when illuminated at night! Ordered it for my husband's birthday and he was totally amazed. Safe packaging too!",
    date: "2 days ago",
  },
  {
    id: "r2",
    name: "Tanvir Ahmed",
    location: "Chittagong",
    rating: 5,
    product: "Voice Recorder Cassette Keychain",
    comment: "Recorded a 30s voice message for my fiancé before leaving abroad. The audio playback is loud and clear. Best keepsake ever!",
    date: "5 days ago",
  },
  {
    id: "r3",
    name: "Nusrat Jahan",
    location: "Uttara, Dhaka",
    rating: 5,
    product: "Hello Kitty Silver Pendant Set",
    comment: "The pink velvet box and gift bag were so pretty! Received within 24 hours via Cash on Delivery. Highly recommended boutique.",
    date: "1 week ago",
  },
  {
    id: "r4",
    name: "Sazzad Hossain",
    location: "Sylhet",
    rating: 5,
    product: "360° Moving Sand Art Lamp",
    comment: "Every time I rotate the glass, a new beautiful mountain forms. Keeps my work desk calm and peaceful during long office hours.",
    date: "1 week ago",
  },
  {
    id: "r5",
    name: "Farhana Rahman",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    product: "3D Rose Crystal Night Light",
    comment: "The warm wooden LED light gives the coziest vibe to my bedroom. Exactly as shown in the pictures and 100% authentic glass!",
    date: "2 weeks ago",
  },
  {
    id: "r6",
    name: "Mahmudul Hasan",
    location: "Rajshahi",
    rating: 5,
    product: "Snowing Streetlamp Tabletop Lamp",
    comment: "The automatic swirling snow and warm vintage light look like a fairytale scene on my bookshelf. 10/10 quality and fast delivery.",
    date: "2 weeks ago",
  },
];

const ROW_TWO_REVIEWS: Review[] = [
  {
    id: "r7",
    name: "Sadia Islam",
    location: "Khulna",
    rating: 5,
    product: "3D Moon Surface Crystal Ball",
    comment: "I was worried about glass breakage during courier delivery, but the custom foam packaging protected it 100%. Super impressed!",
    date: "3 days ago",
  },
  {
    id: "r8",
    name: "Rifat Karim",
    location: "Mirpur, Dhaka",
    rating: 5,
    product: "Vintage Cassette Voice Keychain",
    comment: "Gifted this to my best friend on her graduation with our group song recorded. She literally cried happy tears! Such a unique concept.",
    date: "6 days ago",
  },
  {
    id: "r9",
    name: "Tasnim Chowdhury",
    location: "Cumilla",
    rating: 5,
    product: "360° Rotating Sand Art Lamp",
    comment: "The 3 light modes are very gentle on the eyes. The purple and gold sand layers are mesmerizing to watch every evening.",
    date: "1 week ago",
  },
  {
    id: "r10",
    name: "Afrin Sultana",
    location: "Gazipur",
    rating: 5,
    product: "Saturn Planet 3D Crystal Ball",
    comment: "The planetary rings engraved inside the crystal look like real 3D holograms. Beautiful craftsmanship and fast COD service.",
    date: "10 days ago",
  },
  {
    id: "r11",
    name: "Fahim Shahriar",
    location: "Banani, Dhaka",
    rating: 5,
    product: "Voice Recorder Cassette Keychain",
    comment: "Smooth WhatsApp ordering experience and got it delivered to my doorstep in less than 24 hours. Fantastic service!",
    date: "2 weeks ago",
  },
  {
    id: "r12",
    name: "Nadia Parveen",
    location: "Narayanganj",
    rating: 5,
    product: "Hello Kitty Velvet Jewelry Set",
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

          {/* Statuesque Headline requested by user: "Our clients says." */}
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-noir tracking-tight leading-[1.12] mb-3">
            Our clients says.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-noir/70 max-w-lg mx-auto leading-relaxed mb-5">
            Real stories and unboxing experiences from happy customers who found the perfect gift with us.
          </p>

          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-noir/[0.08] shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <span className="font-mono text-xs font-bold text-noir">
              4.9/5 Average Rating
            </span>
            <span className="text-noir/30">•</span>
            <span className="font-mono text-[11px] text-noir/60">
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
      <div className="relative w-full space-y-4 sm:space-y-6">
        
        {/* Left & Right Soft Blur Gradient Masks for Seamless Edge Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F1F4] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6FA] to-transparent z-20 pointer-events-none" />

        {/* LINE 1: Move Right to Left */}
        <div 
          className="relative w-full overflow-hidden flex"
          onMouseEnter={() => setIsRowOnePaused(true)}
          onMouseLeave={() => setIsRowOnePaused(false)}
        >
          <div 
            className="flex gap-4 sm:gap-5 w-max animate-marquee-left"
            style={{
              animationPlayState: isRowOnePaused ? "paused" : "running",
            }}
          >
            {rowOneItems.map((review, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[300px] sm:w-[350px] lg:w-[380px] bg-white rounded-[16px] border border-noir/[0.08] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(168,12,66,0.14)] hover:border-[#A80C42]/35 transition-all duration-300 flex flex-col justify-between select-none shrink-0 group"
              >
                <div>
                  {/* Top Row: Stars + Verified Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </div>
                  </div>

                  {/* Comment Quote */}
                  <p className="font-sans text-xs sm:text-[13px] text-noir/80 leading-relaxed mb-4">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: Customer Info & Product Tag */}
                <div className="pt-3 border-t border-noir/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-noir group-hover:text-[#A80C42] transition-colors">
                      {review.name}
                    </h4>
                    <span className="text-[11px] font-mono text-noir/50">
                      {review.location}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-medium px-2 py-1 rounded-[6px] bg-[#FAF5F8] text-[#A80C42] border border-[#A80C42]/15 max-w-[140px] truncate">
                    {review.product}
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
            className="flex gap-4 sm:gap-5 w-max animate-marquee-right"
            style={{
              animationPlayState: isRowTwoPaused ? "paused" : "running",
            }}
          >
            {rowTwoItems.map((review, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[300px] sm:w-[350px] lg:w-[380px] bg-white rounded-[16px] border border-noir/[0.08] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(168,12,66,0.14)] hover:border-[#A80C42]/35 transition-all duration-300 flex flex-col justify-between select-none shrink-0 group"
              >
                <div>
                  {/* Top Row: Stars + Verified Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </div>
                  </div>

                  {/* Comment Quote */}
                  <p className="font-sans text-xs sm:text-[13px] text-noir/80 leading-relaxed mb-4">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: Customer Info & Product Tag */}
                <div className="pt-3 border-t border-noir/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-noir group-hover:text-[#A80C42] transition-colors">
                      {review.name}
                    </h4>
                    <span className="text-[11px] font-mono text-noir/50">
                      {review.location}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-medium px-2 py-1 rounded-[6px] bg-[#FAF5F8] text-[#A80C42] border border-[#A80C42]/15 max-w-[140px] truncate">
                    {review.product}
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
