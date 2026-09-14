import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetailSection } from "@/components/services/ServiceDetailSection";
import { RepresentativeShowcase } from "@/components/services/RepresentativeShowcase";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Products & Services | Custom Spice & Seasoning Blending - Regalia Foods",
  description:
    "Explore our contract manufacturing and custom blending capabilities: regional masalas, dry sauce bases, peri-peri blends, meat rubs, snack seasonings, and pilot trial support.",
  openGraph: {
    title: "Products & Services | Regalia Foods LLP",
    description:
      "Contract blending, custom spice formulations, dry sauce bases, and product development services.",
  },
};

export default function ProductsServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetailSection />
      <RepresentativeShowcase />
      <FinalCta />
    </>
  );
}
