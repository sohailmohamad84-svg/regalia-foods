import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { applicationsData } from "@/config/applications";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export const Applications: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm-100 relative">
      <Container>
        <SectionHeading
          eyebrow="Representative Applications"
          title="Engineered for Culinary Diversity & Scale"
          description="Illustrative examples of dry blend applications we manufacture for commercial food brands, QSRs, and distributors. We formulate strictly around your recipe requirements."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {applicationsData.map((app) => (
            <div
              key={app.id}
              className="group bg-white border border-warm-300 rounded-sm overflow-hidden shadow-subtle hover:shadow-card hover:border-gold-400/80 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Editorial Presentation */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-navy-950">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold" size="sm" className="backdrop-blur-sm bg-white/90">
                    {app.category}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-xs text-gold-300 font-medium tracking-wide">
                    Application Profile
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white leading-tight">
                    {app.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                    {app.flavorProfile}
                  </p>

                  {/* Manufacturing Specs Grid */}
                  <div className="bg-warm-100/80 rounded-xs p-3 border border-warm-200/80 mb-4 space-y-1.5 text-xs text-charcoal-700">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-500 font-medium">Texture:</span>
                      <span className="font-semibold text-navy-900">{app.specs.texture}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-500 font-medium">Heat Level:</span>
                      <span className="font-semibold text-navy-900">{app.specs.heatLevel}</span>
                    </div>
                  </div>

                  {/* Ideal For Tags */}
                  <div>
                    <span className="block text-[11px] font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                      Typical Commercial Uses:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {app.idealFor.map((use) => (
                        <span
                          key={use}
                          className="text-[11px] px-2 py-0.5 bg-warm-200 text-charcoal-700 rounded-xs font-medium"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-warm-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-navy-800 hover:text-gold-600 uppercase tracking-wider transition-colors group/link"
                  >
                    <span>Request Blend Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-charcoal-500 max-w-2xl mx-auto">
            <span className="font-semibold text-navy-900">Note:</span> These applications represent manufacturing capabilities. We formulate, refine, and package dry blends according to your specific commercial requirements and proprietary recipes.
          </p>
        </div>
      </Container>
    </section>
  );
};
