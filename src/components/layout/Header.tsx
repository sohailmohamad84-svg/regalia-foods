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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-warm-300 py-3"
            : isHomePage
            ? "bg-gradient-to-b from-navy-950/60 via-navy-950/20 to-transparent py-4 sm:py-5"
            : "bg-white/90 backdrop-blur-md border-b border-warm-200 py-3.5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative block h-10 sm:h-12 w-48 sm:w-56 transition-transform hover:opacity-95"
              aria-label={`${siteConfig.name} - Home`}
            >
              {/* If at the top of hero on homepage with dark overlay, we can use the clean logo */}
              <div className="relative w-full h-full p-1 rounded-sm bg-white/90 backdrop-blur-xs px-2 shadow-xs flex items-center">
                <Image
                  src={siteConfig.brand.logoPrimary}
                  alt={siteConfig.legalName}
                  fill
                  className="object-contain object-left"
                  priority
                />
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
                onClick={() => setMobileNavOpen(true)}
                className={`p-2 rounded-sm transition-colors ${
                  !isScrolled && isHomePage
                    ? "text-warm-100 hover:text-white bg-navy-900/40"
                    : "text-charcoal-800 hover:text-navy-900 hover:bg-warm-200"
                }`}
                aria-label="Open Navigation Menu"
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
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
};
