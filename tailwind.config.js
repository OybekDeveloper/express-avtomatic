/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F68B1F',
        thin: '#606062',
        white: '#ffffff',
        red:'#EC1B2E',
        primaryBg:"#F7F8F8",
        secondaryBg:"#F2F2F2"
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}