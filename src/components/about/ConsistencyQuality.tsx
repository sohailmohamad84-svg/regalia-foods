import React from "react";
import Image from "next/image";
import { siteImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Scale, CheckCircle2, Shield, AlertCircle } from "lucide-react";

export const ConsistencyQuality: React.FC = () => {
  return (
    <section id="consistency-quality" className="py-20 sm:py-28 bg-warm-100 border-b border-warm-300">
      <Container>
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">
            <span className="w-5 h-[1.5px] bg-current inline-block" />
            <span>Consistency & Quality Focus</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Disciplined Process Control for Repeatable Production
          </h2>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
            In B2B contract manufacturing, consistency is paramount. A restaurant chain or packaged food brand cannot afford variation in heat, color, or salt levels across different deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-7 rounded-sm border border-warm-300 shadow-xs">
            <div className="w-10 h-10 rounded-sm bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-gold-600" />
            </div>
            <h3 className="font-serif font-bold text-navy-950 text-lg mb-2">
              Precise Weighing & Formulation
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
              Calibrated digital batch weighing according to approved recipe percentages to prevent flavor drift and maintain target yields.
            </p>
          </div>

          <div className="bg-white p-7 rounded-sm border border-warm-300 shadow-xs">
            <div className="w-10 h-10 rounded-sm bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5 text-gold-600" />
            </div>
            <h3 className="font-serif font-bold text-navy-950 text-lg mb-2">
              Homogeneous Dispersion
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
              Controlled ribbon mixing durations and sequenced ingredient addition ensure micron-level ingredients (e.g., spice extracts, citric acid, oleoresins) are uniformly distributed.
            </p>
          </div>

          <div className="bg-white p-7 rounded-sm border border-warm-300 shadow-xs">
            <div className="w-10 h-10 rounded-sm bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-gold-600" />
            </div>
            <h3 className="font-serif font-bold text-navy-950 text-lg mb-2">
              Moisture & Aroma Integrity
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
              Careful handling of volatile essential oils and hygienic moisture-barrier packing to preserve pungent aromas and prevent clumping.
            </p>
          </div>
        </div>

        {/* Responsible Factory Compliance Statement */}
        <div className="bg-white/80 rounded-sm border border-warm-300 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-navy-800 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-navy-950 text-sm">
                Compliance & Facility Documentation
              </h4>
              <p className="text-xs text-charcoal-600 mt-1 leading-relaxed max-w-2xl">
                Official regulatory registrations, factory licenses, food safety certifications, and allergen control declarations are provided directly to prospective clients during technical onboarding and contract commercial evaluation.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-navy-800 bg-warm-200 px-3 py-1.5 rounded-xs border border-warm-300 shrink-0">
            Available on NDA & Inquiry
          </span>
        </div>
      </Container>
    </section>
  );
};
