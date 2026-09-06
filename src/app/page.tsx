import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustRibbon } from "@/components/trust/TrustRibbon";
import { OccasionGateway } from "@/components/catalog/OccasionGateway";
import { TrendingShowcase } from "@/components/catalog/TrendingShowcase";
import { UnboxingGallery } from "@/components/gallery/UnboxingGallery";
import { WhyChooseUs } from "@/components/trust/WhyChooseUs";
import { AboutSection } from "@/components/about/AboutSection";
import { DispatchGallery } from "@/components/dispatch/DispatchGallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustRibbon />
      <OccasionGateway />
      <TrendingShowcase />
      <UnboxingGallery />
      <WhyChooseUs />
      <AboutSection />
      <DispatchGallery />
    </div>
  );
}

