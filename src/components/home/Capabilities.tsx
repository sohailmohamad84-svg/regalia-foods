import React from "react";
import Link from "next/link";
import { ArrowRight, Cog, Flame, Sparkles, FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CapabilityCardProps {
  number: string;
  title: string;
  description: string;
  examples?: string[];
  icon: React.ReactNode;
  href: string;
}

const capabilityItems: CapabilityCardProps[] = [
  {
    number: "01",
    title: "Custom & Contract Blending",
    description:
      "Manufacture according to your approved recipe, formulation tolerances, or commercial specification. We operate as your dedicated production partner with strict batch repeatability.",
    icon: <Cog className="w-6 h-6 text-gold-500" />,
    href: "/products-services#custom-blending",
  },
  {
    number: "02",
    title: "Masala & Spice Blends",
    description:
      "Precision batching and blending for heritage Indian formulations and modern spice compositions, maintaining aromatic intensity, color, and balanced flavor.",
    examples: ["Biryani", "Nihari", "Pav Bhaji", "Chaat", "Curry", "Custom Blends"],
    icon: <Flame className="w-6 h-6 text-gold-500" />,
    href: "/products-services#spice-masalas",
  },
  {
    number: "03",
    title: "Dry Sauce & Seasoning Blends",
    description:
      "High-impact dry seasoning systems formulated for food service and processors. Soluble dry sauce bases, fiery peri-peri powders, and adhering rubs.",
    examples: ["Peri-Peri", "Marinades", "Rubs", "Dips", "Seasoning Powders"],
    icon: <Sparkles className="w-6 h-6 text-gold-500" />,
    href: "/products-services#dry-sauces",
  },
  {
    number: "04",
    title: "Product Development",
    description:
      "Collaborative development from kitchen benchtop concept and pilot trial batches to customer sample sign-off and scaled commercial manufacturing.",
    examples: ["Concept Refinement", "Benchtop Trials", "Sensory Samples", "Commercial Scale"],
    icon: <FlaskConical className="w-6 h-6 text-gold-500" />,
    href: "/products-services#product-development",
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm-100 relative">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Manufacturing & Contract Blending Capabilities"
          description="We deliver industrial blending precision tailored to your proprietary specifications, allowing your brand to scale without operational bottlenecks."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilityItems.map((item) => (
            <div
              key={item.number}
              className="group relative bg-white border border-warm-300 p-8 sm:p-10 rounded-sm shadow-subtle hover:shadow-card hover:border-gold-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top gold accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header row: Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-navy-50 flex items-center justify-center border border-navy-100 group-hover:bg-gold-50 group-hover:border-gold-200 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-navy-200 group-hover:text-gold-400 transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3 group-hover:text-navy-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {item.examples && (
                  <div className="mb-6 pt-4 border-t border-warm-200">
                    <span className="block text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                      Examples:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.examples.map((ex) => (
                        <span
                          key={ex}
                          className="text-xs px-2.5 py-1 bg-warm-100 text-navy-900 rounded-xs border border-warm-300/80 font-medium"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-gold-600 transition-colors"
                >
                  <span>Explore Manufacturing Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
