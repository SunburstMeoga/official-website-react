/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'user-black': '#36485C',
        'white-opaity-80': 'rgba(255,255,255,1)',
        'word-gray': '#003D6C',
        'primary-green': '#2FCD82',
        'primary-orange': '#EC652B'
      },
      backgroundImage: {
        'home-1image': "url('/public/images/home-bg-1.png')",
        'home-2image': "url('/public/images/home-bg-2.png')",
        'home-3image': "url('/public/images/features.png')",
        'why-1image': "url('/public/images/why-bg-1.png')",
        'why-2image': "url('/public/images/Mobile_why choos 3at.png')",
      }
    },
  },
  plugins: [],
}