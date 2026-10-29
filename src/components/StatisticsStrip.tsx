import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Sprout, ShieldCheck } from 'lucide-react';
import { COMPANY_STATS } from '../utils/seedData.ts';
import { BotanicalSprigLeft } from './OrganicDecoration.tsx';

export const StatisticsStrip: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Award className="w-5 h-5 text-[#203D2F]" />;
      case 'growers':
        return <Users className="w-5 h-5 text-[#203D2F]" />;
      case 'leaf':
        return <Sprout className="w-5 h-5 text-[#203D2F]" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#203D2F]" />;
      default:
        return <Sprout className="w-5 h-5 text-[#203D2F]" />;
    }
  };

  return (
    <section
      id="about"
      className="relative w-full py-12 sm:py-16 bg-[#DEE7CF]/80 border-y border-[#203D2F]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Decorative Botanical Branch */}
          <div className="hidden xl:block flex-shrink-0 -ml-2 pointer-events-none">
            <BotanicalSprigLeft className="w-10 h-16 text-[#203D2F] opacity-75" />
          </div>

          {/* 4 Compact Stat Information Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 flex-grow w-full">
            {COMPANY_STATS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '250px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-3.5 sm:gap-4 ${
                  idx < COMPANY_STATS.length - 1 ? 'md:border-r md:border-[#203D2F]/15 md:pr-4' : ''
                }`}
              >
                {/* Minimal line icon in subtle container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F8F4E9]/80 border border-[#203D2F]/15 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  {getStatIcon(stat.icon)}
                </div>

                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1F382B] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#466050] mt-1 font-sans">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Floating Dark Green Organic Badge with Handwritten Script */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '250px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            <div
              className="bg-[#203D2F] text-[#F8F4E9] px-7 py-5 sm:px-8 sm:py-6 shadow-xl flex items-center justify-center relative transition-transform duration-300 hover:scale-105"
              style={{
                borderRadius: '62% 38% 58% 42% / 46% 58% 42% 54%',
              }}
            >
              <div className="text-center">
                <p className="font-handwriting text-2xl sm:text-3xl text-[#E6B04F] font-semibold leading-tight">
                  Sowing
                  <br />
                  a better
                  <br />
                  tomorrow
                </p>
                <div className="flex justify-center mt-1 text-[#C7D1AF]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#C7D1AF]">
                    <path d="M12 20 C12 14 14 10 18 6" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M13 13 C11 11 8 12 8 15 C10 17 12 15 13 13 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Small pebble nearby */}
            <div className="absolute -bottom-2 -left-3 w-4 h-4 rounded-full bg-[#3C5749]" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

