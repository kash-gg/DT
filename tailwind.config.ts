import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'scheme-bg': 'var(--scheme-bg)',
        'scheme-text': 'var(--scheme-text)',
        'scheme-border': 'var(--scheme-border)',
        'scheme-accent': 'var(--scheme-accent)',
        'black-ink': '#1c1c1c',
        'off-white': '#faf9f6',
        'muted-maroon': '#8c2d3a',
        'muted-teal': '#2c5f63',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
