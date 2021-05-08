module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '380px'
      }
    },
    fontFamily: {
      sans: ['Dhyana']
    },
    fontsize: {}
  },
  variants: {
    backgroundColor: ['responsive, active', 'hover'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus']
  },
  plugins: []
}
