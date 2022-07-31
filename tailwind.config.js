/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbfaf6',
          100: '#f9efd2',
          200: '#f3d7a5',
          300: '#e2b072',
          400: '#d08446',
          500: '#b86329',
          600: '#9b491b',
          700: '#783717',
          800: '#532612',
          900: '#36180c'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        trocchi: ['Trocchi', 'serif'],
        'libre-baskerville': ['Libre Baskerville', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
};
