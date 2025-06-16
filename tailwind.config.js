/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          light: "#E6D9C2",
          medium: "#A67B5B",
          dark: "#5C4033",
          green: "#7C8B3B",
          clay: "#B08D57",
        },
      },
    },
  },
  plugins: [],
};
