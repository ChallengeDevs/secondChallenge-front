import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "d-0": { max: "768px" },
      "d-1": { max: "345px" },
      "l-3": { min: "2550px" },
      mdOne: { max: "1335px" },
    },
    extend: {
      colors: {
        primary: "#F8F9FA",
        black: "#2D2D2D",
        gray: "#CED4DA",
        gradient1: "#F8F9FA",
        gradient2: "#CED4DA",
      },
    },
  },
  plugins: [],
};
export default config;
