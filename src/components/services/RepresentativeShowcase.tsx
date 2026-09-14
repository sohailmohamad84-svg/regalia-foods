import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { applicationsData } from "@/config/applications";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export const RepresentativeShowcase: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-warm-300">
      <Container>
        <SectionHeading
          eyebrow="Application Showcase"
          title="Representative Formulations & Dry Blends"
          description="Illustrating the breadth of textures, grinds, and flavor matrices we blend for our commercial partners. Every formulation is tailored to client specifications."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {applicationsData.map((item) => (
            <div
              key={item.id}
              className="bg-warm-100/70 border border-warm-300 rounded-sm overflow-hidden flex flex-col group hover:border-gold-500/80 transition-all duration-200"
            >
              <div className="relative h-48 w-full bg-navy-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold" size="sm" className="bg-white/95">
                    {item.category}
                  </Badge>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-950 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    {item.flavorProfile}
                  </p>
                </div>

                <div className="pt-3 border-t border-warm-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-charcoal-500 uppercase">
                    Texture: {item.specs.texture.split(" ")[0]}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-navy-800 hover:text-gold-600 inline-flex items-center gap-1 group/btn"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
