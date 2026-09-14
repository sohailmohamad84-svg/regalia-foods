import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Regalia Foods",
  legalName: "Regalia Foods LLP",
  tagline: "Custom Spice & Dry Blend Manufacturing, Built Around Your Recipe.",
  positioning: "Your Recipe. Our Manufacturing Expertise.",
  centralMessage: "Have a recipe or product idea? We can manufacture your blend.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://regaliafoods.com",
  description:
    "Regalia Foods LLP is an India-based B2B manufacturing partner specialising in custom blending of spices, masalas, seasonings and dry sauce blends. From your recipe or product concept to commercial production, we help turn your formulation into a consistent finished blend.",
  brand: {
    logoPrimary: "/brand/logo-primary.png",
    logoDark: "/brand/logo-dark.png",
    favicon: "/brand/favicon.png",
    icon: "/brand/icon.png",
  },
  contact: {
    // Configurable contact information via environment variables or verified company channels
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@regaliafoods.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 (Contact Available Upon Request)",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    displayEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@regaliafoods.com",
    displayPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "Available on enquiry",
    displayWhatsApp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "Available on enquiry",
    address: {
      line1: "Regalia Foods Manufacturing Facility",
      city: "India",
      state: "India",
      country: "India",
    },
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
    googleMapsUrl: undefined,
  },
  manufacturingPillars: [
    {
      title: "Custom Formulations",
      description: "Manufacture strictly around your approved proprietary recipe or commercial target profile.",
      iconName: "Sliders",
    },
    {
      title: "Dedicated B2B Focus",
      description: "We are pure-play manufacturing partners. We do not compete with your consumer retail brand.",
      iconName: "Building2",
    },
    {
      title: "Repeatable Batch Production",
      description: "Rigorous mixing homogeneity, measured particle consistency, and controlled batch-to-batch repeatability.",
      iconName: "Scale",
    },
    {
      title: "Flexible Product Trials",
      description: "Support across pilot trial batches, recipe refinement, customer sampling, and scaled commercial runs.",
      iconName: "FlaskConical",
    },
    {
      title: "Confidentiality Assured",
      description: "Strict non-disclosure commitments to protect your proprietary formulations and trade secrets.",
      iconName: "ShieldCheck",
    },
    {
      title: "One Dry-Blend Partner",
      description: "A single dependable supplier handling diverse applications from traditional masalas to modern marinades.",
      iconName: "Boxes",
    },
  ],
};
