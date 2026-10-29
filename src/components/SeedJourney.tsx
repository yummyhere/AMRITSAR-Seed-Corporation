import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Settings, FlaskConical, Package, CheckCircle2 } from 'lucide-react';
import { JOURNEY_STEPS, JourneyStep } from '../utils/seedData.ts';
import { SeedJourneyLeftWing, SeedJourneyRightWing } from './EdgeDecorations.tsx';
import { RotatingProcessWheel } from './RotatingProcessWheel.tsx';

interface SeedJourneyProps {
  onLearnMore?: () => void;
}

export const SeedJourney: React.FC<SeedJourneyProps> = ({ onLearnMore }) => {
  const [selectedStep, setSelectedStep] = useState<JourneyStep | null>(null);

  const getStepIcon = (icon: JourneyStep['icon']) => {
    switch (icon) {
      case 'leaf':
        return <Leaf className="w-5 h-5 text-[#203D2F]" />;
      case 'gear':
        return <Settings className="w-5 h-5 text-[#84601A]" />;
      case 'flask':
        return <FlaskConical className="w-5 h-5 text-[#203D2F]" />;
      case 'package':
        return <Package className="w-5 h-5 text-[#84601A]" />;
    }
  };

  return (
    <section
      id="seed-journey"
      className="relative py-16 sm:py-24 bg-[#F8F4E9] overflow-hidden border-t border-[#203D2F]/5"
    >
      {/* Full-Bleed Organic Edge Wings */}
      <SeedJourneyLeftWing />
      <SeedJourneyRightWing />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & 4 Steps (6-7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '250px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F382B] leading-tight">
              Our Seed Journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#466050] max-w-lg font-sans">
              From carefully selected parent seeds to premium quality, every step ensures excellence.
            </p>

            <button
              type="button"
              onClick={onLearnMore}
              className="group inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#203D2F] hover:text-[#E6B04F] transition-colors py-1 mb-10"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* 4 Connected Process Steps with Arrows */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 items-start relative">
              {JOURNEY_STEPS.map((step, idx) => (
                <div key={step.step} className="flex items-center">
                  
                  {/* Step Item */}
                  <div
                    onClick={() => setSelectedStep(step)}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer group flex-1"
                    role="button"
                    tabIndex={0}
                    aria-label={`Step ${step.step}: ${step.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedStep(step);
                      }
                    }}
                  >
                    {/* Pebble Icon Container */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-xs mb-3 ${
                        step.bgTone === 'sage'
                          ? 'bg-[#C7D1AF]/70 group-hover:bg-[#C7D1AF]'
                          : 'bg-[#F7E5BD] group-hover:bg-[#F2DCA7]'
                      }`}
                      style={{
                        borderRadius:
                          idx % 2 === 0
                            ? '56% 44% 54% 46% / 46% 54% 46% 54%'
                            : '48% 52% 44% 56% / 54% 46% 54% 46%',
                      }}
                    >
                      {getStepIcon(step.icon)}
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sans font-bold text-sm text-[#1F382B] group-hover:text-[#E6B04F] transition-colors">
                      {step.step}. {step.title}
                    </h3>

                    {/* Step Subtitle */}
                    <p className="text-xs text-[#536B5E] mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Connecting Arrow between steps (only for desktop between columns) */}
                  {idx < JOURNEY_STEPS.length - 1 && (
                    <div className="hidden sm:flex items-center justify-center px-1 text-[#203D2F]/40 -mt-8">
                      <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* Interactive Step Details Card (reveals on click) */}
            {selectedStep && (
              <div className="mt-8 p-5 bg-[#E3EBDB]/90 rounded-2xl border border-[#203D2F]/10 transition-all duration-300 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#203D2F]">
                    Step {selectedStep.step} Details: {selectedStep.title}
                  </span>
                  <button
                    onClick={() => setSelectedStep(null)}
                    className="text-xs text-[#536B5E] hover:text-[#1F382B] font-semibold"
                  >
                    Close
                  </button>
                </div>
                <p className="mt-2 text-sm text-[#203D2F]/90">
                  {selectedStep.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedStep.details.map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-xs font-medium text-[#203D2F]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#203D2F]" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </motion.div>

          {/* Right Column: 4-Stage Rotating Process Wheel with Stationary Center Leaf */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '250px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center py-4"
          >
            <RotatingProcessWheel
              activeStepNumber={selectedStep?.step}
              onSelectStepNumber={(num) => {
                const targetStep = JOURNEY_STEPS.find((s) => s.step === num);
                if (targetStep) {
                  setSelectedStep(targetStep);
                }
              }}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
