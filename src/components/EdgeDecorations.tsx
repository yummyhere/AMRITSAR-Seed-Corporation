import React from 'react';
import { motion } from 'motion/react';

/**
 * Full-Bleed Organic Edge Decorations for Amritsar Seed Corporation
 * Responsive, high-fidelity botanical illustrations and organic contour waves
 * that fill the left and right margins across mobile, tablet, desktop, and ultra-wide viewports.
 * Features scroll-triggered slide-in animations and continuous gentle floating motion.
 */

// --- TOP CORNERS (HERO) ---

export const TopLeftHeroCorner: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -60, y: -40 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="absolute top-0 left-0 z-20 pointer-events-none select-none"
  >
    <svg
      viewBox="0 0 420 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-64 sm:w-80 md:w-96 lg:w-[460px] xl:w-[520px] h-auto drop-shadow-xs"
    >
      {/* Outer Sage Green organic wave */}
      <path
        d="M0 0 L360 0 C330 90, 280 180, 180 235 C95 285, 40 300, 0 320 Z"
        fill="#C7D1AF"
        fillOpacity="0.75"
      />
      {/* Deep Forest Green primary organic wave */}
      <path
        d="M0 0 L280 0 C250 70, 205 140, 130 185 C65 220, 20 240, 0 255 Z"
        fill="#203D2F"
      />
      {/* Delicate Harvest Gold Dotted Contour Line */}
      <path
        d="M0 270 C50 255, 120 220, 185 175 C250 125, 300 65, 330 0"
        stroke="#E6B04F"
        strokeWidth="2.4"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      {/* Inner topographic contour line */}
      <path
        d="M0 200 C35 185, 90 155, 140 120 C190 85, 230 40, 250 0"
        stroke="#F8F4E9"
        strokeWidth="1.4"
        strokeDasharray="3 5"
        opacity="0.35"
      />
      {/* Floating Gold & Sage Spores */}
      <circle cx="210" cy="205" r="5.5" fill="#E6B04F" />
      <circle cx="310" cy="105" r="4" fill="#CCD7B8" />
      <circle cx="160" cy="260" r="3.5" fill="#203D2F" opacity="0.6" />
    </svg>
  </motion.div>
);

export const TopRightHeroCorner: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 60, y: -40 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="absolute top-0 right-0 z-10 pointer-events-none select-none"
  >
    <svg
      viewBox="0 0 380 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-56 sm:w-72 md:w-88 lg:w-[420px] xl:w-[460px] h-auto"
    >
      {/* Pale warm sand organic contour */}
      <path
        d="M380 0 L110 0 C175 75, 245 145, 305 190 C340 215, 365 230, 380 245 Z"
        fill="#F0E3C2"
        fillOpacity="0.85"
      />
      {/* Harvest Gold organic wave */}
      <path
        d="M380 0 L185 0 C235 65, 290 125, 335 155 C355 170, 370 180, 380 190 Z"
        fill="#E6B04F"
        fillOpacity="0.45"
      />
      {/* Topographic line */}
      <path
        d="M380 0 L80 0 C150 80, 225 160, 290 210 C330 240, 360 255, 380 270"
        stroke="#203D2F"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.18"
      />
      {/* Floating organic spores */}
      <circle cx="140" cy="60" r="5.5" fill="#E6B04F" fillOpacity="0.85" />
      <circle cx="225" cy="150" r="6.5" fill="#C7D1AF" />
      <circle cx="285" cy="205" r="4.5" fill="#203D2F" fillOpacity="0.35" />
    </svg>
  </motion.div>
);

// --- HERO SECTION SIDE WINGS ---

