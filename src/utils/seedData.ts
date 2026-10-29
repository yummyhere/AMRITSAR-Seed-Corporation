export interface CropItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  fallbackImage: string;
  iconName: 'cotton' | 'rice' | 'corn' | 'fodder';
  varieties: string[];
  germinationRate: string;
  maturityDays: string;
  yieldPotential: string;
  idealSoil: string;
  sowingSeason: string;
  features: string[];
}

export interface JourneyStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: 'leaf' | 'gear' | 'flask' | 'package';
  bgTone: 'sage' | 'gold';
  details: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: 'clock' | 'growers' | 'leaf' | 'shield';
  description: string;
}

export const CROPS_DATA: CropItem[] = [
  {
    id: 'cotton',
    name: 'Cotton',
    tagline: 'High-yielding varieties for better returns.',
    category: 'Fiber & Cash Crop',
    description: 'Bollgard-enhanced and heat-tolerant cotton seeds formulated specifically for Southern Punjab and Sindh agricultural conditions with exceptional fiber strength and high ginning outturn.',
    image: '/images/crop-cotton-ref.jpg',
    fallbackImage: '/images/cotton.jpg',
    iconName: 'cotton',
    varieties: ['ASC BT-99', 'ASC White Diamond', 'ASC-104 Super'],
    germinationRate: '88% - 92%',
    maturityDays: '135 - 150 Days',
    yieldPotential: '35 - 45 Maunds / Acre',
    idealSoil: 'Deep silt loam to well-drained clay',
    sowingSeason: 'April - May',
    features: ['Resistance to CLCuV (Cotton Leaf Curl Virus)', 'Excellent staple length (28.5mm+)', 'Vigorous early boll setting', 'Drought and heat resilience']
  },
  {
    id: 'rice',
    name: 'Rice',
    tagline: 'Quality seeds for stronger harvests.',
    category: 'Cereal Grain',
    description: 'Aromatic long-grain basmati and heavy-yielding coarse varieties bred for high tillering, uniform panicle emergence, and premium grain elongation upon cooking.',
    image: '/images/crop-rice-ref.jpg',
    fallbackImage: '/images/rice.jpg',
    iconName: 'rice',
    varieties: ['ASC Royal Basmati', 'ASC-Kainat 1121', 'ASC Hybrid Gold'],
    germinationRate: '90% - 94%',
    maturityDays: '110 - 130 Days',
    yieldPotential: '60 - 80 Maunds / Acre',
    idealSoil: 'Clayey to clay loam with high water retention',
    sowingSeason: 'May - July (Nursery to Transplant)',
    features: ['High aroma & long kernel elongation', 'Strong straw strength (lodging resistant)', 'Bacterial leaf blight tolerance', 'Superior milling yield with minimal chalkiness']
  },
  {
    id: 'corn',
    name: 'Corn',
    tagline: 'High performance for modern farming.',
    category: 'Grain & Silage',
    description: 'Triple-cross and single-cross hybrid maize with deep kernel depth, strong stay-green characteristics, and high starch density for grain marketing and animal silage.',
    image: '/images/crop-corn-ref.jpg',
    fallbackImage: '/images/corn.jpg',
    iconName: 'corn',
    varieties: ['ASC Hybrid Zea-786', 'ASC Yellow Star', 'ASC Silage King'],
    germinationRate: '92% - 96%',
    maturityDays: '100 - 115 Days',
    yieldPotential: '90 - 120 Maunds / Acre',
    idealSoil: 'Rich, fertile loamy soil with neutral pH',
    sowingSeason: 'Spring (Feb-Mar) & Autumn (July-Aug)',
    features: ['High cob placement & uniform ears', 'Remarkable stay-green effect for silage', 'Tight husk cover resisting corn earworms', 'Superior test weight and grain density']
  },
  {
    id: 'fodder',
    name: 'Fodder',
    tagline: 'Healthy livestock, healthier farms.',
    category: 'Forage & Animal Nutrition',
    description: 'Nutrient-rich multi-cut forage varieties including Berseem, Sorghum-Sudan hybrid, and Rhodes grass with superior crude protein, soft palatability, and fast regrowth.',
    image: '/images/crop-fodder-ref.jpg',
    fallbackImage: '/images/fodder.jpg',
    iconName: 'fodder',
    varieties: ['ASC Super Berseem', 'ASC Nutri-Sorghum', 'ASC Green Lush Grass'],
    germinationRate: '85% - 90%',
    maturityDays: '35 - 45 Days (First cut)',
    yieldPotential: '650 - 900 Maunds / Season',
    idealSoil: 'Adaptable to wide range of soils',
    sowingSeason: 'Rabi (Oct-Nov) & Kharif (March-June)',
    features: ['Multi-cut (5 to 7 cuts per cycle)', 'Crude protein content exceeding 18%', 'Succulent, tender stems loved by dairy cattle', 'Fast regrowth following each harvest']
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: 'Selection',
    subtitle: 'Best parent seeds',
    description: 'Breeder and foundation seed stock evaluated across multi-location trial plots for genetic purity, vigor, and climate resilience.',
    icon: 'leaf',
    bgTone: 'sage',
    details: ['DNA & genetic purity screening', 'Field trial vigor tests', 'Parent line preservation']
  },
  {
    step: 2,
    title: 'Processing',
    subtitle: 'Cleaning & grading',
    description: 'Multi-stage air-screen cleaners, gravity separators, and indent cylinders eliminate inert matter and undersized seeds.',
    icon: 'gear',
    bgTone: 'gold',
    details: ['Mechanical destoning & debris removal', 'Specific gravity separation', 'Uniform sizing & color sorting']
  },
  {
    step: 3,
    title: 'Testing',
    subtitle: 'Quality assurance',
    description: 'Rigorous certified laboratory checks for germination percentage, moisture levels, physical purity, and vigor index before approval.',
    icon: 'flask',
    bgTone: 'sage',
    details: ['Standard germination chamber test', 'Seed moisture titration', 'Seedling vigor stress test']
  },
  {
    step: 4,
    title: 'Packaging',
    subtitle: 'Ready for the field',
    description: 'Protective fungicidal dressing applied in automated treaters, followed by moisture-barrier tamper-proof packaging.',
    icon: 'package',
    bgTone: 'gold',
    details: ['Antifungal fungicide & polymer treatment', 'Moisture-proof multi-layer bags', 'QR traceability batch seals']
  }
];

