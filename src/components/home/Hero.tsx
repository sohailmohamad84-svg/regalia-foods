import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle, Scale, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-navy-950 text-warm-100 overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Background Image with Layered Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 filter contrast-110"
        />
        {/* Deep Industrial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-300">
              {siteConfig.positioning}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-warm-50 tracking-tight leading-[1.12] mb-6">
            Custom Spice & Dry Blend Manufacturing,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
              Built Around Your Recipe.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-warm-200/90 leading-relaxed font-sans max-w-3xl mb-10">
            Regalia Foods LLP is an India-based B2B manufacturing partner specialising in custom blending of spices, masalas, seasonings and dry sauce blends. From your recipe or product concept to commercial production, we help turn your formulation into a consistent finished blend.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
            <Button
              href="/contact"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Request a Quote
            </Button>
            <Button
              href="/products-services"
              variant="secondary"
              size="lg"
              className="bg-navy-900/80 text-warm-100 hover:bg-navy-800 border-navy-700/80 backdrop-blur-sm"
            >
              Explore Our Products & Services
            </Button>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-navy-800/80 text-warm-200/80 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Strict Formulation Confidentiality (NDA)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Repeatable Batch Consistency</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Pure-Play B2B Manufacturing Partner</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-warm-100 to-transparent pointer-events-none" />
    </section>
  );
};
