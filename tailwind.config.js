/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '2.441rem',
        '8xl': '30rem',
        '10xl': '120rem',
      },
      fontFamily: {
        sigana: ['SIGANA', 'sans-serif'],
      },
    },
  },
  plugins: [],
}