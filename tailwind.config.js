/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-primary':'rgba(39, 158, 255, 0.20)',
      }
    },
  },
  plugins: [],
}

