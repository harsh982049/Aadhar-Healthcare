/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
            hoverColor: "#ffbf69",
            brigthColor: "#ff9f1c",
            backgColor: "#2ec4b6",
            contactColor:"#e85d04",
            logoColor:"#f48c06",
      },
    },
  },
  plugins: [],
}
