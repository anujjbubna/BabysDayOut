/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
     "./src/views/components/**/*.js",
   ],
   theme: {
     extend: {
      colors: {
        'baby-pink': '#CF91B5',
        'baby-blue': '#89CFF0',
      }
     },
   },
   plugins: [],
  }