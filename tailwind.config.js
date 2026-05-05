/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          900: '#050A1F',
          800: '#070F2B',
          700: '#0E163A',
          600: '#111A3A',
          500: '#1E2A4A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FCF6BA',
          dark: '#B38728',
          deep: '#BF953F',
        },
        cream: '#FDFBF7',
        slate: '#A8B2D1',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
};
