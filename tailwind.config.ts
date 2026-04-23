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
        'black-ink': '#0a0a0a',
        'cinnabar': '#e8464e',
        'fall-green': '#dae8b6',
        'blue-chalk': '#dcd5ea',
        'misty-rose': '#ffd3f1',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'accent-cyan': '#00f2fe',
        'accent-blue': '#4facfe',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
