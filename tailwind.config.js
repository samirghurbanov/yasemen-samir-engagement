/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fffdfa',
          100: '#fdfbf7',
          200: '#f7f2ea',
          300: '#eee5d8',
          400: '#e3d4c1',
          500: '#d5be0a',
        },
        champagne: {
          DEFAULT: '#e6c894',
          light: '#f5e8cf',
          dark: '#c79c5e',
          shimmer: '#fff5df',
        },
        gold: {
          50: '#faf6e8',
          100: '#f3e9c6',
          200: '#e7d394',
          300: '#dcb861',
          400: '#d4af37',
          500: '#c59b27',
          600: '#a27b1c',
          700: '#7f5c18',
        },
        charcoal: {
          DEFAULT: '#1c1917',
          muted: '#44403c',
          soft: '#78716c',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'breath': 'breath 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'wax-glow': 'waxGlow 2s infinite ease-in-out',
      },
      keyframes: {
        breath: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        waxGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.8), inset 0 0 18px rgba(255, 255, 255, 0.6)' },
        }
      },
      boxShadow: {
        'envelope': '0 25px 50px -12px rgba(28, 25, 23, 0.18), 0 0 35px rgba(212, 175, 55, 0.12)',
        'envelope-deep': '0 35px 70px -15px rgba(0, 0, 0, 0.25), 0 0 45px rgba(212, 175, 55, 0.2)',
        'card': '0 15px 35px -5px rgba(28, 25, 23, 0.12), 0 0 20px rgba(212, 175, 55, 0.08)',
        'seal': '0 10px 25px -5px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -3px 6px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
