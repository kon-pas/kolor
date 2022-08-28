/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        '1': '#f9f9f9',
        '2': '#f7f7f7',
        '3': '#f5f5f5',
        '4': '#f3f3f3',
        '5': '#cccccc',
        '6': '#7b7b7b'
      },
      black: '#222222'
    },
    extend: {},
  },
  plugins: [],
}
