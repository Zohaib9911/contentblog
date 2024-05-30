const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
      animation: {
        slideUp: 'slideUp 2s ease-out',
        slideDown: 'slideDown 2s ease-out',
        slideLeft: 'slideLeft 2s ease-out',
        slideRight: 'slideRight 2s ease-out',
        fadeIn: 'fadeIn 2s ease-out',
        fadeOut: 'fadeOut 2s ease-out',
        zoomIn: 'zoomIn 2s ease-out',
        zoomOut: 'zoomOut 2s ease-out',
        rotate: 'rotate 2s linear',
        bounce: 'bounce 2s infinite',
      },
      colors: {
        primary: '#4A14B8',
      },
    },

  },
  plugins: [
    // ...
    flowbite.plugin(),
    require('tailwind-scrollbar'),
  ],
};

