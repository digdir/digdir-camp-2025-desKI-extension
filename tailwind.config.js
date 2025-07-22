// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand1: {
          base: 'var(--brand1-12)',
          background: 'var(--brand1-1)',
          text: 'var(--brand1-16)',
        },
        neutral: {
          background: 'var(--neutral-2)',
          text: 'var(--neutral-9)',
        },
        main: {
          text: 'var(--neutral-9)',
        },
      },
    },
  },
  plugins: [],
};
