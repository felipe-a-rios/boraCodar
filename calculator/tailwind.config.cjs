/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#807ECE",
      purpleGradient: "#8E7ECE",
      purpleEqual: "#7F45E2",
      purpleButton: "#462878",
      calculatorBg: "#2D2A37",
      textGray: "#6B6B6B",
      textWhite: "#EBEBEB",
      textPurple: "#975DFA",
    },
    fontFamily: {
      main: ["Rubik"],
    },
    extend: {},
  },
  plugins: [],
};
