/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { MovingMarquee } from './components/MovingMarquee.tsx';
import { CropPortfolio } from './components/CropPortfolio.tsx';
import { SeedJourney } from './components/SeedJourney.tsx';
import { GrowerSection } from './components/GrowerSection.tsx';
import { StatisticsStrip } from './components/StatisticsStrip.tsx';
import { Footer } from './components/Footer.tsx';
import { GrowerModal } from './components/GrowerModal.tsx';
import { CropModal } from './components/CropModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { ScrollRevealSection } from './components/ScrollRevealSection.tsx';
import {
  TopLeftHeroCorner,
  TopRightHeroCorner,
} from './components/EdgeDecorations.tsx';
import { CropItem } from './utils/seedData.ts';

export default function App() {
  const [selectedCrop, setSelectedCrop] = useState<CropItem | null>(null);
  const [isGrowerModalOpen, setIsGrowerModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [targetCropForGrower, setTargetCropForGrower] = useState('Cotton');

  const handleExploreSeeds = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBecomeGrower = () => {
    setTargetCropForGrower('Cotton');
    setIsGrowerModalOpen(true);
  };

  const handleSelectCrop = (crop: CropItem) => {
    setSelectedCrop(crop);
  };

  const handleExploreAll = () => {
    setIsSearchModalOpen(true);
  };

  const handleGrowerFromCrop = (cropName: string) => {
    setTargetCropForGrower(cropName);
    setIsGrowerModalOpen(true);
  };

  const handleLearnMoreJourney = () => {
    const journeyEl = document.getElementById('seed-journey');
    if (journeyEl) {
      journeyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4E9] text-[#1F382B] flex flex-col font-sans selection:bg-[#C7D1AF] selection:text-[#162C22] relative overflow-x-hidden">
      
      {/* Full-Bleed Abstract Organic Corner Edge Decorations */}
      <TopLeftHeroCorner />
      <TopRightHeroCorner />

      {/* 1. Header with Brand, Navigation & Call/WhatsApp CTA */}
      <Header
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenGrowerModal={handleBecomeGrower}
      />

      {/* Main Content Sections with Intersection Observer Reveal Logic */}
      <main className="flex-grow">
        
        {/* 2. Hero Section: Editorial typography, gold cursive Harvests, organic farmer mask */}
        <ScrollRevealSection threshold={0.05} delay={50} as="section">
          <HeroSection
            onExploreSeeds={handleExploreSeeds}
            onBecomeGrower={handleBecomeGrower}
          />
        </ScrollRevealSection>

        {/* 3. Moving Text Marquee: Seamless looping forest-green bar with botanical separators */}
        <ScrollRevealSection threshold={0.1} delay={100} as="div">
          <MovingMarquee />
        </ScrollRevealSection>

        {/* 4. Crop Portfolio: 4 Crops (Cotton, Rice, Corn, Fodder) + Cupped seeds showcase */}
        <ScrollRevealSection id="portfolio" threshold={0.12} delay={120} as="section">
          <CropPortfolio
            onSelectCrop={handleSelectCrop}
            onExploreAll={handleExploreAll}
          />
        </ScrollRevealSection>

        {/* 5. Seed Journey: 4 Connected steps (Selection, Processing, Testing, Packaging) + Processing facility */}
        <ScrollRevealSection id="seed-journey" threshold={0.12} delay={120} as="section">
          <SeedJourney onLearnMore={handleLearnMoreJourney} />
        </ScrollRevealSection>

        {/* 6. Grower Section: 3-part layout (Farmer mask, pale sage center card, contract farming benefits) */}
        <ScrollRevealSection id="grower-network" threshold={0.12} delay={120} as="section">
          <GrowerSection onJoinGrowerNetwork={handleBecomeGrower} />
        </ScrollRevealSection>

        {/* 7. Statistics Strip: Soft sage ribbon with 4 verified company stats + "Sowing a better tomorrow" badge */}
        <ScrollRevealSection id="about" threshold={0.12} delay={120} as="section">
          <StatisticsStrip />
        </ScrollRevealSection>

      </main>

      {/* 8. Footer: Deep forest-green with corporate info, links, address, numbers, and gold botanical outline */}
      <Footer />

      {/* Interactive Modals */}
      <CropModal
        crop={selectedCrop}
        onClose={() => setSelectedCrop(null)}
        onRequestQuote={handleGrowerFromCrop}
      />

      <GrowerModal
        isOpen={isGrowerModalOpen}
        onClose={() => setIsGrowerModalOpen(false)}
        initialCrop={targetCropForGrower}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCrop={handleSelectCrop}
        onOpenGrowerModal={handleBecomeGrower}
      />

    </div>
  );
}
