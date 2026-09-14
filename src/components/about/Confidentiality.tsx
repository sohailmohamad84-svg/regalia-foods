import React from "react";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Lock, FileText, EyeOff } from "lucide-react";

export const Confidentiality: React.FC = () => {
  return (
    <section id="confidentiality" className="py-20 sm:py-28 bg-navy-950 text-warm-100 border-b border-navy-800">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Intellectual Property Protection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-50 tracking-tight leading-tight mb-4">
            Custom & Confidential Manufacturing
          </h2>

          <p className="text-base sm:text-lg text-warm-200/90 leading-relaxed font-sans">
            Your proprietary recipe is your most valuable asset. We execute contract blending under strict confidentiality agreements to protect your formulas and market advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-navy-900/90 border border-navy-800 p-7 rounded-sm hover:border-gold-500/50 transition-colors">
            <FileText className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="font-serif font-bold text-warm-100 text-lg mb-2">
              Mutual Non-Disclosure
            </h3>
            <p className="text-xs sm:text-sm text-warm-200/70 leading-relaxed font-sans">
              Before reviewing your formulation or manufacturing specifications, we execute formal NDAs ensuring your recipe cannot be shared or duplicated.
            </p>
          </div>

          <div className="bg-navy-900/90 border border-navy-800 p-7 rounded-sm hover:border-gold-500/50 transition-colors">
            <Lock className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="font-serif font-bold text-warm-100 text-lg mb-2">
              Formulation Segregation
            </h3>
            <p className="text-xs sm:text-sm text-warm-200/70 leading-relaxed font-sans">
              Batch records and batching ratios are restricted to authorized production personnel to prevent unauthorized disclosure within our facilities.
            </p>
          </div>

          <div className="bg-navy-900/90 border border-navy-800 p-7 rounded-sm hover:border-gold-500/50 transition-colors">
            <EyeOff className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="font-serif font-bold text-warm-100 text-lg mb-2">
              Zero Brand Conflict
            </h3>
            <p className="text-xs sm:text-sm text-warm-200/70 leading-relaxed font-sans">
              We do not market competing retail masala brands. As pure B2B contract manufacturers, our success is tied exclusively to your commercial growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