export const HeroLeftEdgeWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="absolute left-0 top-36 sm:top-48 bottom-0 w-28 sm:w-36 md:w-48 lg:w-64 xl:w-80 pointer-events-none select-none z-10"
  >
    {/* Botanical Olive / Cotton Stem Reaching Inward */}
    <div className="absolute top-12 left-0 sm:left-2 flex items-center">
      <svg
        viewBox="0 0 160 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 sm:w-36 md:w-44 lg:w-56 h-auto text-[#203D2F]"
      >
        {/* Main curved branch stem */}
        <path
          d="M0 290 C30 250, 60 180, 50 100 C45 60, 30 25, 10 0"
          stroke="#203D2F"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Leaf 1 (Sage) */}
        <path
          d="M32 230 C55 210, 75 220, 68 235 C60 245, 42 245, 32 230 Z"
          fill="#C7D1AF"
          stroke="#203D2F"
          strokeWidth="1.4"
        />
        {/* Leaf 2 (Forest) */}
        <path
          d="M48 180 C78 165, 95 180, 88 195 C80 205, 60 200, 48 180 Z"
          fill="#203D2F"
        />
        {/* Leaf 3 (Pale Sage) */}
        <path
          d="M52 130 C80 115, 95 125, 90 140 C82 150, 65 145, 52 130 Z"
          fill="#DDE5CE"
          stroke="#203D2F"
          strokeWidth="1.4"
        />
        {/* Leaf 4 (Sage) */}
        <path
          d="M45 80 C68 65, 82 72, 78 85 C72 95, 58 92, 45 80 Z"
          fill="#C7D1AF"
          stroke="#203D2F"
          strokeWidth="1.4"
        />
        {/* Small bud */}
        <circle cx="85" cy="188" r="3.5" fill="#E6B04F" />
      </svg>
    </div>

    {/* Floating Gold & Green Seed Spores */}
    <div className="absolute top-64 left-10 flex flex-col gap-3 animate-float">
      <div className="w-3.5 h-3.5 rounded-full bg-[#E6B04F] shadow-xs" />
      <div className="w-5 h-3 rounded-[50%] bg-[#C7D1AF] transform rotate-12" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#203D2F] opacity-70" />
    </div>
  </motion.div>
);

export const HeroRightEdgeWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
    className="absolute right-0 top-36 sm:top-48 bottom-0 w-28 sm:w-36 md:w-48 lg:w-64 xl:w-80 pointer-events-none select-none z-10"
  >
    {/* Floating Gold Pebble Cluster & Wavy Contour */}
    <div className="absolute top-16 right-0 sm:right-4 flex flex-col items-end gap-3.5">
      <svg viewBox="0 0 140 240" fill="none" className="w-28 sm:w-36 md:w-48 h-auto">
        <path
          d="M140 10 C90 45, 60 115, 85 180 C105 220, 125 235, 140 240"
          stroke="#E6B04F"
          strokeWidth="2"
          strokeDasharray="4 6"
          opacity="0.45"
        />
        <circle cx="85" cy="115" r="6" fill="#E6B04F" />
        <circle cx="110" cy="180" r="5" fill="#C7D1AF" />
      </svg>
      <div className="w-4 h-4 rounded-full bg-[#E6B04F] shadow-sm animate-float" />
      <div className="w-3 h-3 rounded-full bg-[#203D2F] opacity-60" />
      <div className="w-7 h-4 rounded-[50%] bg-[#C7D1AF] -rotate-12" />
    </div>
  </motion.div>
);

// --- CROP PORTFOLIO SECTION SIDE WINGS ---

export const CropPortfolioLeftWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute left-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-72 xl:w-88 2xl:w-[400px] pointer-events-none select-none z-10 overflow-hidden"
  >
    <svg
      viewBox="0 0 240 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto min-h-[420px]"
    >
      {/* Organic Wave Protruding from Left Edge */}
      <path
        d="M0 60 C90 90, 140 180, 95 280 C60 350, 20 400, 0 440 Z"
        fill="#DDE5CE"
        fillOpacity="0.75"
      />
      {/* Secondary Sage Wave */}
      <path
        d="M0 110 C60 135, 100 200, 70 270 C45 320, 15 355, 0 380 Z"
        fill="#C7D1AF"
        fillOpacity="0.65"
      />
      {/* Topographic Contour Line */}
      <path
        d="M0 80 C110 120, 160 215, 110 315 C70 380, 25 425, 0 460"
        stroke="#203D2F"
        strokeWidth="1.8"
        strokeDasharray="4 6"
        opacity="0.25"
      />
      {/* Delicate Gold Trajectory Line */}
      <path
        d="M0 160 C75 190, 120 260, 85 340 C60 390, 20 430, 0 450"
        stroke="#E6B04F"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        opacity="0.5"
      />
      {/* Botanical Sprig */}
      <path
        d="M20 260 C40 230, 70 215, 100 200"
        stroke="#203D2F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48 238 C62 222, 74 226, 68 240 C62 246, 54 244, 48 238 Z"
        fill="#C7D1AF"
        stroke="#203D2F"
        strokeWidth="1.2"
      />
      <path
        d="M74 214 C88 200, 100 205, 94 216 C88 224, 78 220, 74 214 Z"
        fill="#203D2F"
      />
      {/* Floating Spores */}
      <circle cx="108" cy="195" r="5" fill="#E6B04F" />
      <circle cx="65" cy="360" r="4" fill="#203D2F" opacity="0.4" />
      <circle cx="45" cy="420" r="5" fill="#C7D1AF" />
    </svg>
  </motion.div>
);

