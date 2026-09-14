import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Regalia Foods LLP | Custom Spice & Dry Blend Manufacturing",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom spice blending",
    "contract spice manufacturing",
    "spice blend manufacturer India",
    "masala manufacturing",
    "custom masala manufacturing",
    "dry blend manufacturing",
    "seasoning manufacturer",
    "contract blending India",
    "private label spice manufacturing",
    "commercial seasoning powder",
    "dry sauce manufacturer",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/brand/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/brand/icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: "Regalia Foods LLP | Custom Spice & Dry Blend Manufacturing",
    description: siteConfig.description,
    images: [
      {
        url: "/brand/logo-primary.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.legalName} - Your Recipe. Our Manufacturing Expertise.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regalia Foods LLP | Custom Spice & Dry Blend Manufacturing",
    description: siteConfig.description,
    images: ["/brand/logo-primary.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Organization Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodManufacturer",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-primary.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.email,
    },
    knowsAbout: [
      "Contract Spice Blending",
      "Custom Masala Manufacturing",
      "Dry Sauce Formulations",
      "Seasoning Powder Manufacturing",
      "B2B Food Processing",
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-gold-500 selection:text-navy-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
