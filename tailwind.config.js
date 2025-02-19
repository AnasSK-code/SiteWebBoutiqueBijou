/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amber: {
          500: '#D4AF37',
          600: '#B4941F',
        },
        luxury: {
          black: '#1a1a1a',
          gold: '#D4AF37',
          accent: '#8B7355',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B4941F 100%)',
      },
      animation: {
        shimmer: 'shimmer 3s infinite linear',
        float: 'float 3s ease-in-out infinite',
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};