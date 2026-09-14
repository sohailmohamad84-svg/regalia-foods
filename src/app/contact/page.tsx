import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageSquare, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote & Contact Us | Regalia Foods LLP",
  description:
    "Tell us what you want to manufacture. Inquire about custom spice blending, contract manufacturing, pilot trial batches, and dry seasoning production.",
  openGraph: {
    title: "Contact Regalia Foods LLP | Custom Blending Manufacturing",
    description: "Submit your recipe specifications or dry food manufacturing requirements.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-warm-100 min-h-screen pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-xs font-semibold uppercase tracking-widest text-gold-300 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Commercial Inquiries</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Tell Us What You Want to Manufacture.
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
            Whether you have an established proprietary formulation ready for scale or need pilot batch support for a new spice or seasoning blend, our contract blending team is here to assist.
          </p>
        </div>

        {/* 2-Column Layout: Form (7 cols) + Contact Details & Map (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Contact Details & Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white border border-warm-300 p-6 sm:p-8 rounded-sm shadow-subtle space-y-6">
              <h3 className="font-serif text-xl font-bold text-navy-950 border-b border-warm-200 pb-4">
                Commercial & Facility Contacts
              </h3>

              <div className="space-y-4 text-sm text-charcoal-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xs bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider">
                      Business Enquiries Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-navy-900 hover:text-gold-600 transition-colors break-all"
                    >
                      {siteConfig.contact.displayEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xs bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider">
                      Telephone / Quotation Desk
                    </span>
                    <span className="font-medium text-navy-900">
                      {siteConfig.contact.displayPhone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xs bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider">
                      Manufacturing Facility & Head Office
                    </span>
                    <span className="font-medium text-navy-900 block">
                      {siteConfig.legalName}
                    </span>
                    <span className="text-charcoal-600 text-xs">
                      India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xs bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-gold-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-charcoal-500 uppercase tracking-wider">
                      Operating Hours
                    </span>
                    <span className="text-charcoal-700 text-xs">
                      {siteConfig.contact.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* NDA Guarantee */}
              <div className="pt-4 border-t border-warm-200">
                <div className="bg-navy-900 text-warm-100 p-4 rounded-xs text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-gold-300 font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Proprietary Recipe Protection</span>
                  </div>
                  <p className="text-warm-200/80 leading-relaxed font-sans">
                    We routinely execute mutual non-disclosure agreements prior to reviewing proprietary recipes, technical specifications, or specialized spice formulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Facility Location Section / Map Placeholder */}
            <div className="bg-white border border-warm-300 p-6 sm:p-8 rounded-sm shadow-subtle">
              <h3 className="font-serif text-lg font-bold text-navy-950 mb-3">
                Manufacturing Location
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                Regalia Foods LLP operates out of dedicated dry blending and packaging facilities strategically positioned for domestic logistics distribution across India and international freight forwarding ports.
              </p>

              {/* Clean Map Representation */}
              <div className="h-44 w-full bg-warm-200 rounded-xs border border-warm-300 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-navy-800 mb-2" />
                <span className="font-serif font-bold text-navy-950 text-sm">
                  Manufacturing Hub & Regional Logistics
                </span>
                <span className="text-xs text-charcoal-600 mt-1">
                  Full GPS coordinates and facility access passes provided upon commercial appointment
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
