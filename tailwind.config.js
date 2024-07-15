/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'firstCoffee': 'url("first.png")',
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'inter': ['Inter'],
        'pompiere': ['Pompiere'],
        'galada': ['Galada'],
        'montserrat': ['Montserrat'],
      }
    },
  },
  plugins: [],
}

