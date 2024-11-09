/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      darkblackishblue: "#19202D",
      darkgrayishblue: "#48556A",
      lightgray: "#CFCFCF",
      lightgrayishblue: "#ECF2F8",
      white: "#FFFFFF",
      violet: {
        DEFAULT: "#733FC8",
        light: "#A775F1",
      },
    },
    extend: {
      boxShadow: {
        card: "2.5rem 3.75rem 3.125rem -2.9375rem rgba(72, 85, 106, 0.25)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
