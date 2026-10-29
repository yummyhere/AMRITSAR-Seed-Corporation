import React from 'react';
import { MapPin, Phone, MessageSquare, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { BotanicalLogoIcon, BotanicalGoldBranch } from './OrganicDecoration.tsx';
import { COMPANY_INFO } from '../utils/seedData.ts';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Seed Portfolio', href: '#portfolio' },
    { label: 'Grower Network', href: '#grower-network' },
    { label: 'Quality', href: '#seed-journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#182E22] text-[#F8F4E9] pt-16 pb-8 border-t border-[#203D2F] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#203D2F]/60">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <BotanicalLogoIcon className="w-10 h-10 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white leading-tight">
                  AMRITSAR
                </span>
                <span className="text-[11px] font-sans tracking-[0.2em] font-medium text-[#C7D1AF] uppercase -mt-0.5">
                  Seed Corporation
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm text-[#C7D1AF]/90 leading-relaxed max-w-sm font-sans">
              Precision in Every Seed.
              <br />
              Promise in Every Harvest.
            </p>

            <p className="mt-4 text-xs text-[#C7D1AF]/70 leading-relaxed max-w-xs font-sans">
              Certified seed breeder, distributor, and agricultural partner empowering Pakistani farmers with high-germination, disease-resistant crop varieties.
            </p>
          </div>

          {/* Col 2: Quick Links (2-3 cols) */}
          <div className="lg:col-span-2 sm:pl-4">
            <h4 className="font-sans font-bold text-sm tracking-wider uppercase text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C7D1AF]/85">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-[#E6B04F] transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-bold text-sm tracking-wider uppercase text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm text-[#C7D1AF]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E6B04F] mt-1 flex-shrink-0" />
                <span className="leading-snug">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E6B04F] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.primaryPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E6B04F] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  +92 {COMPANY_INFO.secondaryPhone.slice(1)}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#E6B04F] flex-shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-[#E6B04F] transition-colors"
                >
                  Call / WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us & Delicate Gold Botanical Outline (2 cols) */}
          <div className="lg:col-span-2 relative flex flex-col justify-between">
            <div>
              <h4 className="font-sans font-bold text-sm tracking-wider uppercase text-white mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#E6B04F] hover:bg-[#E6B04F]/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#E6B04F] hover:bg-[#E6B04F]/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#E6B04F] hover:bg-[#E6B04F]/10 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#E6B04F] hover:bg-[#E6B04F]/10 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Delicate Gold Botanical Branch on bottom right */}
            <div className="hidden lg:block absolute -right-2 bottom-0 pointer-events-none">
              <BotanicalGoldBranch className="w-20 h-24 text-[#E6B04F]" />
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C7D1AF]/70 gap-4">
          <p>© 2025 Amritsar Seed Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
