import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0D1116",
          light: "#0F151C",
          card: "#0F151C",
          graphite: "#0D1116",
        },
        red: {
          brand: "#DC2625",
          section: "#DC2625",
          deep: "#9E2A2A",
          darkest: "#6B1A1A",
          hot: "#DC2625",
        },
        cream: {
          DEFAULT: "#FFF5E1",
          warm: "#f5efe0",
        },
        yellow: {
          cta: "#FACC15",
          warm: "#E8B30E",
          gold: "#D4A005",
        },
        teal: {
          accent: "#2ECFA1",
          bright: "#3BB8E0",
          glow: "#2ECFA1",
          muted: "#1a8a6e",
        },
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "ticker": "ticker 30s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
