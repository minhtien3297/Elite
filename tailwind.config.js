/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './node_modules/flowbite.{js,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [require('flowbite')],
};