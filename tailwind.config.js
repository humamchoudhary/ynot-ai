/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins"],
      body: ['"Open Sans"'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      dark: "#2B2D42",
      mid: "#03045E",
      cta: "#90E0EF",
      light: "#F6FFF8",
      hover: "#C9C9C9",
      cta2: "#8FDBE9",
      amber: "rgb(252 211 77)",
    },
    extend: {},
  },
  plugins: [],
};
