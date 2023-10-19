/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#96BDC6", 
          200: "#7ABAC8"
        },
        secondary: {
          100: "#81968F",
          200: "#5E6D68"
        }
      },
      fontFamily: {
        main: ['Playfair Display']
      }
    },
  },
  plugins: [],
}

