/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#111',
        'secondary': '#1d1d1d',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
         'heavitas' : ["Heavitas", 'sans-serif'],
      },
    },
  },
  plugins: [],
}