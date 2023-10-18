/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gabarito': ['Gabarito-Regular', 'arial'],
      'gabarito-medium': ['Gabarito-Medium', 'arial'],
      'gabarito-semibold': ['Gabarito-SemiBold', 'arial'],
      'gabarito-bold': ['Gabarito-Bold', 'arial'],
      'gabarito-extrabold': ['Gabarito-ExtraBold', 'arial'],
      'gabarito-black': ['Gabarito-Black', 'arial'],
    },
    extend: {},
  },
  plugins: [],
}

