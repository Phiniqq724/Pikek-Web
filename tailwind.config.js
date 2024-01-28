/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "coklatapalah" : "#994D1C"
      },
      backgroundColor: {
        "coklatapalah" : "#994D1C"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

