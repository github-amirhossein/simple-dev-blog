/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat, sans-serif'],
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#111111',
      lightGray: '#B2B2B2',
      darkGray: '#333333',
      yellow: '#FFC700',
      layback: '#111111AA',
    },
  },
  plugins: [],
  darkMode: 'selector',
};
