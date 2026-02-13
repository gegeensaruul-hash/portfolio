/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFD6E8',
        secondary: '#C7E9FF',
        accent: '#FFE7C7',
      },
    },
  },
  plugins: [],
}
