/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#B2D2F6',
        },

        primary: '#21254F',
        light_primary: '#424669',
        secondary: '#9092A7',
        light_secondary: '#BCBECA',
        stone: '#FFF7F2',
        coral: '#FFE3D9',
      },

      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          // [`@media (min-width: 320px)`]: {
          //   maxWidth: '1360px',
          // },
          // [`@media (min-width: 576px)`]: {
          //   maxWidth: '540px',
          // },
          // [`@media (min-width: 768px)`]: {
          //   maxWidth: '720px',
          // },
          // [`@media (min-width: 992px)`]: {
          //   maxWidth: '960px',
          // },
          // [`@media (min-width: 1200px)`]: {
          //   maxWidth: '1140px',
          // },
          [`@media (min-width: 1400px)`]: {
            maxWidth: '1170px',
          },
        },

        '.row': {
          display: 'flex',
        },
      });
    },

    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--gray-100': '#0C0000',
          '--gray-200': '#474747',
          '--gray-300': '#4D4D4D',
          '--gray-400': '#695F5F',
          '--gray-500': '#858585',
          '--gray-600': '#ADADAD',
          '--gray-700': '#ACA6A6',
          '--gray-800': '#CECECE',
          '--gray-900': '#D6D6D6',
          '--gray-1000': '#D9D9D9',
          '--gray-1100': '#E9E6E6',
          '--gray-1200': '#F4F2F2',
          '--gray-1300': '#eecfd2',
          '--gray-1400': '#D2D2D2',
          '--gray-1500': '#E8E8E8',
          '--gray-1600': '#00000014',
          '--gray-1700': '#BBBBBB',
          '--gray-1800': '#999999',
          '--gray-1900': '#827A7A',
          '--gray-2000': '#493B3B',
          '--gray-2100': '#333333',

          '--red-100': '#FF003714',
          '--red-200': '#A50010',

          '--black': '#000000',
          '--primary': '#FF0037',
          '--dark-red': '#200000',
          '--deep-red': '#81000F',
          '--pastel-red': '#FF7A7A',
          '--pastel-red-2': '#FFEBED',
          '--light-red': '#FFD6D6',
          '--light': '#FFFFFF',
          '--dark-green': '#52981D',
          '--light-green': '#DCEAD2',
          '--vat': '#F4F2F2',
          '--orange': '#E58C06',
          '--marron': '#A50010',
          '--dark-marron': '#D00416',
        },
        body: {
          fontFamily: '"Loos Normal", sans-serif',
          lineHeight: '1',
        },
      });
    }),
  ],
};
