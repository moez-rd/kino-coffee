/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: '#f2f9f9',
        //   100: '#deeeef',
        //   200: '#c0dee1',
        //   300: '#95c6cb',
        //   400: '#62a6ae',
        //   500: '#478a93',
        //   600: '#3e717c',
        //   700: '#365c65',
        //   800: '#334f57',
        //   900: '#2e444b'
        // },
        primary: {
          50: '#f9f7f3',
          100: '#f1ece3',
          200: '#e1d8c7',
          300: '#cebda3',
          400: '#bfa687',
          500: '#ab8864',
          600: '#9e7758',
          700: '#84614a',
          800: '#6c5040',
          900: '#584336'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        trocchi: ['Trocchi', 'serif'],
        'libre-baskerville': ['Libre Baskerville', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'diodrum-rounded': ['Diodrum Rounded', 'sans-serif']
      }
    }
  },
  plugins: [require('ps-scrollbar-tailwind')]
};
