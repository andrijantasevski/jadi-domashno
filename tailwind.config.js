const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        success: colors.green,
        warning: colors.amber,
        error: colors.red,
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "bad-script": ["var(--font-bad-script)"],
      },
    },
  },
  plugins: [],
};