export const COMPANY_STATS: StatItem[] = [
  {
    id: 'exp',
    value: '20+',
    label: 'Years of Experience',
    icon: 'clock',
    description: 'Providing trusted agricultural excellence and certified seed solutions across Pakistan since 2003.'
  },
  {
    id: 'growers',
    value: '1000+',
    label: 'Happy Growers',
    icon: 'growers',
    description: 'Farmers partnered across Punjab and Sindh achieving record yields through our contract network.'
  },
  {
    id: 'crops',
    value: '4',
    label: 'Crop Varieties',
    icon: 'leaf',
    description: 'Focused breeding programs for regional staple crops: Cotton, Rice, Corn, and high-protein Fodder.'
  },
  {
    id: 'quality',
    value: '100%',
    label: 'Quality Commitment',
    icon: 'shield',
    description: 'Strict adherence to Federal Seed Certification and Registration Department (FSC&RD) benchmarks.'
  }
];

export const COMPANY_INFO = {
  name: 'Amritsar Seed Corporation',
  tagline: 'Precision in Every Seed. Promise in Every Harvest.',
  address: 'Ahmed Chowk, Bahadarpur / Shahbazpur Road, Rahim Yar Khan 64200, Pakistan',
  primaryPhone: '+92 301 8770137',
  secondaryPhone: '0300 8675506',
  whatsappRaw: '923018770137',
  establishedYear: '2003',
  district: 'Rahim Yar Khan, Punjab, Pakistan'
};
