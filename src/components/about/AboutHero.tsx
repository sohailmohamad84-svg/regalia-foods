import React from "react";
import Image from "next/image";
import { siteImages } from "@/config/images";
import { Container } from "@/components/ui/Container";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative bg-navy-950 text-warm-100 pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden border-b border-navy-800">
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.facility.src}
          alt="Regalia Foods Manufacturing Facility"
          fill
          priority
          className="object-cover object-center opacity-30 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900/90 border border-gold-500/40 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-6">
            <span>About Regalia Foods LLP</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-50 tracking-tight leading-[1.18] mb-6">
            Your Dedicated Dry-Blend & Spice Manufacturing Partner
          </h1>

          <p className="text-base sm:text-lg text-warm-200/90 leading-relaxed font-sans">
            Built to provide food brands, restaurant chains, and commercial food businesses with reliable, scalable, and confidential contract blending services.
          </p>
        </div>
      </Container>
    </section>
  );
};
