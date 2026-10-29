import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CROPS_DATA, CropItem } from '../utils/seedData.ts';
import { CropLineIcon } from './OrganicDecoration.tsx';
import { CropPortfolioLeftWing, CropPortfolioRightWing } from './EdgeDecorations.tsx';

interface CropPortfolioProps {
  onSelectCrop: (crop: CropItem) => void;
  onExploreAll: () => void;
}

export const CropPortfolio: React.FC<CropPortfolioProps> = ({
  onSelectCrop,
  onExploreAll,
}) => {
  // Different organic border radius for each individual crop as requested
  const getCropMaskRadius = (cropId: string) => {
    switch (cropId) {
      case 'cotton':
        return '56% 44% 52% 48% / 46% 54% 46% 54%';
      case 'rice':
        return '44% 56% 58% 42% / 54% 42% 58% 46%';
      case 'corn':
        return '48% 52% 44% 56% / 58% 48% 52% 42%';
      case 'fodder':
        return '54% 46% 48% 52% / 44% 56% 44% 56%';
      default:
        return '50%';
    }
  };

  return (
    <section
      id="portfolio"
      className="relative py-16 sm:py-24 bg-[#F8F4E9] overflow-hidden"
    >
      {/* Full-Bleed Organic Edge Wings */}
      <CropPortfolioLeftWing />
      <CropPortfolioRightWing />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl relative">
            {/* Delicate leaf sprig perched right above the 'O' in Our Crop Portfolio */}
            <div className="relative inline-block">
              <span className="absolute -top-4 -left-1 text-[#203D2F]">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[#203D2F]">
                  <path d="M6 18 C8 12 11 7 16 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8 12 C5 10 3 12 4 14 C6 16 8 14 8 12 Z" fill="#C7D1AF" stroke="currentColor" strokeWidth="1" />
                  <path d="M11 8 C13 6 15 8 14 10 C12 11 11 9 11 8 Z" fill="#DDE5CE" stroke="currentColor" strokeWidth="1" />
                </svg>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F382B] leading-tight">
                Our Crop Portfolio
              </h2>
            </div>
            
            <p className="mt-3 text-sm sm:text-base text-[#466050] font-sans">
              Premium quality seeds for a wide range of crops.
              <br className="hidden sm:inline" />
              Built for higher yield, better quality and a stronger tomorrow.
            </p>
          </div>

          {/* Explore All Link */}
          <button
            type="button"
            onClick={onExploreAll}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#203D2F] hover:text-[#E6B04F] transition-colors py-1"
          >
            <span>Explore All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5-Column Grid: 4 Crop Cards + 1 Decorative Seed Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
          
          {/* 4 Crop Cards (8 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CROPS_DATA.map((crop, idx) => (
              <motion.div
                key={crop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '250px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectCrop(crop)}
                className="group cursor-pointer flex flex-col transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCrop(crop);
                  }
                }}
                aria-label={`View details for ${crop.name} seeds`}
              >
                {/* Organic Masked Crop Image Container */}
                <div className="relative mb-5 mx-auto w-full max-w-[210px] sm:max-w-none aspect-[4/3] flex items-center justify-center">
                  
                  {/* Subtle pale sage backdrop glow blob */}
                  <div
                    className="absolute inset-0 bg-[#E3EBDB]/80 -z-10 transform scale-105 transition-transform duration-500 group-hover:scale-110"
                    style={{ borderRadius: getCropMaskRadius(crop.id) }}
                  />

                  {/* Masked Photo */}
                  <div
                    className="w-full h-full overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-md"
                    style={{ borderRadius: getCropMaskRadius(crop.id) }}
                  >
                    <img
                      src={crop.image}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.indexOf(crop.fallbackImage) === -1) {
                          target.src = crop.fallbackImage;
                        }
                      }}
                      alt={`${crop.name} crop photograph`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Botanical Icon */}
                <div className="text-[#203D2F] mb-2 transition-transform duration-300 group-hover:scale-110">
                  <CropLineIcon name={crop.iconName} className="w-6 h-6 text-[#203D2F]" />
                </div>

                {/* Crop Name */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F382B] group-hover:text-[#E6B04F] transition-colors">
                  {crop.name}
                </h3>

                {/* Short Description */}
                <p className="mt-1 text-xs sm:text-[13px] text-[#536B5E] leading-relaxed flex-grow">
                  {crop.tagline}
                </p>

                {/* Interactive Arrow Circle */}
                <div className="mt-4 flex items-center justify-start">
                  <div className="w-8 h-8 rounded-full border border-[#203D2F]/25 flex items-center justify-center text-[#203D2F] group-hover:border-[#203D2F] group-hover:bg-[#203D2F] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Decorative Seed Card with Cupped Hands & Handwritten Accent (3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '250px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-2 lg:col-span-3 relative flex flex-col items-center lg:items-end mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px]">
              
              {/* Botanical leaves floating top right */}
              <div className="absolute -top-6 -right-3 text-[#203D2F] pointer-events-none">
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                  <path d="M12 26 C16 18 22 14 28 10" stroke="#203D2F" strokeWidth="1.5" />
                  <path d="M22 13 C26 12 28 15 26 18 C23 18 21 16 22 13 Z" fill="#C7D1AF" stroke="#203D2F" strokeWidth="1" />
                  <path d="M16 19 C18 17 21 18 20 21 C18 22 16 21 16 19 Z" fill="#CCD7B8" stroke="#203D2F" strokeWidth="1" />
                </svg>
              </div>

              {/* Vertical Organic Capsule Image */}
              <div
                className="relative overflow-hidden shadow-lg w-full h-[320px] sm:h-[350px] transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  borderRadius: '70px 70px 85px 85px',
                }}
              >
                <img
                  src="/images/seeds-cupped-clean.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('seeds-cupped.jpg') === -1) {
                      target.src = '/images/seeds-cupped.jpg';
                    }
                  }}
                  alt="Farmer hands cupping certified golden grains and seeds"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#203D2F]/30 to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Pale-Sage Organic Bubble with Handwritten Accent */}
              <div
                className="absolute -bottom-6 -right-4 sm:-right-6 w-44 sm:w-48 p-4 bg-[#C7D1AF]/90 backdrop-blur-xs text-[#203D2F] shadow-md transition-transform duration-300 hover:scale-105 pointer-events-auto"
                style={{
                  borderRadius: '52% 48% 62% 38% / 46% 54% 46% 54%',
                }}
              >
                <p className="font-handwriting text-2xl sm:text-[1.7rem] text-[#1F382B] leading-tight text-center font-bold">
                  Quality
                  <br />
                  that grows
                  <br />
                  with you
                </p>
                <div className="flex justify-center mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#203D2F]">
                    <path d="M12 20 C12 14 14 10 18 6" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M13 13 C11 11 8 12 8 15 C10 17 12 15 13 13 Z" fill="#E3EBDB" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* Botanical leaves floating bottom left */}
              <div className="absolute -bottom-10 left-2 text-[#203D2F] pointer-events-none">
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                  <path d="M10 24 C14 18 18 12 24 8" stroke="#203D2F" strokeWidth="1.5" />
                  <path d="M14 18 C11 16 10 13 13 11 C16 11 16 15 14 18 Z" fill="#203D2F" />
                  <path d="M19 13 C17 10 18 7 21 7 C23 9 22 12 19 13 Z" fill="#203D2F" />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
