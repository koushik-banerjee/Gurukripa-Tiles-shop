import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeBand } from "@/components/home/MarqueeBand";

import { StatsSection } from "@/components/home/StatsSection";
import { WhySection } from "@/components/home/WhySection";
import { TileGallery } from "@/components/home/TileGallery";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <MarqueeBand />

      <StatsSection />
      <WhySection />
      <TileGallery />
      <CTASection />
    </div>
  );
}
