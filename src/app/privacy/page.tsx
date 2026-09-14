import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Formulation Confidentiality | Regalia Foods LLP",
  description: "B2B privacy policy, trade secret protection, and mutual NDA standards at Regalia Foods LLP.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-warm-100 min-h-screen pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container size="md">
        <div className="bg-white border border-warm-300 p-8 sm:p-12 rounded-sm shadow-subtle space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-900 border border-navy-200 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              <span>B2B Trust & Legal</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              Privacy Policy & Formulation Confidentiality
            </h1>
            <p className="text-xs text-charcoal-500 mt-2">
              Last updated: September 2026 &bull; {siteConfig.legalName}
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-charcoal-700 space-y-6 font-sans leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-navy-950">
                1. Our Commitment to B2B Commercial Confidentiality
              </h2>
              <p>
                At {siteConfig.legalName}, we recognize that food formulations, dry-blend recipes, spice ratios, and ingredient specifications constitute critical commercial trade secrets. Our business model is founded upon strictly respecting and safeguarding the intellectual property of our clients.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-navy-950">
                2. Protection of Recipes & Proprietary Formulations
              </h2>
              <p>
                Any proprietary recipe, chemical specification, particle sizing parameter, or sensory profile provided to {siteConfig.legalName} for quotation, benchtop trial, or commercial manufacturing purposes is treated as strictly confidential.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>We enter into binding bilateral Non-Disclosure Agreements (NDAs) upon request.</li>
                <li>Access to customer formulations is restricted exclusively to authorized operational and technical personnel.</li>
                <li>We do not market retail consumer brands that compete with our contract manufacturing clients.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-navy-950">
                3. Information We Collect Through Our Website
              </h2>
              <p>
                When you submit an enquiry through our &ldquo;Request a Quote&rdquo; or contact forms, we collect business contact details including your name, company name, corporate email address, telephone/WhatsApp number, country/location, and project requirements. This information is utilized solely to evaluate manufacturing feasibility and respond to your commercial request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-navy-950">
                4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, monetize, or disclose your corporate information or customer data to third-party marketing brokers or advertising networks. Information is only transferred when necessary for legal compliance or logistics fulfillment with contracted freight carriers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-navy-950">
                5. Contacting Our Compliance Office
              </h2>
              <p>
                For questions regarding this policy, formulation non-disclosure agreements, or data management, please contact our administrative desk at:
              </p>
              <div className="p-4 bg-warm-100 rounded-sm border border-warm-300 text-xs">
                <p className="font-bold text-navy-950">{siteConfig.legalName}</p>
                <p>Attention: Commercial & Legal Compliance</p>
                <p>Email: {siteConfig.contact.displayEmail}</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
