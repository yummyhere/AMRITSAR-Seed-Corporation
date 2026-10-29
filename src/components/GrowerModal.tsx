import React, { useState } from 'react';
import { X, Check, Send, AlertCircle, Phone, Sparkles } from 'lucide-react';
import { validateGrowerForm, generateWhatsAppLink, GrowerApplication } from '../utils/validation.ts';
import { COMPANY_INFO } from '../utils/seedData.ts';

interface GrowerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCrop?: string;
}

export const GrowerModal: React.FC<GrowerModalProps> = ({
  isOpen,
  onClose,
  initialCrop = 'Cotton',
}) => {
  const [formData, setFormData] = useState<GrowerApplication>({
    fullName: '',
    phone: '',
    location: 'Rahim Yar Khan',
    acreage: 25,
    cropInterest: initialCrop,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppLink, setWhatsAppLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateGrowerForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const link = generateWhatsAppLink(formData, COMPANY_INFO.whatsappRaw);
    setWhatsAppLink(link);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="grower-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#F8F4E9] rounded-3xl shadow-2xl border border-[#203D2F]/20 overflow-hidden">
        
        {/* Header Ribbon */}
        <div className="bg-[#203D2F] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#E6B04F]" />
            <h3 id="grower-modal-title" className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              Contract Grower Application
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E3EBDB] border border-[#203D2F]/20 flex items-center justify-center text-[#203D2F]">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#1F382B]">
              Application Recorded!
            </h4>
            <p className="mt-2 text-sm text-[#466050] leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your contract farming request for <strong>{formData.acreage} Acres</strong> of <strong>{formData.cropInterest}</strong> has been prepared.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-[#E3EBDB]/80 text-left text-xs text-[#203D2F] space-y-1.5 border border-[#203D2F]/10">
              <p><strong>District:</strong> {formData.location}</p>
              <p><strong>Contact:</strong> {formData.phone}</p>
              <p><strong>Direct Helpline:</strong> {COMPANY_INFO.primaryPhone}</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#203D2F] hover:bg-[#162C22] text-white font-semibold text-sm shadow-md transition-colors"
              >
                <Send className="w-4 h-4 text-[#E6B04F]" />
                Send via WhatsApp Now
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="py-3 px-5 rounded-full border border-[#203D2F]/30 text-[#203D2F] hover:bg-black/5 font-medium text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
            <p className="text-xs sm:text-sm text-[#466050]">
              Partner with Amritsar Seed Corporation for assured buy-back, premium foundation seeds, and agronomist support in Rahim Yar Khan & South Punjab.
            </p>

            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-[#1F382B] uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Muhammad Aslam"
                className="w-full px-4 py-2.5 rounded-xl border border-[#203D2F]/20 bg-white text-sm text-[#1F382B] focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Mobile / WhatsApp */}
            <div>
              <label className="block text-xs font-semibold text-[#1F382B] uppercase tracking-wider mb-1">
                Mobile / WhatsApp Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0301 8770137"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#203D2F]/20 bg-white text-sm text-[#1F382B] focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
                />
                <Phone className="w-4 h-4 text-[#536B5E] absolute left-3.5 top-3" />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location */}
              <div>
                <label className="block text-xs font-semibold text-[#1F382B] uppercase tracking-wider mb-1">
                  Tehsil / District *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Rahim Yar Khan / Sadiqabad"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#203D2F]/20 bg-white text-sm text-[#1F382B] focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
                />
                {errors.location && (
                  <p className="mt-1 text-xs text-red-600">{errors.location}</p>
                )}
              </div>

              {/* Acreage */}
              <div>
                <label className="block text-xs font-semibold text-[#1F382B] uppercase tracking-wider mb-1">
                  Land Acreage (Acres) *
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.acreage}
                  onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#203D2F]/20 bg-white text-sm text-[#1F382B] focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
                />
                {errors.acreage && (
                  <p className="mt-1 text-xs text-red-600">{errors.acreage}</p>
                )}
              </div>
            </div>

            {/* Crop Interest */}
            <div>
              <label className="block text-xs font-semibold text-[#1F382B] uppercase tracking-wider mb-1">
                Crop of Interest *
              </label>
              <select
                value={formData.cropInterest}
                onChange={(e) => setFormData({ ...formData, cropInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#203D2F]/20 bg-white text-sm text-[#1F382B] focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
              >
                <option value="Cotton">Cotton (Kharif)</option>
                <option value="Rice">Rice (Kharif)</option>
                <option value="Corn">Corn / Maize (Spring & Autumn)</option>
                <option value="Fodder">Fodder (Berseem, Sorghum, Grass)</option>
                <option value="Multiple Crops">Multiple Crops</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-semibold text-[#1F382B] uppercase tracking-wider mb-1">
                Additional Inquiries (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention specific seed varieties or soil conditions..."
                className="w-full px-4 py-2 rounded-xl border border-[#203D2F]/20 bg-white text-sm text-[#1F382B] focus:outline-none focus:ring-2 focus:ring-[#203D2F]"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-[#536B5E] hover:text-[#1F382B] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#203D2F] hover:bg-[#162C22] text-[#F8F4E9] text-xs sm:text-sm font-semibold shadow-md transition-all hover:shadow-lg"
              >
                <Send className="w-3.5 h-3.5 text-[#E6B04F]" />
                Submit Application
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
