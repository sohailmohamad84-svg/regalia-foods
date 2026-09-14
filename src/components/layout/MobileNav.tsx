"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close only when pathname actually changes (user navigated to a different page)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative z-10 ml-auto h-full w-full max-w-sm bg-warm-100 shadow-2xl flex flex-col justify-between p-6 border-l border-warm-300 overflow-y-auto">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-warm-300">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="relative h-10 w-14 shrink-0">
                <Image
                  src={siteConfig.brand.logoPrimary}
                  alt={siteConfig.legalName}
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base tracking-tight text-navy-950 leading-none">
                  REGALIA FOODS
                </span>
                <span className="text-[9px] tracking-[0.2em] font-semibold text-gold-600 uppercase mt-0.5">
                  LLP &bull; Manufacturing
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Menu"
              className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 text-charcoal-700 hover:text-navy-900 rounded-sm hover:bg-warm-200 transition-colors touch-manipulation cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-2">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-sm transition-colors touch-manipulation ${
                    isActive
                      ? "bg-navy-800 text-warm-100 font-semibold"
                      : "text-charcoal-800 hover:bg-warm-200 hover:text-navy-900"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 ${
                      isActive ? "text-gold-400" : "text-charcoal-400"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA & Contact */}
        <div className="pt-6 border-t border-warm-300 space-y-4">
          <Button
            href="/contact"
            variant="gold"
            size="lg"
            fullWidth
            onClick={onClose}
          >
            Request a Quote
          </Button>

          <div className="space-y-2 text-xs text-charcoal-600 pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>{siteConfig.contact.displayEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>{siteConfig.contact.displayPhone}</span>
            </div>
          </div>

          <p className="text-[11px] text-charcoal-500 text-center">
            {siteConfig.positioning}
          </p>
        </div>
      </div>
    </div>
  );
};
