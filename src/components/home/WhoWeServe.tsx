import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { audienceSegments } from "@/config/audiences";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export const WhoWeServe: React.FC = () => {
  return (
    <section id="who-we-serve" className="py-20 sm:py-28 bg-white border-b border-warm-300 relative">
      <Container>
        <SectionHeading
          eyebrow="B2B Sectors"
          title="Who We Partner With"
          description="We serve food industry stakeholders who need dependable, scalable, and confidential contract dry blending—without competing with their consumer brands."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceSegments.map((item) => (
            <div
              key={item.id}
              className="bg-warm-100/60 border border-warm-300/90 p-6 sm:p-7 rounded-sm hover:border-gold-500 hover:bg-white transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-subtle"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-800 mb-5 group-hover:bg-gold-50 group-hover:text-gold-600 group-hover:border-gold-300 transition-colors">
                  <DynamicIcon name={item.iconName} className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-950 mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-warm-200">
                <span className="block text-[11px] font-semibold text-navy-900 uppercase tracking-wider mb-1">
                  Value Delivered:
                </span>
                <p className="text-xs text-charcoal-600 italic">
                  &ldquo;{item.painPointSolved}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Assurance Banner */}
        <div className="mt-14 bg-navy-950 text-warm-100 p-8 sm:p-10 rounded-sm border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-warm-50 mb-2">
              Looking for a Dedicated Manufacturing Partner?
            </h4>
            <p className="text-sm text-warm-200/80 leading-relaxed font-sans">
              Whether you need regular contract blending or initial sample trials, our team is ready to evaluate your recipe requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm rounded-sm transition-all shadow-gold inline-flex items-center gap-2"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
