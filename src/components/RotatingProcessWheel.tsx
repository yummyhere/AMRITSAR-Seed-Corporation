import React from 'react';

interface RotatingProcessWheelProps {
  onSelectStepNumber?: (step: number) => void;
  activeStepNumber?: number | null;
}

export const RotatingProcessWheel: React.FC<RotatingProcessWheelProps> = () => {
  return (
    <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[490px] w-full flex flex-col items-center">
      
      {/* Ambient Organic Backdrop Glows */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C7D1AF]/35 via-[#F5E6C6]/30 to-[#E3EBDB]/40 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Main Wheel Container */}
      <div
        className="group relative w-full aspect-square rounded-full p-2 sm:p-2.5 bg-[#FAF7F0] border border-[#203D2F]/15 shadow-xl transition-all duration-300"
      >
        {/* Subtle Outer Delicate Dotted Gold Ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-[#E6B04F]/50 pointer-events-none" />

        {/* 1. ROTATING OUTER WHEEL (Image with 4 stages, numbers & process photography) */}
        <div
          className="w-full h-full rounded-full overflow-hidden shadow-inner animate-spin-wheel"
          style={{
            willChange: 'transform',
          }}
        >
          <img
            src="/assets/aistudio/image_3e78440d.png"
            alt="Amritsar Seed Corporation 4-Stage Quality Process: Selection, Processing, Testing, Packaging"
            className="w-full h-full object-cover rounded-full select-none pointer-events-none"
            loading="eager"
          />
        </div>

        {/* 2. STATIONARY CENTER LEAF BADGE (Remains fixed at 0deg rotation while edges rotate) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 m-auto w-[33%] h-[33%] rounded-full bg-[#F7F5EE] border-[2.5px] border-[#334F3A] shadow-md flex items-center justify-center z-20 pointer-events-none select-none transition-transform duration-300 group-hover:scale-105"
        >
          {/* Inner decorative subtle ring */}
          <div className="absolute inset-[3px] rounded-full border border-[#334F3A]/20 pointer-events-none" />

          {/* Clean Vector 3-Leaf Sprout (matching the reference wheel) */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[58%] h-[58%] text-[#334F3A]"
          >
            {/* Center vertical leaf */}
            <path
              d="M50 18 C50 18 59 34 50 51 C48 49 46 49 50 51 C41 34 50 18 50 18 Z"
              fill="#334F3A"
            />
            {/* Center leaf delicate vein line */}
            <path
              d="M50 24 L50 49"
              stroke="#F7F5EE"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Left curved leaf */}
            <path
              d="M50 51 C44 53 23 53 23 39 C23 27 43 41 50 51 Z"
              fill="#334F3A"
            />

            {/* Right curved leaf */}
            <path
              d="M50 51 C56 53 77 53 77 39 C77 27 57 41 50 51 Z"
              fill="#334F3A"
            />

            {/* Tiny lower stem join */}
            <path
              d="M50 50 L50 53"
              stroke="#334F3A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Subtle interactive hover highlight ring */}
        <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#E6B04F]/40 transition-colors pointer-events-none" />
      </div>
    </div>
  );
};
