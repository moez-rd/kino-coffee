/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9f8',
          100: '#f0eff0',
          200: '#d9d9d9',
          300: '#bcb7be',
          400: '#959097',
          500: '#786f75',
          600: '#625459',
          700: '#4b3f44',
          800: '#342c30',
          900: '#211c1f'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        trocchi: ['Trocchi', 'serif'],
        'libre-baskerville': ['Libre Baskerville', 'serif']
      }
    }
  },
  plugins: []
};
