import React from "react";
import Image from "next/image";
import { siteImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, ShieldCheck, Factory } from "lucide-react";

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm-100 border-b border-warm-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600">
              <span className="w-5 h-[1.5px] bg-current inline-block" />
              <span>Who We Are</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight leading-tight">
              Enabling Food Businesses to Outsource Blending While Retaining Full Brand Ownership
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
              Regalia Foods LLP is an India-based food manufacturing and blending company focused on helping businesses produce consistent, high-quality spice and dry-blend products. Our core capability is contract and custom blending, allowing customers to outsource manufacturing while retaining control over their recipes, specifications and brand.
            </p>

            <p className="text-base text-charcoal-600 leading-relaxed font-sans">
              Whether you already have an established formulation or are developing a new product, Regalia Foods can support the journey from formulation trials to repeat commercial production.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-sm border border-warm-300/80 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-navy-50 text-navy-800 flex items-center justify-center">
                    <Factory className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-base">
                    Pure Manufacturing Focus
                  </h4>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  We don't compete on retail grocery shelves. Our entire capacity is engineered to power our clients' products.
                </p>
              </div>

              <div className="bg-white p-5 rounded-sm border border-warm-300/80 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-navy-50 text-navy-800 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-navy-950 text-base">
                    Recipe Protection
                  </h4>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Your formulations remain your intellectual property. All commercial projects are conducted under binding confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-warm-300 shadow-card bg-navy-950">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src={siteImages.rawMaterials.src}
                  alt="Precision spice handling and botanical ingredient sorting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider block mb-1">
                    Ingredient Sourcing & Batching
                  </span>
                  <p className="text-sm text-warm-100/90 font-sans leading-relaxed">
                    Sourcing uncompromised raw botanicals and whole spices to ensure true flavor balance and authentic aroma.
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
