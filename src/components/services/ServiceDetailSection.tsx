import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { servicesData } from "@/config/services";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const ServiceDetailSection: React.FC = () => {
  return (
    <div className="bg-warm-100 divide-y divide-warm-300">
      {servicesData.map((service, index) => {
        const isEven = index % 2 === 1;

        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 sm:py-28 scroll-mt-24"
          >
            <Container>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : ""
                }`}
              >
                {/* Content Column (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-bold text-gold-600">
                      {service.number}
                    </span>
                    <span className="w-8 h-[1.5px] bg-gold-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-navy-900">
                      Service Capability
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg font-medium text-gold-800 leading-snug">
                    {service.subtitle}
                  </p>

                  <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                    {service.fullDescription.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlights List */}
                  <div className="pt-2">
                    <span className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-3">
                      Key Capabilities & Controls:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.keyHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700"
                        >
                          <div className="w-4 h-4 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples if present */}
                  {service.examples && (
                    <div className="pt-2 border-t border-warm-200">
                      <span className="block text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                        Representative Blends:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.examples.map((ex) => (
                          <span
                            key={ex}
                            className="text-xs px-2.5 py-1 bg-white text-navy-900 rounded-xs border border-warm-300 font-medium"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 bg-navy-800 hover:bg-navy-900 text-warm-100 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-subtle inline-flex items-center gap-2"
                    >
                      <span>Inquire for {service.title}</span>
                      <ArrowRight className="w-4 h-4 text-gold-400" />
                    </Link>
                  </div>
                </div>

                {/* Visual Column (5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative rounded-sm overflow-hidden border border-warm-300 shadow-card bg-navy-950">
                    <div className="relative h-[380px] sm:h-[440px] w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-2 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-1">
                          <DynamicIcon name={service.iconName} className="w-4 h-4" />
                          <span>Manufacturing Spec</span>
                        </div>
                        <p className="text-xs sm:text-sm text-warm-100/90 font-sans leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
};
