/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/AllProductsBackground.png')"
      },
      spacing: {
        '128': '32rem',
      },
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
        main: ['Helvetica Neue', 'Playfair Display']
      }
    },
  },
  plugins: [],
}

