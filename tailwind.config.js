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
      light: '#EEEEEE',
      yellow: '#FFC700',
      pink: '#E3007B',
      blue: '#4800E2',
      gray: '#222222',
      black: '#111111',
      layback: '#111111AA',
    },
  },
  plugins: [],
  darkMode: 'selector',
};
