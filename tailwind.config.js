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
        bounce:'bounce 2s ease-in-out forwards'
      },
      keyframes: {
        bounce:{
          '0%':{transform:'translateY(-40px)'},
          '25%':{transform:'translateY(20px)'},
          '50%':{transform:'translateY(-20px)'},
          '75%':{transform:'translateY(10px)'},
          '100%':{transform:"translateY(0px)"}
        }
      },
    },
  },
  plugins: [],
}
