import React from "react";
import { processSteps } from "@/config/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-warm-300 relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="The 5-Step Manufacturing Journey"
          description="A structured, transparent commercial pathway from your initial formulation or product concept to repeatable commercial delivery."
          align="center"
        />

        {/* Desktop Process Visualization (Horizontal on lg) */}
        <div className="hidden lg:block relative mt-8 mb-12">
          {/* Connecting Track */}
          <div className="absolute top-12 left-8 right-8 h-[2px] bg-warm-300 z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="flex flex-col items-start group">
                {/* Node with step number & icon */}
                <div className="w-16 h-16 rounded-sm bg-warm-100 border-2 border-warm-300 group-hover:border-gold-500 group-hover:bg-navy-900 transition-all duration-300 flex items-center justify-center mb-6 shadow-sm">
                  <span className="font-serif text-lg font-bold text-navy-900 group-hover:text-gold-400 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-950 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="mt-auto w-full pt-3 border-t border-warm-200">
                  <span className="block text-[11px] font-semibold text-gold-700 uppercase tracking-wider mb-1.5">
                    Key Milestone:
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.slice(0, 2).map((d) => (
                      <li key={d} className="text-[11px] text-charcoal-600 flex items-start gap-1">
                        <span className="text-gold-500 font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Process Visualization (Vertical Timeline) */}
        <div className="block lg:hidden mt-8">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-gold-400/80 space-y-10">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-navy-900 text-gold-400 border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm">
                  {step.step}
                </div>

                <div className="bg-warm-100/70 border border-warm-300 p-5 sm:p-6 rounded-sm">
                  <span className="text-xs font-bold text-gold-600 tracking-wider uppercase block mb-1">
                    Step {step.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-warm-200">
                    <span className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((d) => (
                        <li key={d} className="text-xs text-charcoal-600 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
