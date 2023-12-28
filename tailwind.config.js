/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/heroImage.jpeg')",
        'video-image': "url('/videoImage.png')"
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        background: {
          100: "#F5F5F5"
        },
        border: {
          100: "#826A6B"
        },
        borderVideo: {
          100: "#826A6B"
        },
        price: {
          100: "#853800"
        },
        darkGrey: {
          100: "#363636"
        },
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

