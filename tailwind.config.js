/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      darkblackishblue: "#19202D",
      darkgrayishblue: "#48556A",
      lightgrayishblue: "#ECF2F8",
      primary: "#CFCFCF",
      white: "#FFFFFF",
      violet: {
        DEFAULT: "#733FC8",
        light: "#A775F1",
      },
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
