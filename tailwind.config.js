/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(34, 211, 238, 0.25)',
        soft: '0 18px 60px rgba(15, 23, 42, 0.18)',
      },
      animation: {
        pulseLine: 'pulseLine 2.8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        scan: 'scan 4s linear infinite',
      },
      keyframes: {
        pulseLine: {
          '0%, 100%': { opacity: '0.2', transform: 'scaleX(0.55)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
