/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Theme is toggled by adding/removing the `dark` class on <html>
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Primary bio-tech accent (teal → cyan family)
        helix: {
          50: '#effefa',
          100: '#c8fff1',
          200: '#91fee4',
          300: '#52f5d3',
          400: '#1ee0bd',
          500: '#05c4a4',
          600: '#009e87',
          700: '#057e6e',
          800: '#0a6359',
          900: '#0d524a',
          950: '#00322e',
        },
        // Neutral "lab" surface palette
        ink: {
          50: '#f6f8fa',
          100: '#eceff3',
          200: '#d5dbe3',
          300: '#b0bbc9',
          400: '#8596aa',
          500: '#66788f',
          600: '#516176',
          700: '#424f60',
          800: '#1c2430',
          900: '#121820',
          950: '#0a0e14',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(5,196,164,0.15), 0 10px 40px -10px rgba(5,196,164,0.35)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 1.8s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
      },
    },
  },
  plugins: [],
};
