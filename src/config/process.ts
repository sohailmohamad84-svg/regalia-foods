import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Share Your Idea / Recipe",
    shortTitle: "Recipe & Specs",
    description:
      "Provide your target formulation, culinary recipe, benchtop sample, or desired flavor profile under strict confidentiality.",
    deliverables: [
      "Mutual Non-Disclosure Agreement (NDA)",
      "Ingredient & flavor specification review",
      "Batch target & packaging requirements alignment",
    ],
    iconName: "FileSpreadsheet",
  },
  {
    step: "02",
    title: "Trial & Formulation",
    shortTitle: "Trial Formulation",
    description:
      "Our blending specialists review particle dynamics, evaluate ingredient sourcing, and prepare controlled pilot trial samples.",
    deliverables: [
      "Pilot blending & dispersion testing",
      "Grind size & particle calibration",
      "Yield and cost optimization analysis",
    ],
    iconName: "FlaskConical",
  },
  {
    step: "03",
    title: "Sample Approval",
    shortTitle: "Client Approval",
    description:
      "Receive physical benchtop samples for culinary testing, sensory evaluation, and application checks by your team.",
    deliverables: [
      "Laboratory/kitchen trial sample dispatched",
      "Sensory review & refinement adjustments",
      "Final recipe sign-off & master sample lockdown",
    ],
    iconName: "CheckCircle2",
  },
  {
    step: "04",
    title: "Commercial Production",
    shortTitle: "Production",
    description:
      "Once approved, your blend enters scaled commercial production using disciplined batch mixing to ensure homogeneous uniformity.",
    deliverables: [
      "Standard Operating Procedure (SOP) execution",
      "Consistent industrial ribbon blending",
      "Batch traceability & quality inspection",
    ],
    iconName: "Factory",
  },
  {
    step: "05",
    title: "Packing / Bulk Supply",
    shortTitle: "Packing & Supply",
    description:
      "Blended goods are packaged into agreed food-grade containers or bulk packs, sealed, labeled, and prepared for dispatch.",
    deliverables: [
      "Food-grade moisture-barrier packaging",
      "Clear batch coding & storage guidelines",
      "Reliable scheduled delivery to your facility",
    ],
    iconName: "Truck",
  },
];
