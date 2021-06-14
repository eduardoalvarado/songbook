module.exports = {
  configureWebpack: config => {
    config.resolve.alias['@'] = require('path').resolve(__dirname, 'src/')
  }
}
