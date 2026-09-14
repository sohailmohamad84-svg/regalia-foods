import React from "react";
import Image from "next/image";
import { siteImages } from "@/config/images";
import { Container } from "@/components/ui/Container";

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative bg-navy-950 text-warm-100 pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden border-b border-navy-800">
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.powderTexture.src}
          alt="Dry spice blending texture"
          fill
          priority
          className="object-cover object-center opacity-30 filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900/90 border border-gold-500/40 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-6">
            <span>Manufacturing Capabilities</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-50 tracking-tight leading-[1.18] mb-6">
            Custom Blending & Dry Food Manufacturing Services
          </h1>

          <p className="text-base sm:text-lg text-warm-200/90 leading-relaxed font-sans">
            From replicating proprietary recipes with micron-level homogeneity to formulating new seasoning dusts, we provide disciplined industrial dry-blend manufacturing.
          </p>
        </div>
      </Container>
    </section>
  );
};
