import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'light-bg': '#FFFFFF',
        accent: '#E63946',
        charcoal: '#1A1A1A',
        'warm-gray': '#E0E0E0',
        'off-black': '#0D0D0D',
        'muted-wc': '#888888',
      },
      spacing: {
        '30': '120px',
      },
      animation: {
        blink: 'blink 1s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'light-drift-1': 'lightDrift1 14s ease-in-out infinite',
        'light-drift-2': 'lightDrift2 18s ease-in-out infinite',
        'light-drift-3': 'lightDrift3 22s ease-in-out infinite',
        'line-drift-1': 'lineDrift1 10s ease-in-out infinite',
        'line-drift-2': 'lineDrift2 14s ease-in-out infinite',
        'line-drift-3': 'lineDrift3 18s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lightDrift1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translate(80px, -50px) scale(1.15)', opacity: '1' },
        },
        lightDrift2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(-70px, 40px) scale(1.2)', opacity: '1' },
        },
        lightDrift3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translate(50px, 60px) scale(1.1)', opacity: '0.9' },
        },
        lineDrift1: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '0.7', transform: 'translateY(-8px)' },
        },
        lineDrift2: {
          '0%, 100%': { opacity: '0.25', transform: 'translateX(0)' },
          '50%': { opacity: '0.65', transform: 'translateX(6px)' },
        },
        lineDrift3: {
          '0%, 100%': { opacity: '0.2', transform: 'translateY(0)' },
          '50%': { opacity: '0.6', transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}
