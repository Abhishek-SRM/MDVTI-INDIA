/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        // Colors use CSS variables so updating variables updates Tailwind utilities
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-light': 'var(--color-primary-light)',

        // Neutrals
        'bg-light': 'var(--color-bg-light)',
        surface: 'var(--color-surface)',
        'border-color': 'var(--color-border)',
        'text-muted': 'var(--color-text-muted)',
        'text-primary': 'var(--color-text-primary)',

        // Supporting Neutrals
        'gray-secondary': 'var(--color-gray-secondary)',
        'gray-hover': 'var(--color-gray-hover)',

        // Soft Accent Colors
        sage: 'var(--color-primary)',
        'sage-light': 'var(--color-primary-light)',
        'sage-dark': 'var(--color-primary-hover)',
        sand: 'var(--color-sand)',
        stone: 'var(--color-stone)',

        // Button specific
        'btn-secondary-hover': 'var(--color-btn-secondary-hover)',
      },
    },
  },
  plugins: [],
}