/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '0.2': '2vw',
        '0.4': '4vw',
      },
      minHeight: {
        '0.2': '2vh',
        '0.4': '4vh',
      },
      fontFamily: {
        Poppins: 'Poppins',
        PoppinsSemiBold: 'PoppinsSemiBold'
      }
    },
  },
  plugins: [],
}