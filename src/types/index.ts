export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  positioning: string;
  centralMessage: string;
  url: string;
  description: string;
  brand: {
    logoPrimary: string;
    logoDark: string;
    favicon: string;
    icon: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    displayEmail: string;
    displayPhone: string;
    displayWhatsApp: string;
    address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    hours: string;
    googleMapsUrl?: string;
  };
  manufacturingPillars: {
    title: string;
    description: string;
    iconName: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  keyHighlights: string[];
  examples?: string[];
  iconName: string;
  image: string;
  href: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  category: "Traditional Masala" | "Modern Seasoning" | "Dry Sauce & Rub" | "Custom Formulation";
  flavorProfile: string;
  idealFor: string[];
  image: string;
  specs: {
    texture: string;
    heatLevel: "Mild" | "Medium" | "High" | "Customizable";
    applicationMethod: string;
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  shortTitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  painPointSolved: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneOrWhatsApp: string;
  countryLocation: string;
  productCategory: string;
  hasRecipe: "yes" | "in_development" | "need_support";
  estimatedQuantity: string;
  packagingRequirement?: string;
  projectDescription: string;
  // Honeypot field for spam prevention
  websiteHp?: string;
}
