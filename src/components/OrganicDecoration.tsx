import React from 'react';

/**
 * Botanical SVGs and Organic SVG Clip Paths
 * Faithfully recreating the subtle botanical sprigs, organic blobs, and handwritten arrows
 * from the reference design.
 */

export const BotanicalSprigLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 72 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-14 h-24 ${className}`}
  >
    <path
      d="M36 112 C 34 85, 36 45, 48 10"
      stroke="#203D2F"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Left leaf pairs */}
    <path
      d="M35 90 C 22 84, 14 74, 18 64 C 24 64, 30 72, 35 80"
      fill="#C7D1AF"
      stroke="#203D2F"
      strokeWidth="1.2"
    />
    <path
      d="M36 65 C 20 58, 12 46, 16 36 C 22 36, 30 46, 36 54"
      fill="#DDE5CE"
      stroke="#203D2F"
      strokeWidth="1.2"
    />
    <path
      d="M38 40 C 26 30, 22 18, 28 12 C 34 14, 38 24, 40 30"
      fill="#C7D1AF"
      stroke="#203D2F"
      strokeWidth="1.2"
    />
    {/* Right leaf pairs */}
    <path
      d="M36 82 C 48 76, 56 68, 54 58 C 48 58, 42 66, 36 74"
      fill="#CCD7B8"
      stroke="#203D2F"
      strokeWidth="1.2"
    />
    <path
      d="M37 56 C 52 48, 60 38, 56 28 C 48 30, 42 40, 38 48"
      fill="#DDE5CE"
      stroke="#203D2F"
      strokeWidth="1.2"
    />
    {/* Top leaf tip */}
    <path
      d="M48 10 C 52 4, 46 2, 42 6 C 42 8, 44 10, 48 10"
      fill="#C7D1AF"
      stroke="#203D2F"
      strokeWidth="1.2"
    />
  </svg>
);

export const BotanicalGoldBranch: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 90 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-16 h-20 opacity-80 ${className}`}
  >
    <path
      d="M75 110 C 60 85, 45 50, 30 15"
      stroke="#E6B04F"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M62 88 C 48 85, 40 76, 46 68 C 54 68, 60 76, 62 80"
      stroke="#E6B04F"
      strokeWidth="1.4"
      fill="none"
    />
    <path
      d="M50 65 C 34 60, 28 50, 34 42 C 42 42, 48 52, 50 58"
      stroke="#E6B04F"
      strokeWidth="1.4"
      fill="none"
    />
    <path
      d="M38 40 C 24 35, 20 25, 26 18 C 32 18, 36 28, 38 34"
      stroke="#E6B04F"
      strokeWidth="1.4"
      fill="none"
    />
    <path
      d="M55 78 C 68 70, 78 62, 74 54 C 66 54, 60 64, 55 70"
      stroke="#E6B04F"
      strokeWidth="1.4"
      fill="none"
    />
    <path
      d="M44 52 C 58 45, 66 36, 62 28 C 54 30, 48 38, 44 44"
      stroke="#E6B04F"
      strokeWidth="1.4"
      fill="none"
    />
  </svg>
);

