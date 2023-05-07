const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bilbo: ['"Bilbo"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        lotrYellow: "#FFC107",
        lotrBrown: "#795548",
      },
      fontFamily: {
        aniron: "Aniron",
      },
    },
  },
  plugins: [],
};
