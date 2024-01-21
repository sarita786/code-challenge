/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#684DEC',
        'light-orange': '#FFBF75',
        'light-zinc': '#EEE',
        'white': '#FFF',
        'black': '#222831',
        'light-black': '#393E48;',
      },
    },
  },
  plugins: [],
  textColor: ['active'],
}

