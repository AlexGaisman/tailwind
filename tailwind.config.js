const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', 
          './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
      transparent: 'transparent',
      current:'currentColor',
      // indigo:colors.indigo,
      // red:colors.rose,
      'regal-blue': '#243c5a',
       primary: '#5c6ac4',
      // secondary: '#ecc94b',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
