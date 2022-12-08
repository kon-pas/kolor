/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./common/components/**/*.tsx"
  ],
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        draw: {
          "1": '#f9f9f9',
          "2": '#f7f7f7',
          "3": '#f5f5f5'
        },
        font: '#7b7b7b'
      },
      black: '#000000',
      cyan: '#2386CD',
      magenta: '#F47EBD',
      yellow: '#F2C89A',
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
      satoshi: 'Satoshi, sans-serif',
      roboto: '"Roboto Mono", monospace',
    },
    screens: {
      touch: { 'raw': '(pointer: coarse)' },
      hoverable: { 'raw': '(hover: hover) and (pointer: fine)' },
      xs: '400px',
      sm: '600px',
      md: '1000px'
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
        'width-opacity': 'width, opacity',
        'max-width-opacity': 'max-width, opacity',
        'max-width-opacity-visibility': 'max-width, opacity, visibility',
        'height-opacity': 'height, opacity',
        'max-height-opacity-visibility': 'max-height, opacity, visibility',
      }
    }
  }
}
