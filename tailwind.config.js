/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
          sm: { max: "640px" },
          md: { min: "641px", max: "1023px" },
          lg: { min: "1024px"},
      },
      colors: {
          grey: "#747474",
          green: 
          {
            10: "#00BF63",
            30: "#7ED957"
          }, 
          orange: {
              10: "#00BF63",
              30: "#FF914D",
          },
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
}

