/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Inter", "sans-serif"],
    },
    colors: {
      highlight: "#7c3aed",
      textPrimary: "#0f172a",
      textSecondary: "#334155",
      surfacePrimary: "#FFF",
      surfaceSecondary: "#EDE9FE",
      hover: "#94A3B8",
      bg: "#F8FAFC",
    },
    extend: {},
  },
  plugins: [],
};
