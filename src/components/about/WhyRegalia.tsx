import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ArrowRight } from "lucide-react";

export const WhyRegalia: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm-100 relative">
      <Container>
        <SectionHeading
          eyebrow="Why Regalia Foods?"
          title="Engineered for Outsized B2B Value"
          description="We provide the technical agility, recipe discipline, and commercial partnership required by demanding food brands and hospitality leaders."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.manufacturingPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white border border-warm-300 p-8 rounded-sm shadow-subtle hover:shadow-card hover:border-gold-500/80 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-sm bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-900 group-hover:bg-gold-50 group-hover:text-gold-600 group-hover:border-gold-300 transition-colors">
                    <DynamicIcon name={pillar.iconName} className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-lg font-bold text-warm-400 group-hover:text-gold-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-warm-200">
                <span className="text-xs font-semibold text-gold-700 tracking-wider uppercase">
                  Manufacturing Standard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action card */}
        <div className="mt-16 bg-navy-900 text-warm-100 p-8 sm:p-12 rounded-sm border border-navy-800 text-center max-w-4xl mx-auto shadow-elevated">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warm-50 mb-4">
            Evaluate Regalia for Your Next Production Run
          </h3>
          <p className="text-sm sm:text-base text-warm-200/80 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
            From pilot batch testing to multi-ton commercial contract supply, we are ready to discuss your specific dry blend parameters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm rounded-sm transition-all shadow-gold inline-flex items-center gap-2"
            >
              <span>Submit Blend Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products-services"
              className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-warm-100 font-medium text-sm rounded-sm border border-navy-700 transition-all inline-flex items-center gap-2"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
