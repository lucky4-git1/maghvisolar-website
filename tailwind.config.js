/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FEF0BF',
          300: '#FDE48F',
          400: '#FBD452',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        forest: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        ivory: {
          50: '#FCFCF9',
          100: '#F7F7F2',
          200: '#EDEDE2',
          300: '#DFE0D1',
        },
        obsidian: {
          800: '#1A202C',
          900: '#0F172A',
          950: '#070B14',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'tactile': '0 1px 2px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'tactile-hover': '0 2px 4px rgba(0,0,0,0.08), 0 12px 24px -4px rgba(0,0,0,0.08)',
        'inset-highlight': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
        'amber-glow': '0 0 20px -4px rgba(245, 158, 11, 0.35)',
      }
    },
  },
  plugins: [],
}
