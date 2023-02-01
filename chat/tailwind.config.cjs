/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlue: { 900: "#1A1924", 800: "#282843" },
      purpleChat: "#633BBC",
      white: "#E1E1E6",
      onlineGreen: "#00B37E",
      green: "#07847E",
    },
    fontFamily: {
      main: ["Roboto"],
    },
    extend: {},
  },
  plugins: [],
};
