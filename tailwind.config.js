/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        euclid: ["Euclid Circular B", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#191919",
          100: "#3d3d3d",
        },
        blue: "#4545FE",
        grey: "#606060",
      },
    },
  },
  plugins: [],
};
