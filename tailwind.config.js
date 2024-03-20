/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'user-black': '#36485C',
        'white-opaity-80': 'rgba(255,255,255,0.8)'
      },
      backgroundImage: {
        'home-1': "url('/public/images/home-bg-1.png')",

      }
    },
  },
  plugins: [],
}