import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, Sprout } from 'lucide-react';
import { CROPS_DATA, CropItem, JOURNEY_STEPS, COMPANY_INFO } from '../utils/seedData.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCrop: (crop: CropItem) => void;
  onOpenGrowerModal: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCrop,
  onOpenGrowerModal,
}) => {
  const [query, setQuery] = useState('');

  const filteredCrops = useMemo(() => {
    if (!query.trim()) return CROPS_DATA;
    const q = query.toLowerCase();
    return CROPS_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.varieties.some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  const filteredSteps = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return JOURNEY_STEPS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.subtitle.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div className="relative w-full max-w-xl bg-[#F8F4E9] rounded-3xl shadow-2xl border border-[#203D2F]/20 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#203D2F]/15 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#203D2F]/70 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Cotton, Basmati Rice, Hybrid Corn, Fodder, or varieties..."
            className="w-full bg-transparent text-sm sm:text-base text-[#1F382B] placeholder-[#536B5E]/60 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#536B5E] hover:text-[#1F382B] font-semibold px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#203D2F] hover:bg-[#E3EBDB] transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-4">
          
          {/* Crops Results */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#536B5E] mb-3">
              Certified Crops ({filteredCrops.length})
            </h4>
            <div className="space-y-2">
              {filteredCrops.map((crop) => (
                <div
                  key={crop.id}
                  onClick={() => {
                    onClose();
                    onSelectCrop(crop);
                  }}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#E3EBDB]/50 hover:bg-[#E3EBDB] border border-[#203D2F]/10 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-base text-[#1F382B] group-hover:text-[#E6B04F] transition-colors">
                        {crop.name}
                      </h5>
                      <p className="text-xs text-[#536B5E] line-clamp-1">
                        {crop.tagline} • {crop.varieties.join(', ')}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#203D2F] group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Seed Journey Step Matches */}
          {filteredSteps.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#536B5E] mb-3">
                Seed Journey Stages
              </h4>
              <div className="space-y-2">
                {filteredSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-3 rounded-xl bg-white/70 border border-[#203D2F]/10"
                  >
                    <p className="text-xs font-bold text-[#1F382B]">
                      Step {step.step}: {step.title} — {step.subtitle}
                    </p>
                    <p className="text-xs text-[#536B5E] mt-0.5">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Links Footer */}
          <div className="pt-3 border-t border-[#203D2F]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#536B5E]">
            <span>Helpline: {COMPANY_INFO.primaryPhone}</span>
            <button
              onClick={() => {
                onClose();
                onOpenGrowerModal();
              }}
              className="font-semibold text-[#203D2F] hover:text-[#E6B04F] underline"
            >
              Become a Contract Grower →
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
