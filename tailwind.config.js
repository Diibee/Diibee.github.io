/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'real-brown': '#2A1C1D',
        'real-gray': '#685C60',
        'real-gay': '#736c6f',
      },
      fontFamily: {
        'cmd': ['"Windows Command Prompt Regular"'],
      },
    },
  },
  plugins: [],
}

