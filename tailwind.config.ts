import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#111111",     // 20% Ink Black
          secondary: "#D9541E",   // 5% Burnt Orange
          tertiary: "#F3EEE3",    // 75% Cream
        },
        surface: {
          DEFAULT: "#F3EEE3",     // 75% Cream base
          muted: "#EAE4D7",       // Warm muted cream
          raised: "#FAF7F0",      // Elevated cream surface
          white: "#FFFFFF",
        },
        content: {
          primary: "#111111",     // Ink Black
          secondary: "#3E3E3E",   // Slate charcoal
          tertiary: "#737373",    // Warm muted grey
        },
        editorial: {
          subtle: "#DDD6C7",      // Warm sand border
          medium: "#C8C0B0",      // Medium warm border
          strong: "#111111",      // Ink Black border
        },
        semantic: {
          success: "#2D5A27",     // Deep forest green
          warning: "#D9541E",     // Burnt Orange
          error: "#D9541E",       // Burnt Orange
        },
      },
      fontFamily: {
        display: ["'Archivo Black'", "Impact", "'Arial Black'", "sans-serif"],
        body: ["'Work Sans'", "-apple-system", "'Segoe UI'", "Helvetica", "sans-serif"],
        mono: ["'Space Mono'", "'Courier New'", "Consolas", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "9999px",
      },
      boxShadow: {
        none: "none",
        focus: "0 0 0 2px #F3EEE3, 0 0 0 4px #111111",
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        tight: "-0.01em",
        button: "0.06em",
        chip: "0.04em",
        overline: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
