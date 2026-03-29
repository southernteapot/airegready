/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#16171c',
        gold: {
          DEFAULT: '#c8a46e',
          light: '#e8d5a8',
          dark: '#a67c3d',
        },
        cream: '#eae5db',
        silver: '#9a9a9e',
        dim: '#72727a',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
