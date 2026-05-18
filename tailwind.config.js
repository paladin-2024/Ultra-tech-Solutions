/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#8B1A1A',
        'primary-dark': '#6B1212',
        'primary-light': '#a82020',
        accent: '#D4A017',
        surface: '#F7F9FC',
        'surface-2': '#EEF1F7',
        ink: '#0F0F0F',
        'ink-2': '#1A1A1A',
        muted: '#6B7280',
        'muted-2': '#9CA3AF',
        border: 'rgba(0,0,0,0.07)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'counter-glow': 'counterGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        counterGlow: {
          '0%, 100%': { textShadow: '0 0 0 transparent' },
          '50%': { textShadow: '0 0 30px rgba(139,26,26,0.2)' },
        },
      },
      boxShadow: {
        'card': '0 2px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
        'card-red': '0 8px 40px rgba(139,26,26,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'nav': '0 1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.04)',
        'mega': '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
        'badge': '0 4px 20px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)',
        'input': '0 0 0 3px rgba(139,26,26,0.12)',
        'btn-primary': '0 4px 20px rgba(139,26,26,0.3)',
        'btn-primary-hover': '0 8px 30px rgba(139,26,26,0.4)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
