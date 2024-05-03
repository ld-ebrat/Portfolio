/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '3/10': '30%',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) transparent"
        },
        ".scrollbar-webkt": {
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(32 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }

      addUtilities(newUilities, ["responsive", "hover"])
    }


  ],
}