export const CropPortfolioRightWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute right-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-72 xl:w-88 2xl:w-[400px] pointer-events-none select-none z-10 overflow-hidden"
  >
    <svg
      viewBox="0 0 240 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto min-h-[420px]"
    >
      {/* Soft Sage Organic Lobe */}
      <path
        d="M240 50 C150 95, 110 190, 150 290 C185 360, 220 405, 240 435 Z"
        fill="#CCD7B8"
        fillOpacity="0.6"
      />
      {/* Gold Topographic Line */}
      <path
        d="M240 75 C125 130, 85 235, 130 335 C165 395, 210 435, 240 460"
        stroke="#E6B04F"
        strokeWidth="1.8"
        strokeDasharray="4 6"
        opacity="0.45"
      />
      {/* Floating Pair of Botanical Leaves */}
      <path
        d="M175 220 C155 205, 135 212, 140 232 C152 238, 166 230, 175 220 Z"
        fill="#203D2F"
      />
      <path
        d="M195 260 C178 250, 162 258, 166 274 C176 280, 190 272, 195 260 Z"
        fill="#C7D1AF"
      />
      {/* Floating Gold & Green Spores */}
      <circle cx="130" cy="180" r="5.5" fill="#E6B04F" />
      <circle cx="150" cy="315" r="4.5" fill="#203D2F" opacity="0.35" />
      <circle cx="180" cy="375" r="6" fill="#DDE5CE" />
    </svg>
  </motion.div>
);

// --- SEED JOURNEY SECTION SIDE WINGS ---

export const SeedJourneyLeftWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute left-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-72 xl:w-88 2xl:w-[400px] pointer-events-none select-none z-10 overflow-hidden"
  >
    <svg
      viewBox="0 0 240 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto min-h-[400px]"
    >
      {/* Topographic Elevation Arc */}
      <path
        d="M0 30 C75 85, 115 180, 65 275 C30 330, 10 360, 0 380"
        stroke="#E6B04F"
        strokeWidth="2"
        strokeDasharray="5 5"
        opacity="0.55"
      />
      {/* Organic Wave Lobe */}
      <path
        d="M0 90 C60 125, 95 195, 65 265 C40 310, 15 335, 0 355 Z"
        fill="#E3EBDB"
        fillOpacity="0.7"
      />
      {/* Wheat / Grain Ear Illustration */}
      <path
        d="M15 320 C35 270, 50 200, 65 120"
        stroke="#203D2F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Grain husks in harvest gold & sage */}
      <path d="M42 225 C30 215, 28 200, 36 195 C45 195, 48 210, 42 225 Z" fill="#E6B04F" />
      <path d="M46 215 C58 205, 60 190, 52 185 C43 185, 40 200, 46 215 Z" fill="#C7D1AF" stroke="#203D2F" strokeWidth="1" />
      <path d="M50 175 C38 165, 36 150, 44 145 C53 145, 56 160, 50 175 Z" fill="#E6B04F" />
      <path d="M54 165 C66 155, 68 140, 60 135 C51 135, 48 150, 54 165 Z" fill="#DDE5CE" stroke="#203D2F" strokeWidth="1" />
      <path d="M58 125 C46 115, 44 100, 52 95 C61 95, 64 110, 58 125 Z" fill="#E6B04F" />

      {/* Floating Seed Spores */}
      <circle cx="68" cy="85" r="5" fill="#E6B04F" />
      <circle cx="85" cy="180" r="4.5" fill="#203D2F" opacity="0.35" />
      <circle cx="45" cy="380" r="5" fill="#C7D1AF" />
    </svg>
  </motion.div>
);

