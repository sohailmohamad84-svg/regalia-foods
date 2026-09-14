import React from "react";
import Image from "next/image";
import { siteImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Cog, Sliders, Check, Layers } from "lucide-react";

export const ManufacturingFocus: React.FC = () => {
  return (
    <section id="manufacturing-focus" className="py-20 sm:py-28 bg-white border-b border-warm-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-warm-300 shadow-card bg-navy-950">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src={siteImages.facility.src}
                  alt="Industrial blending line"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider block mb-1">
                    Controlled Blending Operations
                  </span>
                  <p className="text-sm text-warm-100/90 font-sans leading-relaxed">
                    Hygienic stainless steel blending environments calibrated for uniform powder distribution and consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600">
              <span className="w-5 h-[1.5px] bg-current inline-block" />
              <span>Our Manufacturing Focus</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight leading-tight">
              Contract & Custom Blending Engineered for Brand Protection
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
              Our core capability is precision dry blending. Food companies, restaurant chains, and commercial brands partner with Regalia Foods when they need consistent, repeatable batch production without investing capital in industrial blending equipment or factory space.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">Customer-Supplied Recipes</h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    We manufacture strictly according to your approved ingredient specifications, tolerances, and sensory expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">Strict Batch Repeatability</h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Our standard operating procedures eliminate ingredient layering discrepancies, ensuring every production run matches the master sample.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-950 text-sm">B2B Job-Work & Toll Blending</h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Whether you supply your own botanical ingredients or require full turnkey batch manufacturing, we accommodate flexible engagement models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
