/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Gabarito']
    },
    extend: {
      colors: {
        gray: {
          github: '#24292f',
        }
      }
    },
  },
  plugins: [],
}

