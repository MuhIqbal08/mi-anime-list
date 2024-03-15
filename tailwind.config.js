/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './src/components/**/*.{html,js, jsx}', './src/App.js', './public/index.html'],
  theme: {
    extend: {},
    colors: {
      primary: '#eeeeee',
      accent: '#ffc639',
      secondary: '#393e46',
      dark: '#222831',
    },
  },
  plugins: [],
};