export const CurvedHandwrittenArrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 48 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-10 ${className}`}
  >
    <path
      d="M32 6 C 38 18, 36 34, 18 46"
      stroke="#8C6A29"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="0.5 0.5"
    />
    <path
      d="M16 38 L 16 48 L 26 48"
      stroke="#8C6A29"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GoldWavyRibbon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-28 h-10 ${className}`}
  >
    <path
      d="M4 28 C 30 32, 45 6, 75 14 C 95 20, 105 12, 116 8"
      stroke="#E6B04F"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export const BotanicalLogoIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-9 h-9 ${className}`}
  >
    {/* Amritsar Seed Corporation 3-leaf clover/sprout logo */}
    <path
      d="M20 36 C 20 28, 20 20, 20 12"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Center leaf */}
    <path
      d="M20 6 C 16 10, 16 16, 20 20 C 24 16, 24 10, 20 6 Z"
      fill="currentColor"
    />
    {/* Left leaf */}
    <path
      d="M10 20 C 10 14, 16 15, 19 18 C 17 22, 12 24, 10 20 Z"
      fill="currentColor"
    />
    {/* Right leaf */}
    <path
      d="M30 20 C 30 14, 24 15, 21 18 C 23 22, 28 24, 30 20 Z"
      fill="currentColor"
    />
  </svg>
);

export const CropLineIcon: React.FC<{ name: 'cotton' | 'rice' | 'corn' | 'fodder'; className?: string }> = ({ name, className = '' }) => {
  switch (name) {
    case 'cotton':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-6 h-6 ${className}`}>
          <circle cx="16" cy="14" r="5" />
          <circle cx="11" cy="16" r="4.5" />
          <circle cx="21" cy="16" r="4.5" />
          <circle cx="16" cy="19" r="4.5" />
          <path d="M16 23 L16 28 M13 28 Q16 25 19 28" strokeLinecap="round" />
        </svg>
      );
    case 'rice':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-6 h-6 ${className}`}>
          <path d="M16 28 C16 18 20 8 26 4" strokeLinecap="round" />
          <path d="M16 20 C14 18 10 18 10 22 C12 24 15 22 16 20 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M17 15 C19 13 23 13 23 17 C21 19 18 17 17 15 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M18 10 C16 8 13 8 13 12 C15 14 17 12 18 10 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M21 7 C23 5 26 5 26 9 C24 11 22 9 21 7 Z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case 'corn':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-6 h-6 ${className}`}>
          <path d="M12 26 C12 14 14 6 16 4 C18 6 20 14 20 26 Z" strokeLinecap="round" />
          <path d="M13 10 H19 M12 14 H20 M12 18 H20 M13 22 H19" strokeLinecap="round" />
          <path d="M10 28 C8 24 9 18 13 16" strokeLinecap="round" />
          <path d="M22 28 C24 24 23 18 19 16" strokeLinecap="round" />
        </svg>
      );
    case 'fodder':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-6 h-6 ${className}`}>
          <path d="M8 27 C8 17 11 11 15 7 C14 15 12 21 10 27" strokeLinecap="round" />
          <path d="M16 27 C16 15 19 8 24 6 C22 14 20 21 18 27" strokeLinecap="round" />
          <path d="M12 27 C13 20 15 14 21 11" strokeLinecap="round" />
        </svg>
      );
  }
};

/**
 * Abstract Organic Edge Designs
 * Subtle flowing organic contours, topographic lines, and layered organic shapes along the viewport edges
 */

export const EdgeWaveTopLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Sage background organic lobe */}
    <path
      d="M0 0 L190 0 C175 45, 150 95, 95 125 C50 150, 20 165, 0 175 Z"
      fill="#CCD7B8"
      fillOpacity="0.45"
    />
    {/* Forest green main organic curve */}
    <path
      d="M0 0 L150 0 C135 38, 115 72, 70 95 C30 115, 10 128, 0 135 Z"
      fill="#203D2F"
      fillOpacity="0.88"
    />
    {/* Delicate gold contour accent line */}
    <path
      d="M0 145 C 25 138, 65 120, 95 95 C 130 68, 155 35, 170 0"
      stroke="#E6B04F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 4"
      opacity="0.85"
    />
  </svg>
);

export const EdgeWaveTopRight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 260 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Pale sage contour */}
    <path
      d="M260 0 L70 0 C110 50, 150 100, 195 130 C225 150, 245 160, 260 170 Z"
      fill="#DDE5CE"
      fillOpacity="0.5"
    />
    {/* Harvest gold organic curve */}
    <path
      d="M260 0 L110 0 C145 42, 185 85, 220 105 C240 118, 252 125, 260 130 Z"
      fill="#E6B04F"
      fillOpacity="0.25"
    />
    {/* Delicate organic dot accent */}
    <circle cx="95" cy="40" r="4" fill="#E6B04F" opacity="0.6" />
    <circle cx="150" cy="115" r="5" fill="#203D2F" opacity="0.2" />
  </svg>
);

export const EdgeContourLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 140 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Organic topographic contour lines */}
    <path
      d="M0 40 C 45 70, 75 140, 50 210 C 25 280, 60 340, 0 380"
      stroke="#203D2F"
      strokeWidth="1.2"
      strokeDasharray="3 4"
      opacity="0.2"
    />
    <path
      d="M0 80 C 65 110, 95 180, 70 250 C 45 310, 80 360, 0 395"
      stroke="#203D2F"
      strokeWidth="1.4"
      opacity="0.12"
    />
    {/* Floating organic soft pebble */}
    <ellipse cx="28" cy="180" rx="14" ry="22" fill="#C7D1AF" fillOpacity="0.4" transform="rotate(-15 28 180)" />
    <circle cx="48" cy="270" r="4.5" fill="#E6B04F" opacity="0.5" />
    <circle cx="18" cy="330" r="3" fill="#203D2F" opacity="0.3" />
  </svg>
);

export const EdgeContourRight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Topographic bio-contour */}
    <path
      d="M160 30 C 110 70, 70 140, 95 220 C 120 300, 85 370, 160 420"
      stroke="#203D2F"
      strokeWidth="1.3"
      strokeDasharray="4 4"
      opacity="0.18"
    />
    <path
      d="M160 70 C 125 110, 95 175, 120 250 C 145 320, 115 390, 160 435"
      stroke="#E6B04F"
      strokeWidth="1.2"
      opacity="0.25"
    />
    {/* Floating organic droplets */}
    <ellipse cx="120" cy="140" rx="18" ry="12" fill="#E3EBDB" fillOpacity="0.7" transform="rotate(25 120 140)" />
    <circle cx="95" cy="280" r="5" fill="#E6B04F" opacity="0.45" />
    <circle cx="130" cy="360" r="4" fill="#203D2F" opacity="0.25" />
  </svg>
);

export const OrganicWaveDivider: React.FC<{
  className?: string;
  fillColor?: string;
  inverted?: boolean;
}> = ({ className = '', fillColor = '#F8F4E9', inverted = false }) => (
  <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className="w-full h-8 sm:h-12 block"
      style={{ transform: inverted ? 'scaleY(-1)' : undefined }}
    >
      <path
        d="M0,0 C150,35 350,48 550,24 C750,0 950,42 1200,18 L1200,48 L0,48 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);

