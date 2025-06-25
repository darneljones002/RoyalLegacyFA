/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          light: "#e5e2d6",
          medium: "#f1d782",
          dark: "#966639",
          green: "#c5a468",
          clay: "#000000",
        },
      },
    },
  },
  plugins: [],
};
