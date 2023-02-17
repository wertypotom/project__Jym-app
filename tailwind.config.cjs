/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // configuring our files, usually from figma markup 

        // some color in between
        // lower number -> lighter the color
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        // primary: like white
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        // secondary: like black
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => {
        // same as for colors. Can be used for background gradients too

        return {
          // every time we refer to  "gradient-yellowred" we mean some particular gradient 
          "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
          "mobile-home": "url('./assets/HomePageGraphic.png')",
        }
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      }
    },
    screens: {
      xs: '480px',
      sm: '786px',
      md: '1060px'
    }
  },
  plugins: [],
}