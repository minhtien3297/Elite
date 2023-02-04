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
    extend: {
      colors: {
        orange: {
          50: '#FF7F03',
          100: '#E6671C',
        },
        blue: {
          50: '#50D7E9',
          100: '#4E84FA',
          200: '#0D51E4',
        },
        gray: {
          50: '#F5F5F5',
          100: '#696969',
        },
        green: {
          50: '#6CBD7E',
          100: '#33B04F',
        },
        red: '#F33030',
        yellow: '#FFE15A',
      },

      borderRadius: {
        DEFAULT: '3px',
      },
    },

    fontFamily: {
      lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },

    container: {
      center: true,
    },
  },

  plugins: [require('flowbite')],
}
