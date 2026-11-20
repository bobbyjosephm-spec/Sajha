/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#060607',
          900: '#0B0B0C', // Near-black base
          850: '#101012',
          800: '#161514', // Charcoal
          700: '#22201E',
          600: '#2A2826', // Smoke
          500: '#3D3A37',
          400: '#5A5652',
          300: '#8A857F',
          200: '#B8B3AC',
          100: '#E2DED8',
          50: '#FAF8F5',
        },
        brass: {
          50: '#FDF9F0',
          100: '#F6EEDB',
          200: '#EBD8B3',
          300: '#DEBF89',
          400: '#D4AF37', // Gold highlight
          500: '#C5A880', // Muted brass primary
          600: '#A68759',
          700: '#876B3F',
          800: '#644E2C',
          900: '#46361C',
        },
        champagne: {
          50: '#FCFBF8',
          100: '#F7F4EE',
          200: '#EFEAE0',
          300: '#E4DDD0',
          400: '#D5CBB9',
          500: '#C1B49D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-brass': '0 0 25px -5px rgba(197, 168, 128, 0.25)',
        'glow-brass-lg': '0 0 45px -5px rgba(197, 168, 128, 0.35)',
        'luxury-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'luxury': '0.15em',
      }
    },
  },
  plugins: [],
}
