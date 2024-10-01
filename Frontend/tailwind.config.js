/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],  // Montserrat
        sourceSans: ['Source Sans 3', 'sans-serif'], // Source Sans 3
      },
    },
  },
  plugins: [],
}

