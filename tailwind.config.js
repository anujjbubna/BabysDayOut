/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
     "./src/views/components/**/*.js",
   ],
   theme: {
     extend: {
      colors: {
        'baby-pink': '#ffbfd7',
        'baby-blue': '#89CFF0',
        'pastel-yellow': 'FDFD96',
      },
      lineHeight: {
        'extra-loose': '2.125',
        '12': '3rem',
      }
     },
   },
   plugins: [],
  }