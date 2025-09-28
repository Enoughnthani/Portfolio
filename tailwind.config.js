const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        popup:'popup 1.2s ease-in-out'
      },
      keyframes: {
        popup:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'},
        },
      },
    },
  },
  plugins: [],
}
