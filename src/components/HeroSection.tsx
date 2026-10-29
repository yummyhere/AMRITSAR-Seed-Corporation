import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import {
  BotanicalSprigLeft,
  CurvedHandwrittenArrow,
  EdgeWaveTopLeft,
  EdgeWaveTopRight
} from './OrganicDecoration.tsx';
import { HeroLeftEdgeWing, HeroRightEdgeWing } from './EdgeDecorations.tsx';

interface HeroSectionProps {
  onExploreSeeds: () => void;
  onBecomeGrower: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSeeds,
  onBecomeGrower,
}) => {
  return (
    <section
      id="home"
      className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-[#F8F4E9]"
    >
      {/* Full-Bleed Organic Edge Wings */}
      <HeroLeftEdgeWing />
      <HeroRightEdgeWing />

      {/* Abstract Organic Edge Designs on Viewport Edges */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 h-24 sm:h-36 z-0 pointer-events-none opacity-75">
        <EdgeWaveTopLeft className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-40 sm:w-56 h-28 sm:h-44 z-0 pointer-events-none opacity-60">
        <EdgeWaveTopRight className="w-full h-full" />
      </div>

      {/* Background Decorative Soft Blur Tints */}
      <div className="absolute top-12 left-1/4 w-72 h-72 rounded-full bg-[#E3EBDB]/40 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#F5E6C6]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative z-10"
          >
            
            {/* Small Left Botanical Sprig */}
            <div className="hidden sm:block absolute -left-12 top-28 pointer-events-none">
              <BotanicalSprigLeft className="w-12 h-24 text-[#203D2F] opacity-90 animate-sway" />
            </div>

            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE5CE] border border-[#E6B04F]/30 text-[#84601A] text-xs sm:text-sm font-medium tracking-wide shadow-xs mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6B04F]" />
              Quality Seeds for a Brighter Future
            </motion.div>

            {/* Main Editorial Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-[4.2rem] font-bold text-[#1F382B] leading-[1.08] tracking-tight">
              Better Seeds.
              <br />
              Stronger{' '}
              <span className="font-handwriting text-5xl sm:text-7xl md:text-[5.2rem] text-[#E6B04F] font-normal inline-block -rotate-2 ml-1">
                Harvests.
              </span>
            </h1>

            {/* Sub-headline description */}
            <p className="mt-6 text-base sm:text-lg text-[#3C5749] leading-relaxed max-w-xl font-sans">
              Amritsar Seed Corporation provides high-quality seeds for cotton,
              rice, corn and fodder, supporting farmers and building a stronger
              agricultural future.
            </p>

            {/* Two Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreSeeds}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#203D2F] hover:bg-[#162C22] text-[#F8F4E9] font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
              >
                <span>Explore Our Seeds</span>
                <ArrowRight className="w-4 h-4 text-[#E6B04F] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onBecomeGrower}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#203D2F] text-[#203D2F] hover:bg-[#203D2F] hover:text-[#F8F4E9] font-medium text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
              >
                Become a Grower
              </button>
            </div>

            {/* Subtle organic pebble accents */}
            <div className="mt-8 flex items-center gap-3 opacity-60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E6B04F]" />
              <span className="w-3.5 h-2 rounded-full bg-[#C7D1AF]" />
              <span className="w-2 h-2 rounded-full bg-[#203D2F]" />
            </div>
          </motion.div>

          {/* Right Column: Hero Farmer Image inside Organic Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0"
          >
            
            {/* Handwritten Top-Right Callout with Curved Arrow */}
            <div className="absolute -top-6 right-4 sm:right-10 z-20 flex flex-col items-end pointer-events-none">
              <div className="font-handwriting text-2xl sm:text-3xl text-[#9A7426] font-semibold tracking-wide leading-tight text-right rotate-2">
                From Better Seeds
                <br />
                to Brighter Futures
              </div>
              <div className="mr-6 -mt-1">
                <CurvedHandwrittenArrow className="w-7 h-9 text-[#9A7426]" />
              </div>
            </div>

            {/* Floating Organic Decorative Blobs Behind Image */}
            <div className="absolute -inset-4 bg-[#E3EBDB]/70 rounded-[55%_45%_65%_35%/48%_58%_42%_52%] blur-sm -z-10 transform scale-105" />
            <div className="absolute -bottom-6 -left-6 w-16 h-12 rounded-full bg-[#203D2F]/20 blur-md pointer-events-none" />

            {/* Organic Asymmetrical Masked Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div
                className="relative overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.015]"
                style={{
                  borderRadius: '54% 46% 42% 58% / 60% 40% 60% 40%',
                }}
              >
                {/* Farmer Image matching reference */}
                <img
                  src="/images/hero-farmer-clean.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('hero-farmer-ref.jpg') === -1) {
                      target.src = '/images/hero-farmer-ref.jpg';
                    }
                  }}
                  alt="Pakistani farmer in a lush sunlit cotton field holding certified crops"
                  className="w-full h-[360px] sm:h-[450px] lg:h-[470px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle warm sunlight tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#203D2F]/15 via-transparent to-[#E6B04F]/10 pointer-events-none" />
              </div>

              {/* Floating gold dot and sage organic pebble */}
              <div className="absolute -bottom-3 -right-2 w-8 h-8 rounded-full bg-[#E6B04F] shadow-md animate-float pointer-events-none" />
              <div className="absolute bottom-8 -left-4 w-5 h-5 rounded-full bg-[#203D2F] shadow-sm pointer-events-none" />
              <div className="absolute -bottom-4 left-1/3 w-10 h-6 rounded-[50%] bg-[#C7D1AF] pointer-events-none" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
