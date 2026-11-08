import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { navy: "#14283F", anthracite: "#252B32", ivory: "#F7F7F4", gold: "#B89A65", mist: "#E8EAED" },
    fontFamily: { serif: ["var(--font-playfair)", "serif"], sans: ["var(--font-inter)", "sans-serif"] },
  } }, plugins: [],
} satisfies Config;
