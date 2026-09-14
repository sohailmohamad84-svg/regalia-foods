import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Capabilities } from "@/components/home/Capabilities";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Applications } from "@/components/home/Applications";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Custom Spice & Dry Blend Manufacturing | Regalia Foods LLP",
  description:
    "India-based B2B manufacturing partner specialising in custom blending of spices, masalas, seasonings and dry sauce blends. Built around your recipe.",
  openGraph: {
    title: "Custom Spice & Dry Blend Manufacturing | Regalia Foods LLP",
    description:
      "Regalia Foods LLP is an India-based B2B manufacturing partner specialising in custom blending of spices, masalas, seasonings and dry sauce blends.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <HowItWorks />
      <Applications />
      <WhoWeServe />
      <FinalCta />
    </>
  );
}
