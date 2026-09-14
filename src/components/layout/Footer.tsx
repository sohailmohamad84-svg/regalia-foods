import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNav, mainNav } from "@/config/navigation";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-warm-100 border-t border-navy-800 pt-16 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-navy-800/80">
          {/* Brand Column (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-16 shrink-0">
                <Image
                  src={siteConfig.brand.logoPrimary}
                  alt={siteConfig.legalName}
                  fill
                  className="object-contain object-left drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-tight text-warm-50 leading-none group-hover:text-gold-300 transition-colors">
                  REGALIA FOODS
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-gold-400 uppercase mt-1">
                  LLP &bull; Manufacturing
                </span>
              </div>
            </Link>

            <p className="text-sm text-warm-200/80 leading-relaxed max-w-sm">
              India-based B2B manufacturing and contract blending partner for spices, masalas, seasonings and dry sauce blends.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-navy-900 border border-navy-700/80 text-xs text-gold-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Confidential Custom Formulations</span>
              </div>
            </div>

            <div className="text-xs text-warm-200/60 italic">
              &ldquo;{siteConfig.positioning}&rdquo;
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-warm-200/80 hover:text-gold-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-[1.5px] bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Manufacturing
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.manufacturing.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-warm-200/80 hover:text-gold-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-[1.5px] bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Commercial Enquiries
            </h3>
            <div className="space-y-3 text-sm text-warm-200/80">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-warm-200/50 uppercase">Email</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-gold-300 transition-colors break-all"
                  >
                    {siteConfig.contact.displayEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-warm-200/50 uppercase">Telephone / RFQ</span>
                  <span>{siteConfig.contact.displayPhone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-warm-200/50 uppercase">Location</span>
                  <span>India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-warm-200/50 uppercase">Business Hours</span>
                  <span>{siteConfig.contact.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider group"
              >
                <span>Submit Manufacturing RFP</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-200/60">
          <div>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-300 transition-colors">
              Privacy Policy & Confidentiality
            </Link>
            <span>&bull;</span>
            <span className="text-warm-200/50">B2B Contract Manufacturing</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
