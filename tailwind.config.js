/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F7F5F0',
          200: '#EFECE6',
          300: '#E2DDD3',
        },
        noir: {
          950: '#050505',
          900: '#0B0B0B',
          800: '#161616',
          700: '#222222',
        },
        gold: {
          DEFAULT: '#B59A5B',
          muted: '#9C8B6B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
