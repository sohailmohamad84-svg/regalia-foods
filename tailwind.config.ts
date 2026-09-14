import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F2F4FA",
          100: "#E3E7F4",
          200: "#C6CEE7",
          300: "#9EACD4",
          400: "#6B81BC",
          500: "#3D539B",
          600: "#2B3D7B",
          700: "#243265",
          800: "#1E2456", // Main Brand Navy
          900: "#171C43",
          950: "#0D1028",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F3ECD6",
          200: "#E8D9AD",
          300: "#DCC381",
          400: "#D3B25E",
          500: "#C9A64B", // Main Brand Gold
          600: "#B08A38",
          700: "#8D6B2B",
          800: "#6C5124",
          900: "#4D391C",
          950: "#2E210E",
        },
        warm: {
          50: "#FCFCF9",
          100: "#FAF9F5", // Background Warm White / Ivory
          200: "#F4F2EA",
          300: "#ECE8DD",
          400: "#DFDACB",
          500: "#CCC4B0",
          600: "#B1A790",
        },
        charcoal: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#666666",
          600: "#4D4D4D",
          700: "#333333",
          800: "#222222",
          900: "#141414",
          950: "#0A0A0A",
        },
        spice: {
          saffron: "#C46210",
          cinnamon: "#8B4513",
          cardamom: "#3F5643",
          terracotta: "#A34828",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(14, 18, 43, 0.05), 0 1px 2px -1px rgba(14, 18, 43, 0.03)",
        card: "0 4px 20px -2px rgba(14, 18, 43, 0.06), 0 2px 6px -1px rgba(14, 18, 43, 0.03)",
        elevated: "0 12px 32px -4px rgba(14, 18, 43, 0.10), 0 4px 12px -2px rgba(14, 18, 43, 0.04)",
        gold: "0 4px 20px -2px rgba(201, 166, 75, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
