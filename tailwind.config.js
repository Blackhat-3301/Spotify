/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'GREEN': '#1DB954',
        'DARK': '#191414'
      },
      borderRadius: {
        'two': '2rem'
      }
    },
  },
  plugins: [],
}

