/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        anaimation: {
          "spin": "spin 10s linear infinite",
        },
        keyframes: {
spin: {
  "0%": {transform: "rotate(0deg)"},
  "100%": {transform: "rotate(s360deg)"},
}
        }
      },
    },
  variants: {},
  plugins: [],

  }
