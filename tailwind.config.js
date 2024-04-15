/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'user-black': '#36485C',
        'white-opaity-80': 'rgba(255,255,255,1)',
        'black-opaity-30': 'rgba(0,0,0,0.3)',
        'black-opaity-70': 'rgba(0,0,0,0.7)',
        'word-gray': '#003D6C',
        'title-gray': '#414141',
        'primary-green': '#2FCD82',
        'primary-orange': '#EC652B',
        'bottom-word': '#818283',
        'icon-gray': '#172026',
        'model-gray': '#D1D1D1',
        'active-color': '#7D7D7D',
        'word-card': '#686F74',
        'title-green': '#507D6A',
        'line-gray': '#D0D4D6',
        'point-gray': '#E5E5E5',
        'point-border': '#D0D4D6',
        'white-40': 'rgba(255,255,255,0.4)',
        'white-70': 'rgba(255,255,255,0.7)',

      },
      backgroundImage: {
        'home-1image': "url('/public/images/home-bg-1.png')",
        'home-2image': "url('/public/images/home-bg-2.png')",
        'home-3image': "url('/public/images/features.png')",
        'home-pc-one': "url('/public/images/home-bg-pc.png')",
        'why-pc-one': "url('/public/images/why-bg-pc.png')",
        'why-1image': "url('/public/images/why-bg-1.png')",
        'why-2image': "url('/public/images/Mobile_why-choos-3at.png')",
        'how-1image': "url('/public/images/Mobile_how-3at-works.png')",
        'home-rectangle': "url('/public/images/Rectangle-4.png')",
        'home-q&a': "url('/public/images/q&a.png')",
        'solution-pc-one': "url('/public/images/Payment Industry.png')",
        'solution-mobile-one': "url('/public/images/Mobile_how 3at works.png')",
        'game-mobile-one': "url('/public/images/Mobile_how 3at works_game.png')",
        'digital-mobile-one': "url('/public/images/Mobile_how 3at works_digital.png')",
        'game-pc-one': "url('/public/images/Games And Virtual Economy.png')",
        'digital-pc-one': "url('/public/images/Digital Asset Trading Market.png')",
        'game-item': "url('/public/images/Rectangle 39.png')",
        'home-pc': "url('/public/images/home-pc.png')",
        'how-pc': "url('/public/images/how-pc.png')",
        'why-pc': "url('/public/images/why-pc.png')",
        'payment-pc': "url('/public/images/payment-pc.png')",
        'game-pc': "url('/public/images/game-pc.png')",
        'digital-pc': "url('/public/images/digital-pc.png')",

        'mobile-home': "url('/public/images/mobile/mobile-home-bg.png')",
      },
      borderRadius: {
        'large': '40px',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {};

      // 生成 0.1vw 到 100vw 的类，步长为 0.1
      for (let i = 1; i <= 1000; i++) {
        const vwValue = (i * 0.1).toFixed(1); // 保留一位小数
        const vhValue = (i * 0.1).toFixed(1); // 保留一位小数
        const classNameVw = `font-vw-${vwValue.replace('.', '-')}`; // 替换小数点为连字符
        const classNameVh = `mt-vh-${vhValue.replace('.', '-')}`; // 替换小数点为连字符
        const classNameWidth = `w-vw-${vwValue.replace('.', '-')}`; // 替换小数点为连字符
        const classNameHeight = `h-vh-${vhValue.replace('.', '-')}`; // 替换小数点为连字符
        newUtilities[`.${classNameVw}`] = {
          fontSize: `${vwValue}vw`,
        };
        newUtilities[`.${classNameVh}`] = {
          marginTop: `${vhValue}vh`,
        };
        newUtilities[`.${classNameWidth}`] = {
          width: `${vwValue}vw`,
        };
        newUtilities[`.${classNameHeight}`] = {
          height: `${vhValue}vh`,
        };
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}