import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const FinalCta: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-navy-950 text-warm-100 overflow-hidden">
      {/* Background Texture & Layering */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={siteImages.powderTexture.src}
          alt="Spice blending texture background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-950/90" />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-xs text-gold-400 font-semibold uppercase tracking-widest mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Confidential Contract Blending</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-50 tracking-tight leading-tight mb-6">
          Have a recipe, formulation or product idea?
        </h2>

        <p className="text-lg sm:text-xl text-warm-200/90 leading-relaxed font-sans max-w-2xl mx-auto mb-10">
          Talk to Regalia Foods about bringing your blend to commercial production. We handle the blending and manufacturing so you can focus on your brand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            href="/contact"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Request a Quote
          </Button>
          <Button
            href="/about"
            variant="secondary"
            size="lg"
            className="bg-navy-900/90 text-warm-100 hover:bg-navy-800 border-navy-700/80"
          >
            Learn About Our Process
          </Button>
        </div>

        <div className="pt-8 border-t border-navy-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-warm-200/60 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Strict Recipe Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Pilot Trial Samples Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Dedicated B2B Toll Blending</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
