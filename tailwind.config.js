module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '380px'
      },
      colors: {
        'sb-primary': {
          '100': '#5451D6',
          '200': '#0B3A83',
          '300': '#112556'
        },
        'sb-secondary': {
          '100': '#21D2FF'
        },
        'sb-blue':{
          '100': '#DBE9F6',
          '200': '#B4C8E1'
        }
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
