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
          primary: "#0A0A0A",     // Pure Black
          secondary: "#EF4444",   // Red Accent
          tertiary: "#FAFAFA",    // Clean White
        },
        surface: {
          DEFAULT: "#FAFAFA",
          muted: "#F5F5F5",
          raised: "#E5E5E5",
        },
        content: {
          primary: "#0A0A0A",
          secondary: "#525252",
          tertiary: "#A3A3A3",
        },
        editorial: {
          subtle: "#E5E5E5",
          medium: "#D4D4D4",
          strong: "#0A0A0A",
        },
        semantic: {
          success: "#16A34A",
          warning: "#CA8A04",
          error: "#EF4444",
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
        full: "9999px", // Only avatar / radio
      },
      boxShadow: {
        none: "none",
        focus: "0 0 0 2px #FAFAFA, 0 0 0 4px #0A0A0A",
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
