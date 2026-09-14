import React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { ManufacturingFocus } from "@/components/about/ManufacturingFocus";
import { ConsistencyQuality } from "@/components/about/ConsistencyQuality";
import { Confidentiality } from "@/components/about/Confidentiality";
import { WhyRegalia } from "@/components/about/WhyRegalia";

export const metadata: Metadata = {
  title: "About Us | Regalia Foods LLP - B2B Food Blending Partner",
  description:
    "Learn about Regalia Foods LLP, our manufacturing philosophy, contract blending capabilities, recipe confidentiality, and disciplined approach to batch consistency.",
  openGraph: {
    title: "About Us | Regalia Foods LLP",
    description:
      "India-based food manufacturing and blending company focused on helping businesses produce consistent, high-quality spice and dry-blend products.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <ManufacturingFocus />
      <ConsistencyQuality />
      <Confidentiality />
      <WhyRegalia />
    </>
  );
}
