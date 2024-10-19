/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this path according to your project's file structure
  ],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgb(255, 161, 47)', // Custom color
      },
    },
  },
  plugins: [],
}
