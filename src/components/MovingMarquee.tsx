import React from 'react';
import { Sprout, Sparkles, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';

export const MovingMarquee: React.FC = () => {
  const marqueeItems = [
    { text: 'Trusted by Farmers', icon: <Leaf className="w-3.5 h-3.5 text-[#C7D1AF]" /> },
    { text: 'Quality Seeds', icon: <span className="w-1.5 h-1.5 rounded-full bg-[#E6B04F]" /> },
    { text: 'Contract Growing', icon: <Sparkles className="w-3.5 h-3.5 text-[#E6B04F]" /> },
    { text: 'Sustainable Agriculture', icon: <Sprout className="w-3.5 h-3.5 text-[#C7D1AF]" /> },
    { text: 'Now Serving Farmers Across Rahim Yar Khan', icon: <ArrowRight className="w-3.5 h-3.5 text-[#E6B04F]" /> },
    { text: 'Your Trusted Seed Partner Since 2003', icon: <ShieldCheck className="w-3.5 h-3.5 text-[#C7D1AF]" /> },
    { text: 'Growing a Better Tomorrow', icon: <span className="w-2 h-2 rounded-full bg-[#C7D1AF]/80" /> },
  ];

  return (
    <div
      className="relative w-full overflow-hidden bg-[#203D2F] text-[#F8F4E9] py-3.5 border-y border-[#203D2F]/20 select-none"
      role="region"
      aria-label="Amritsar Seed Corporation Highlights"
    >
      {/* Soft gradient edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#203D2F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#203D2F] to-transparent z-10 pointer-events-none" />

      {/* Marquee Inner Track with duplicate for infinite smooth loop */}
      <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
        {/* Set 1 */}
        {marqueeItems.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-wide">
            {item.icon}
            <span className="text-[#F8F4E9]/95 hover:text-[#E6B04F] transition-colors">
              {item.text}
            </span>
            <span className="text-[#E6B04F]/60 ml-3">✦</span>
          </div>
        ))}

        {/* Set 2 (for seamless loop) */}
        {marqueeItems.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-wide">
            {item.icon}
            <span className="text-[#F8F4E9]/95 hover:text-[#E6B04F] transition-colors">
              {item.text}
            </span>
            <span className="text-[#E6B04F]/60 ml-3">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
