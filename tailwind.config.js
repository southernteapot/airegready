/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F1E9DC',
        surface: '#FFFDF8',
        primary: '#20262B',
        secondary: '#646A6F',
        accent: {
          DEFAULT: '#9E7A56',
          light: '#B8956E',
          dark: '#86653F',
          text: '#FFF9F2',
        },
        border: '#D8CCBE',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