export const SeedJourneyRightWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute right-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-72 xl:w-88 2xl:w-[400px] pointer-events-none select-none z-10 overflow-hidden"
  >
    <svg
      viewBox="0 0 240 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto min-h-[400px]"
    >
      {/* Topographic Contour Curves framing the plant */}
      <path
        d="M240 40 C160 95, 110 190, 150 295 C180 365, 215 395, 240 410"
        stroke="#203D2F"
        strokeWidth="1.8"
        strokeDasharray="4 6"
        opacity="0.22"
      />
      <path
        d="M240 90 C185 135, 145 210, 175 285 C198 335, 222 360, 240 375"
        stroke="#E6B04F"
        strokeWidth="1.6"
        strokeDasharray="3 5"
        opacity="0.45"
      />
      {/* Organic Pale Lobe */}
      <path
        d="M240 120 C190 155, 160 215, 185 275 C205 315, 225 335, 240 350 Z"
        fill="#F0E3C2"
        fillOpacity="0.5"
      />
      {/* Floating Botanical Seed Pod */}
      <path
        d="M170 190 C155 180, 142 188, 148 202 C158 208, 168 200, 170 190 Z"
        fill="#203D2F"
      />
      <circle cx="135" cy="170" r="5.5" fill="#E6B04F" />
      <circle cx="165" cy="275" r="4.5" fill="#C7D1AF" />
      <circle cx="195" cy="340" r="4" fill="#203D2F" opacity="0.3" />
    </svg>
  </motion.div>
);

// --- GROWER NETWORK SECTION SIDE WINGS ---

export const GrowerSectionLeftWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute left-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-72 xl:w-88 2xl:w-[400px] pointer-events-none select-none z-10 overflow-hidden"
  >
    <svg
      viewBox="0 0 240 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto min-h-[400px]"
    >
      {/* Flowing Organic Sage Contour Wave */}
      <path
        d="M0 50 C95 85, 140 175, 105 275 C75 350, 30 390, 0 420 Z"
        fill="#C7D1AF"
        fillOpacity="0.55"
      />
      {/* Inner Soft Lobe */}
      <path
        d="M0 100 C65 125, 95 185, 75 255 C55 305, 20 335, 0 360 Z"
        fill="#DDE5CE"
        fillOpacity="0.75"
      />
      {/* Dotted Gold Trajectory */}
      <path
        d="M0 70 C110 110, 160 205, 120 305 C85 375, 35 415, 0 445"
        stroke="#E6B04F"
        strokeWidth="1.8"
        strokeDasharray="4 6"
        opacity="0.5"
      />
      {/* Sprouting Seedling Motif */}
      <path
        d="M25 280 C35 250, 52 230, 75 210"
        stroke="#203D2F"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M45 255 C35 250, 30 240, 38 234 C48 234, 52 248, 45 255 Z"
        fill="#C7D1AF"
        stroke="#203D2F"
        strokeWidth="1.2"
      />
      <path
        d="M62 232 C55 224, 52 214, 60 208 C70 208, 72 222, 62 232 Z"
        fill="#203D2F"
      />
      {/* Floating Spores */}
      <circle cx="95" cy="200" r="5.5" fill="#E6B04F" />
      <circle cx="50" cy="370" r="4.5" fill="#203D2F" opacity="0.3" />
    </svg>
  </motion.div>
);

export const GrowerSectionRightWing: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute right-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-72 xl:w-88 2xl:w-[400px] pointer-events-none select-none z-10 overflow-hidden"
  >
    <svg
      viewBox="0 0 240 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto min-h-[400px]"
    >
      {/* Golden Wavy Ribbon Arching from Edge */}
      <path
        d="M240 90 C 180 100, 140 40, 70 60 C 35 70, 20 55, 10 45"
        stroke="#E6B04F"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Soft Sage Leaf Silhouette */}
      <path
        d="M170 180 C125 155, 105 180, 115 210 C135 220, 160 205, 170 180 Z"
        fill="#C7D1AF"
        fillOpacity="0.85"
      />
      {/* Topographic Contour Arc */}
      <path
        d="M240 140 C170 180, 130 250, 165 330 C190 380, 220 405, 240 420"
        stroke="#203D2F"
        strokeWidth="1.6"
        strokeDasharray="4 6"
        opacity="0.2"
      />
      {/* Floating Spores */}
      <circle cx="85" cy="55" r="5" fill="#E6B04F" />
      <circle cx="130" cy="270" r="5.5" fill="#E6B04F" />
      <circle cx="160" cy="340" r="4.5" fill="#C7D1AF" />
    </svg>
  </motion.div>
);
