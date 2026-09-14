"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleOpenMobileNav = React.useCallback(() => {
    setMobileNavOpen(true);
  }, []);

  const handleCloseMobileNav = React.useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Use higher threshold on homepage so subtle scrolls within hero don't cause jitter
      const threshold = isHomePage ? 80 : 20;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3"
            : isHomePage
            ? "py-4 sm:py-5"
            : "py-3.5"
        }`}
      >
        {/* Background Layer with Backdrop Blur & Border */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-300 pointer-events-none ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-warm-300/80"
              : isHomePage
              ? "bg-gradient-to-b from-navy-950/70 via-navy-950/20 to-transparent border-b border-transparent"
              : "bg-white/90 backdrop-blur-md border-b border-warm-200"
          }`}
        />
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 transition-transform hover:opacity-95 group"
              aria-label={`${siteConfig.name} - Home`}
            >
              <div className="relative h-11 sm:h-12 w-16 sm:w-20 shrink-0">
                <Image
                  src={siteConfig.brand.logoPrimary}
                  alt={siteConfig.legalName}
                  fill
                  className="object-contain object-left drop-shadow-xs"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif font-bold text-base sm:text-lg tracking-tight leading-none transition-colors ${
                    !isScrolled && isHomePage ? "text-warm-50" : "text-navy-950"
                  }`}
                >
                  REGALIA FOODS
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold uppercase mt-0.5 transition-colors ${
                    !isScrolled && isHomePage ? "text-gold-300" : "text-gold-600"
                  }`}
                >
                  LLP &bull; Manufacturing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-medium tracking-wide transition-all rounded-sm relative group ${
                      !isScrolled && isHomePage
                        ? isActive
                          ? "text-gold-300 font-semibold"
                          : "text-warm-100 hover:text-white"
                        : isActive
                        ? "text-navy-900 font-semibold"
                        : "text-charcoal-700 hover:text-navy-800"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gold-500 transition-transform origin-left duration-200 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/contact"
                variant={!isScrolled && isHomePage ? "gold" : "primary"}
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                href="/contact"
                variant="gold"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                Quote
              </Button>
              <button
                type="button"
                onClick={handleOpenMobileNav}
                className={`min-h-[42px] min-w-[42px] flex items-center justify-center rounded-sm transition-colors touch-manipulation cursor-pointer ${
                  !isScrolled && isHomePage
                    ? "text-warm-100 hover:text-white bg-navy-900/40 active:bg-navy-900/60"
                    : "text-charcoal-800 hover:text-navy-900 hover:bg-warm-200 active:bg-warm-300"
                }`}
                aria-label="Open Navigation Menu"
                aria-expanded={mobileNavOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={handleCloseMobileNav}
      />
    </>
  );
};
