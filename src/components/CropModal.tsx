import React from 'react';
import { X, Check, Sprout, Calendar, Droplets, ArrowRight } from 'lucide-react';
import { CropItem, COMPANY_INFO } from '../utils/seedData.ts';
import { CropLineIcon } from './OrganicDecoration.tsx';

interface CropModalProps {
  crop: CropItem | null;
  onClose: () => void;
  onRequestQuote: (cropName: string) => void;
}

export const CropModal: React.FC<CropModalProps> = ({
  crop,
  onClose,
  onRequestQuote,
}) => {
  if (!crop) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="crop-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#F8F4E9] rounded-3xl shadow-2xl border border-[#203D2F]/20 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="bg-[#203D2F] text-white px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <CropLineIcon name={crop.iconName} className="w-6 h-6 text-[#E6B04F]" />
            <div>
              <h3 id="crop-modal-title" className="font-serif text-2xl font-bold tracking-wide leading-tight">
                {crop.name} Seed Portfolio
              </h3>
              <p className="text-xs text-[#C7D1AF] font-sans">
                {crop.category} • Certified High Vigor Seeds
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Top Banner with Image and Description */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5">
              <div
                className="w-full h-48 overflow-hidden shadow-md"
                style={{
                  borderRadius: '52% 48% 54% 46% / 46% 54% 46% 54%',
                }}
              >
                <img
                  src={crop.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf(crop.fallbackImage) === -1) {
                      target.src = crop.fallbackImage;
                    }
                  }}
                  alt={crop.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="sm:col-span-7">
              <h4 className="font-serif text-xl font-bold text-[#1F382B]">
                {crop.tagline}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-[#466050] leading-relaxed">
                {crop.description}
              </p>

              {/* Verified Varieties */}
              <div className="mt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F382B]">
                  Featured Commercial Varieties:
                </span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {crop.varieties.map((v, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-[#E3EBDB] border border-[#203D2F]/10 text-xs font-semibold text-[#203D2F]"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Agronomic Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#E3EBDB]/50 p-4 rounded-2xl border border-[#203D2F]/10 text-center sm:text-left">
            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-[#536B5E] mb-1">
                <Sprout className="w-3.5 h-3.5 text-[#203D2F]" />
                <span>Germination</span>
              </div>
              <p className="font-bold text-sm text-[#1F382B]">{crop.germinationRate}</p>
            </div>

            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-[#536B5E] mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#203D2F]" />
                <span>Maturity</span>
              </div>
              <p className="font-bold text-sm text-[#1F382B]">{crop.maturityDays}</p>
            </div>

            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-[#536B5E] mb-1">
                <Droplets className="w-3.5 h-3.5 text-[#203D2F]" />
                <span>Sowing Season</span>
              </div>
              <p className="font-bold text-sm text-[#1F382B]">{crop.sowingSeason}</p>
            </div>

            <div className="p-2">
              <div className="flex items-center gap-1.5 text-xs text-[#536B5E] mb-1">
                <Sprout className="w-3.5 h-3.5 text-[#E6B04F]" />
                <span>Yield Potential</span>
              </div>
              <p className="font-bold text-sm text-[#1F382B]">{crop.yieldPotential}</p>
            </div>
          </div>

          {/* Agronomic Features List */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1F382B] mb-2.5">
              Agronomic Advantages & Field Performance:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {crop.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#3C5749]">
                  <Check className="w-3.5 h-3.5 text-[#203D2F] mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#E3EBDB]/40 px-6 py-4 border-t border-[#203D2F]/10 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <span className="text-xs text-[#536B5E]">
            Certified FSC&RD Certified Seed Stock in Rahim Yar Khan
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20${crop.name}%20seed%20availability%20and%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#203D2F] hover:bg-[#162C22] text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Order via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6B04F]" />
            </a>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(crop.name);
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-[#203D2F] text-[#203D2F] hover:bg-[#203D2F] hover:text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Apply as Grower
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
