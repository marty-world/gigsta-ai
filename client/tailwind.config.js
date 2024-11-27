/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "dark-mode",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}