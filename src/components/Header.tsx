import React, { useState } from 'react';
import { Search, Phone, MessageSquare, Menu, X } from 'lucide-react';
import { BotanicalLogoIcon } from './OrganicDecoration.tsx';
import { COMPANY_INFO } from '../utils/seedData.ts';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenGrowerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenGrowerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Seed Portfolio', href: '#portfolio' },
    { label: 'Grower Network', href: '#grower-network' },
    { label: 'Quality', href: '#seed-journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (label: string, href: string) => {
    setActiveNav(label);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F4E9]/95 backdrop-blur-md border-b border-[#203D2F]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#203D2F]"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home', '#home');
          }}
        >
          <div className="text-[#203D2F] transition-transform duration-300 group-hover:scale-105">
            <BotanicalLogoIcon className="w-9 h-9 sm:w-10 sm:h-10 text-[#203D2F]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#203D2F] leading-tight">
              AMRITSAR
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] font-semibold text-[#536B5E] uppercase -mt-0.5">
              Seed Corporation
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14.5px] font-medium text-[#203D2F]">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
                className={`relative py-2 transition-colors duration-200 hover:text-[#E6B04F] ${
                  isActive ? 'text-[#203D2F] font-semibold' : 'text-[#203D2F]/80'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6B04F] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4">
          {/* Quick Search */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#203D2F] hover:bg-[#E3EBDB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
            aria-label="Search seed varieties and crops"
            title="Search seed varieties"
          >
            <Search className="w-4 h-4 text-[#203D2F]" />
          </button>

          {/* Call / WhatsApp Primary CTA */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Assalam-o-Alaikum%20Amritsar%20Seed%20Corporation,%20I%20would%20like%20more%20information%20about%20your%20certified%20seeds.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-[#203D2F] hover:bg-[#162C22] text-[#F8F4E9] pl-3.5 pr-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#203D2F]"
            aria-label={`Call or WhatsApp at ${COMPANY_INFO.primaryPhone}`}
          >
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Phone className="w-3.5 h-3.5 text-[#E6B04F]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] tracking-wide text-[#C7D1AF] font-medium leading-none">
                Call / WhatsApp
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-white leading-tight font-sans">
                {COMPANY_INFO.primaryPhone}
              </span>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-[#203D2F] hover:bg-[#E3EBDB] rounded-full focus:outline-none"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#203D2F] hover:bg-[#E3EBDB] rounded-lg focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F4E9] border-b border-[#203D2F]/15 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
                className={`py-2 text-base font-medium transition-colors ${
                  activeNav === item.label
                    ? 'text-[#203D2F] font-bold border-l-2 border-[#E6B04F] pl-3'
                    : 'text-[#203D2F]/80 pl-3'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-[#203D2F]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGrowerModal();
              }}
              className="w-full bg-[#E6B04F] hover:bg-[#D49A32] text-[#203D2F] font-semibold py-2.5 rounded-full text-center text-sm transition-colors"
            >
              Become a Grower
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#203D2F] text-white py-2.5 rounded-full text-center text-sm font-semibold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#E6B04F]" />
              WhatsApp: {COMPANY_INFO.primaryPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
