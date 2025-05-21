/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        japanese: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        'sakura': {
          50: '#fef2f6',
          100: '#fde6ed',
          200: '#fbd0e0',
          300: '#f9aac7',
          400: '#f47ba5',
          500: '#ea5082',
          600: '#d42e62',
          700: '#b31d4a',
          800: '#961b3f',
          900: '#801c39',
          950: '#4a0a1d',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
} 