/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "dark-mode",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
  ],
  theme: {
    extend: {
      borderRadius: {
        'theme-p-r': '30px',
        'theme-p-r-1': '25px',
        'theme-s-r': '20px',
        'theme-s-r-1': '15px',
        'theme-r-small': '10px',
        'theme-r-xs': '5px'
      },
      backgroundColor: {
        'primary': '#ad6ca5',
        'primary2': '#c1ff72',
        'secondary': '#0b6380',
        'secondary2': '#2af1c2'
      },
      borderColor: {
        'primary': '#ad6ca5',
        'primary2': '#c1ff72',
        'secondary': '#0b6380',
        'secondary2': '#2af1c2'
      },
      colors: {
        'primary': '#ad6ca5',
        'primary2': '#c1ff72',
        'secondary': '#0b6380',
        'secondary2': '#2af1c2'
      }
    },
  },
  plugins: [],
}