/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "var(--color-primary-1)",
        "primary-2": "var(--color-primary-2)",
        "gray-1": "var(--color-gray-1)",
        "background-main": "var(--color-bg-1)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "bad-script": ["var(--font-bad-script)"],
      },
    },
  },
  plugins: [],
};
