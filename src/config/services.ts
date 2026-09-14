import { ServiceItem } from "@/types";
import { siteImages } from "./images";

export const servicesData: ServiceItem[] = [
  {
    id: "custom-blending",
    number: "01",
    title: "Custom & Contract Blending",
    subtitle: "Turnkey manufacturing executed to your exact recipe specifications",
    shortDescription:
      "Manufacture according to your approved recipe, formula, or custom specification with strict batch-to-batch consistency and confidential job-work capability.",
    fullDescription: [
      "Regalia Foods operates as a dedicated manufacturing extension of your business. Whether you are a national brand scaling production or a restaurant group standardizing signature blends, we execute custom dry blending according to your precise formulation tolerances.",
      "Our blending operations emphasize strict recipe adherence, homogeneous particle distribution, and disciplined batch manufacturing. Clients retain full ownership of their proprietary recipes and commercial identity while outsourcing the physical operational overhead.",
    ],
    keyHighlights: [
      "Execution strictly based on customer-approved formulas & specs",
      "Rigorous recipe confidentiality & mutual NDA protection",
      "Consistent mixing ratios & homogeneous ingredient dispersion",
      "Repeatable commercial batch production",
      "B2B job-work & contract toll blending capability",
    ],
    iconName: "Cog",
    image: siteImages.hero.src,
    href: "/products-services#custom-blending",
  },
  {
    id: "spice-masalas",
    number: "02",
    title: "Spice & Masala Blends",
    subtitle: "Authentic regional and bespoke Indian spice formulations",
    shortDescription:
      "Consistent commercial blending for classic and custom spice formulations, including Biryani, Nihari, Pav Bhaji, Chaat, and regional curries.",
    fullDescription: [
      "We provide specialized blending for complex culinary spice compositions. From layered multi-spice North Indian specialties to fragrant coastal blends, our manufacturing processes safeguard aromatic intensity, true color balance, and distinct flavor profiles.",
      "Each batch is blended using disciplined sequencing to preserve delicate volatile oils and achieve uniform particle consistency across full production cycles.",
    ],
    keyHighlights: [
      "Biryani Masala & specialty meat blend manufacturing",
      "Slow-cooked aromatic profiles (Nihari, Korma, Haleem)",
      "High-acid tangy blends (Chaat Masala, Amchoor formulations)",
      "Street-food & fast-casual staples (Pav Bhaji, Chole, Sambar)",
      "Tandoori, Tikka, and BBQ grill seasonings",
      "Fully customized regional and proprietary masala recipes",
    ],
    examples: [
      "Biryani Masala",
      "Nihari Masala",
      "Pav Bhaji Masala",
      "Chaat Masala",
      "Curry Masalas",
      "Tandoori / Tikka Blends",
      "Regional Indian Masalas",
      "Custom Proprietary Formulas",
    ],
    iconName: "Flame",
    image: siteImages.rawMaterials.src,
    href: "/products-services#spice-masalas",
  },
  {
    id: "dry-sauces",
    number: "03",
    title: "Dry Sauce, Marinade & Seasoning Blends",
    subtitle: "Engineered dry powder systems for modern QSRs, snacks, and meat processors",
    shortDescription:
      "Advanced dry seasoning bases, fiery Peri-Peri mixes, meat rubs, snack dusts, and reconstituted dry sauce blends built for high-yield food service.",
    fullDescription: [
      "Designed for modern fast-casual chains, commercial kitchens, and snack manufacturers, our dry sauce and seasoning systems deliver instant solubility, strong surface adhesion, and explosive flavor punch.",
      "We manufacture dry marinades that bind effectively to poultry and meats, specialty dusts calibrated for fried foods and chips, and shelf-stable dry sauce bases that reconstitute effortlessly.",
    ],
    keyHighlights: [
      "Signature Peri-Peri dry blends (mild to extra fiery)",
      "Dry sauce bases formulated for quick hot/cold reconstitution",
      "Deep-penetrating meat, poultry, and seafood rubs",
      "Snack & french fry dusts with optimized electrostatic clinging",
      "Dip powders and savory beverage seasoning dry mixes",
      "Custom salt-controlled and MSG-free formulations available",
    ],
    examples: [
      "Peri-Peri Dry Blends",
      "Dry Sauce Bases",
      "Meat & Poultry Marinades",
      "Steak & Barbecue Rubs",
      "Dip Powders & Seasoning Mixes",
      "Fries & Chip Seasonings",
      "Extruded Snack Dusts",
      "Savory Sprinkle Blends",
    ],
    iconName: "Sparkles",
    image: siteImages.powderTexture.src,
    href: "/products-services#dry-sauces",
  },
  {
    id: "product-development",
    number: "04",
    title: "Product Development & Trials",
    subtitle: "From benchtop concept to validated commercial batch runs",
    shortDescription:
      "Iterative sample formulation, benchtop pilot batches, customer sensory approval, and disciplined scale-up to commercial production.",
    fullDescription: [
      "Developing a new dry food product requires bridging the gap between kitchen culinary concepts and industrial manufacturing realities. Regalia Foods assists brands in transitioning formulations from kitchen experimentation to repeatable commercial mixing.",
      "We produce controlled benchtop samples for your culinary team's evaluation, refine grind size and ingredient ratios based on feedback, and establish stable standard operating procedures before full-scale manufacturing.",
    ],
    keyHighlights: [
      "Benchtop sample formulation and culinary prototyping",
      "Pilot test batching prior to full commercial commitment",
      "Ingredient ratio optimization for cost, yield, and consistency",
      "Particle size and grind calibration for targeted mouthfeel",
      "Transparent scale-up pathway with customer approval milestones",
    ],
    iconName: "FlaskConical",
    image: siteImages.qualityControl.src,
    href: "/products-services#product-development",
  },
  {
    id: "bulk-private-label",
    number: "05",
    title: "Private Label & Bulk Supply",
    subtitle: "Dependable outsourced manufacturing for food brands and distributors",
    shortDescription:
      "Industrial bulk manufacturing packed for commercial kitchens or packaged for client brand distribution. Discuss your volume needs with our team.",
    fullDescription: [
      "Regalia Foods provides flexible contract manufacturing arrangements tailored to your supply chain. We supply commercial food-service operations with moisture-resistant bulk poly-lined packs, and collaborate with brand owners seeking finished, packaged goods ready for wholesale or retail channels.",
      "Every batch is labeled with batch identifiers, production timestamps, and storage handling guidelines to ensure seamless traceability in your distribution pipeline.",
    ],
    keyHighlights: [
      "Food-grade bulk supply for QSR commissaries & cloud kitchens",
      "Flexible packaging formats discussed upon commercial inquiry",
      "Clear batch coding, labeling, and traceability documentation",
      "Scheduled contract supply to stabilize your operational inventory",
      "Tailored contract manufacturing agreements for commercial buyers",
    ],
    iconName: "Boxes",
    image: siteImages.bulkPackaging.src,
    href: "/products-services#bulk-private-label",
  },
];
