const path = require('path')

/** @type import('vite').UserConfig */
const config = {
  alias: {
    '/@lib/': path.resolve(__dirname, 'lib'),
    '/@docs/': path.resolve(__dirname, 'docs')
  }
}

module.exports = config
