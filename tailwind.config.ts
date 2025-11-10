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
        // Damascus-inspired palette
        charcoal: '#1A1A1A',
        damascus: '#1B4B7F', // Deep Syrian blue
        spice: '#C94A3D', // Vibrant red
        gold: '#DAA520', // Rich Damascus gold
        cream: '#F8F6F0', // Warm cream
        copper: '#B87333', // Damascus copper
        emerald: '#00796B', // Deep green
        jasmine: '#FEFAF0', // Light jasmine white
      },
      fontFamily: {
        'lalezar': ['var(--font-lalezar)', 'Cairo', 'sans-serif'],
        'cairo': ['var(--font-cairo)', 'sans-serif'],
        'sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
