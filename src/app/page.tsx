import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustLedger } from "@/components/trust/TrustLedger";
import { CatalogSection } from "@/components/catalog/CatalogSection";
import { CrystalVisualizer } from "@/components/interactive/CrystalVisualizer";
import { CassetteAudioPlayer } from "@/components/interactive/CassetteAudioPlayer";
import { DispatchGallery } from "@/components/dispatch/DispatchGallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustLedger />
      <CatalogSection />
      <CrystalVisualizer />
      <CassetteAudioPlayer />
      <DispatchGallery />
    </div>
  );
}
