import { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Products & Services",
    href: "/products-services",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const footerNav = {
  manufacturing: [
    { label: "Custom & Contract Blending", href: "/products-services#custom-blending" },
    { label: "Spice & Masala Blends", href: "/products-services#spice-masalas" },
    { label: "Dry Sauces & Seasonings", href: "/products-services#dry-sauces" },
    { label: "Product Development & Trials", href: "/products-services#product-development" },
    { label: "Bulk & Private Label Supply", href: "/products-services#bulk-private-label" },
  ],
  company: [
    { label: "About Regalia Foods", href: "/about" },
    { label: "Manufacturing Philosophy", href: "/about#manufacturing-focus" },
    { label: "Consistency & Quality", href: "/about#consistency-quality" },
    { label: "Confidentiality & NDAs", href: "/about#confidentiality" },
    { label: "B2B Customer Segments", href: "/#who-we-serve" },
  ],
  enquiries: [
    { label: "Request a Quote", href: "/contact" },
    { label: "Manufacturing Partnership", href: "/contact" },
    { label: "Recipe Trial Request", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
