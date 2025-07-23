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
        // Existing brand colors (keep as-is)
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

        // Design system colors - organized by usage pattern
        'ds-neutral-background-subtle': 'var(--ds-color-neutral-background-subtle)',
        'ds-neutral-background-tinted': 'var(--ds-color-neutral-background-tinted)',
        'ds-neutral-text-default': 'var(--ds-color-neutral-text-default)',
        'ds-neutral-text-subtle': 'var(--ds-color-neutral-text-subtle)',
        'ds-neutral-surface-hover': 'var(--ds-color-neutral-surface-hover)',

        'ds-warning-surface-tinted': 'var(--ds-color-warning-surface-tinted)',
        'ds-warning-border-subtle': 'var(--ds-color-warning-border-subtle)',
        'ds-warning-surface-hover': 'var(--ds-color-warning-surface-hover)',
        'ds-warning-base-default': 'var(--ds-color-warning-base-default)',

        'ds-brand3-background-default': 'var(--ds-color-brand3-background-default)',
        'ds-brand3-background-tinted': 'var(--ds-color-brand3-background-tinted)',
        'ds-brand3-surface-default': 'var(--ds-color-brand3-surface-default)',
        'ds-brand3-border-subtle': 'var(--ds-color-brand3-border-subtle)',

        'ds-text-default': 'var(--ds-color-text-default)',
        'ds-main-text': 'var(--ds-color-main-text)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'chat': '20px',
        'chat-user': '20px 20px 4px 20px',
      },
      maxWidth: {
        'chat': '60%',
        'content': '600px',
        'form': 'md',
      },
      aspectRatio: {
        'square': '1 / 1',
      },
    },
  },
  plugins: [],
};