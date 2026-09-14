# Regalia Foods LLP — Official B2B Manufacturing Platform

A world-class, production-grade web platform for **Regalia Foods LLP**, an India-based B2B manufacturing and contract blending partner for spices, masalas, seasonings, and dry sauce blends.

> **Core Brand Positioning:**  
> *"Your Recipe. Our Manufacturing Expertise."*  
> *"Have a recipe or product idea? We can manufacture your blend."*

---

## 1. Architectural Overview & S.O.L.I.D Principles

The application is built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, adhering to strict software engineering and product design standards:

- **S — Single Responsibility Principle**: Each UI component performs one dedicated job (e.g. `QuoteForm`, `Hero`, `ServiceDetailSection`, `HowItWorks`, `Header`, `Footer`).
- **O — Open/Closed Principle**: Services, representative applications, B2B customer segments, and manufacturing process steps are rendered from typed data schemas (`src/config/*`). Extending the catalog or adding new services requires editing config files without altering JSX layouts.
- **L — Liskov Substitution Principle**: Reusable design tokens and UI primitives (`Button`, `Card`, `Badge`, `SectionHeading`, `Container`) share uniform polymorphic interfaces.
- **I — Interface Segregation Principle**: Granular TypeScript interfaces defined in `src/types/index.ts` ensure components only consume necessary props.
- **D — Dependency Inversion Principle**: Business configurations, contact endpoints, and brand references are decoupled from presentation layers.

---

## 2. Project Structure

```
Regalia/
├── public/
│   ├── brand/                      # Centralized brand identity assets
│   │   ├── logo-primary.jpeg       # Supplied master logo
│   │   ├── logo-primary.png        # Transparent background version
│   │   ├── logo-dark.png           # High-contrast dark surface version
│   │   ├── favicon.png             # Official emblem icon (from Favicon sqaure.png)
│   │   └── icon.png                # App icon / PWA
│   └── images/                     # Modular editorial B2B manufacturing photography
│       ├── hero-blending.jpg       # Industrial blending line
│       ├── facility-production.jpg # Clean production facility
│       ├── raw-spices.jpg          # Whole raw spices & botanicals
│       ├── quality-control.jpg     # Precision batch testing
│       ├── bulk-packaging.jpg      # Food-grade bulk dispatch
│       ├── powder-texture.jpg      # Finely milled masala powder
│       └── applications/           # 9 high-res representative blends
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, SEO & JSON-LD
│   │   ├── page.tsx                # Page 1: Home
│   │   ├── about/page.tsx          # Page 2: About Us
│   │   ├── products-services/page.tsx # Page 3: Products & Services
│   │   ├── contact/page.tsx        # Page 4: Contact Us (Enquiry & Quote Desk)
│   │   ├── privacy/page.tsx        # Privacy Policy & Formulation Confidentiality
│   │   ├── api/contact/route.ts    # Secure enquiry API route with honeypot & validation
│   │   ├── sitemap.ts              # Dynamic XML sitemap generator
│   │   ├── robots.ts               # Robots.txt generator
│   │   ├── globals.css             # Design tokens & accessibility styles
│   │   └── not-found.tsx           # Custom 404 page
│   ├── components/
│   │   ├── layout/                 # Header, MobileNav, Footer
│   │   ├── home/                   # Hero, Capabilities, HowItWorks, Applications, WhoWeServe, FinalCta
│   │   ├── about/                  # WhoWeAre, ManufacturingFocus, ConsistencyQuality, Confidentiality, WhyRegalia
│   │   ├── services/               # ServicesHero, ServiceDetailSection, RepresentativeShowcase
│   │   ├── forms/                  # QuoteForm, FormField
│   │   └── ui/                     # Button, Badge, Card, Container, SectionHeading, DynamicIcon
│   ├── config/
│   │   ├── site.ts                 # Brand configuration, placeholders, contacts, SEO
│   │   ├── navigation.ts           # Header, footer, and mobile nav links
│   │   ├── services.ts             # 5 core services data model
│   │   ├── applications.ts         # 9 representative applications data model
│   │   ├── process.ts              # 5-step manufacturing journey data model
│   │   ├── audiences.ts            # 8 B2B customer segments data model
│   │   └── images.ts               # Centralized image mapping
│   └── types/
│       └── index.ts                # Strict TypeScript definitions
├── .env.example                    # Environment variable documentation
├── tailwind.config.ts              # Tailored Regalia color palette & typography
├── tsconfig.json                   # TypeScript configuration
└── package.json
```

---

## 3. Brand Identity & Color Palette

The visual identity is anchored directly to the official Regalia Foods logo:

- **Primary Navy (`#1E2456`)**: Deep Royal Navy communicating industrial solidity, authority, and manufacturing credibility.
- **Accent Gold (`#C9A64B`)**: Warm Premium Gold reflecting heritage, quality, and precision.
- **Warm Neutral (`#FAF9F5`)**: Soft ivory background replacing stark clinical whites for warmth and sophistication.
- **Charcoal (`#1A1A1A`)**: High-contrast typography ensuring WCAG 2.1 AA readability.

### Updating Brand Assets
Replacing the logo requires modifying only the assets in `/public/brand/` or updating references in `src/config/site.ts`:
- Replace `/public/brand/logo-primary.png` with the new transparent logo.
- Replace `/public/brand/favicon.png` with the new square icon mark.

---

## 4. Getting Started & Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation
```bash
git clone <repository-url>
cd Regalia
npm install
```

### Environment Setup
Copy the example environment file:
```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@regaliafoods.com
NEXT_PUBLIC_CONTACT_PHONE=+91 98765 43210
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 5. Deployment Guide (Vercel)

1. Push your code to a GitHub repository.
2. Import the project into [Vercel](https://vercel.com).
3. Under **Project Settings > Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: Set to your preview URL or initial Vercel domain (e.g. `https://regalia-foods.vercel.app`).
   - `NEXT_PUBLIC_CONTACT_EMAIL`: Designated business enquiry email.
   - `NEXT_PUBLIC_CONTACT_PHONE`: Public quotation desk telephone.
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Commercial WhatsApp contact number.
4. Deploy the project. The build runs `next build` with zero external dependencies or build errors.

### Transitioning to the Final Production Domain
When `https://www.regaliafoods.com` is connected:
1. In Vercel, assign the custom domain under **Settings > Domains**.
2. Update `NEXT_PUBLIC_SITE_URL` to `https://www.regaliafoods.com`.
3. Vercel will automatically update canonical tags, `sitemap.xml`, and OpenGraph metadataBase dynamically without code changes.

---

## 6. Phase 2 Roadmap & Extension Points

The codebase is engineered to smoothly accommodate Phase 2 features:
- **Technical Document Downloads**: Specification sheets and safety data sheets (MSDS).
- **Recipe & File Uploads**: Direct S3/Blob storage integration inside `QuoteForm.tsx`.
- **Customer Portal & RFQ Tracking**: Authentication and batch status dashboards.
- **Factory Certifications Gallery**: Dedicated compliance verification section once plant audits and FSSAI/HACCP/ISO certifications are confirmed.
