/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orangeDark':'#D38402',
        'orangeMedium':'#F09B0F',
        'orangeLight':'#FFCD7C',
        'grayD':'#1E1E1E',
        'grayM':'#282929',
        'grayL':'#333434'
      },
      fontFamily: {

        vazir: ['vazir'],

      },
    },
  },
  plugins: [],
}

