/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,svg}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2F5F9",
        secondary: "#FF9C1A",
        minor: "#EC1B09",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
