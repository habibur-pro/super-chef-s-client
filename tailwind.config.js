/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        my_primary: '#e4542a',
        primary_hover:'#ff8b00'
      },

    fontFamily: {
      my: 'LemonadeStand',
      super: 'Bruno Ace SC'
    }
    },

  },
  plugins: [],
}

