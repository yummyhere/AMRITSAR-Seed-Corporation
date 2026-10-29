import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Tractor, UserCheck, Scale, Clock } from 'lucide-react';
import { GoldWavyRibbon } from './OrganicDecoration.tsx';
import { GrowerSectionLeftWing, GrowerSectionRightWing } from './EdgeDecorations.tsx';

interface GrowerSectionProps {
  onJoinGrowerNetwork: () => void;
}

export const GrowerSection: React.FC<GrowerSectionProps> = ({
  onJoinGrowerNetwork,
}) => {
  const benefits = [
    {
      title: 'Contract Farming',
      desc: 'Guaranteed buy-back agreements and transparent contracts.',
      icon: <Tractor className="w-5 h-5 text-[#203D2F]" />,
    },
    {
      title: 'Expert Guidance',
      desc: 'Agronomists provide on-site soil testing and pest management.',
      icon: <UserCheck className="w-5 h-5 text-[#203D2F]" />,
    },
    {
      title: 'Fair Pricing',
      desc: 'Competitive rates and dependable cash settlements.',
      icon: <Scale className="w-5 h-5 text-[#203D2F]" />,
    },
    {
      title: 'Timely Support',
      desc: 'Dedicated field representatives reachable 7 days a week.',
      icon: <Clock className="w-5 h-5 text-[#203D2F]" />,
    },
  ];

  return (
    <section
      id="grower-network"
      className="relative py-16 sm:py-24 bg-[#F8F4E9] overflow-hidden"
    >
      {/* Full-Bleed Organic Edge Wings */}
      <GrowerSectionLeftWing />
      <GrowerSectionRightWing />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Three-Part Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Part 1 (Left): Farmer in Field Photograph inside Organic Shape (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '250px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              
              {/* Botanical sprout drawing floating top-left */}
              <div className="absolute -top-6 -left-3 text-[#203D2F] pointer-events-none">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <path d="M12 36 C16 26 22 18 32 10" stroke="#203D2F" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M18 24 C14 22 12 18 16 16 C20 16 21 21 18 24 Z" fill="#C7D1AF" stroke="#203D2F" strokeWidth="1" />
                  <path d="M26 16 C23 13 22 9 26 7 C29 8 30 13 26 16 Z" fill="#DDE5CE" stroke="#203D2F" strokeWidth="1" />
                </svg>
              </div>

              {/* Masked Farmer Photo */}
              <div
                className="relative overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  borderRadius: '46% 54% 48% 52% / 54% 46% 54% 46%',
                }}
              >
                <img
                  src="/images/grower-farmer-ref.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('grower-farmer.jpg') === -1) {
                      target.src = '/images/grower-farmer.jpg';
                    }
                  }}
                  alt="Farmer inspecting thriving green seed crop field in Rahim Yar Khan"
                  className="w-full h-[260px] sm:h-[300px] object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#203D2F]/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating gold dot and sage pebble */}
              <div className="absolute top-1/2 -right-3 w-5 h-5 rounded-full bg-[#E6B04F] shadow-sm animate-float pointer-events-none" />
              <div className="absolute -bottom-3 left-10 w-4 h-4 rounded-full bg-[#C7D1AF] pointer-events-none" />
            </div>
          </motion.div>

          {/* Part 2 (Center): Clean Text & CTA without Abstract Blob Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '250px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="w-full max-w-md py-4 text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-[#1F382B] leading-tight">
                Grow With Us
              </h2>

              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#3C5749] leading-relaxed font-sans">
                Join our contract grower program and get access to quality seeds, expert guidance and better opportunities.
              </p>

              <div className="mt-7 sm:mt-8">
                <button
                  type="button"
                  onClick={onJoinGrowerNetwork}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#203D2F] hover:bg-[#162C22] text-[#F8F4E9] font-semibold text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
                >
                  <span>Join the Grower Network</span>
                  <ArrowRight className="w-4 h-4 text-[#E6B04F] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Part 3 (Right): Contract Farming Benefits List (3-4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '250px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative flex flex-col justify-center space-y-5"
          >
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-4 group p-2 rounded-xl transition-all hover:bg-[#E3EBDB]/40"
              >
                <div className="w-10 h-10 rounded-full bg-[#F8F4E9] border border-[#203D2F]/20 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:bg-[#203D2F] group-hover:border-[#203D2F] transition-colors">
                  <span className="group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-sm sm:text-base text-[#1F382B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#536B5E] hidden sm:block">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Decorative Gold Wavy Ribbon & Soft Leaf */}
            <div className="pt-2 relative flex items-center justify-between">
              <GoldWavyRibbon className="w-24 h-8 text-[#E6B04F]" />
              <div className="w-8 h-10 bg-[#C7D1AF]/60 rounded-[50%_50%_0%_50%] transform rotate-12" />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
