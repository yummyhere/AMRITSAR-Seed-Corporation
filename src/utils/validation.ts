export interface GrowerApplication {
  fullName: string;
  phone: string;
  location: string;
  acreage: number | string;
  cropInterest: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateGrowerForm(data: GrowerApplication): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  // Pakistan phone format verification (e.g. 0301..., +92301..., 0300...)
  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)]/g, '');
  if (!cleanPhone) {
    errors.phone = 'Phone number is required.';
  } else if (!/^(\+?92|0)?3\d{9}$/.test(cleanPhone)) {
    errors.phone = 'Please enter a valid Pakistani mobile number (e.g. 0301 8770137).';
  }

  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Please provide your district or tehsil (e.g. Rahim Yar Khan).';
  }

  const acresNum = Number(data.acreage);
  if (!data.acreage || isNaN(acresNum) || acresNum <= 0) {
    errors.acreage = 'Please enter valid land acreage (minimum 1 acre).';
  }

  const validCrops = ['Cotton', 'Rice', 'Corn', 'Fodder', 'Multiple Crops'];
  if (!data.cropInterest || !validCrops.includes(data.cropInterest)) {
    errors.cropInterest = 'Please select a crop category.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateWhatsAppLink(data: GrowerApplication, targetPhone: string = '923018770137'): string {
  const message = [
    `Assalam-o-Alaikum Amritsar Seed Corporation,`,
    `I would like to apply to join the Contract Grower Network.`,
    `• Name: ${data.fullName.trim()}`,
    `• Contact: ${data.phone.trim()}`,
    `• Location: ${data.location.trim()}`,
    `• Cultivated Land: ${data.acreage} Acres`,
    `• Crop Interest: ${data.cropInterest}`,
    data.notes ? `• Notes: ${data.notes.trim()}` : ''
  ].filter(Boolean).join('\n');

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
}

export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('92') && digits.length === 12) {
    return `+92 ${digits.slice(2, 5)} ${digits.slice(5)}`;
  }
  if (digits.startsWith('0') && digits.length === 11) {
    return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  }
  return phone;
}
