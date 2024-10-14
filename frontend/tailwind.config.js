/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      baron: ['Baron Kuffner', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif'],
      cheeseburga:['CheeseBurga', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      kumbh: ['Kumbh Sans', 'sans-serif']
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, #FFF280 37.4%, #FFA800 63.66%)',
    },
  },
  },
  plugins: [],
}