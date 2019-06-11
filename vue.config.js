const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('examples'),
        'assets': resolve('examples/assets'),
        '~': resolve('examples/components'),
        'views': resolve('examples/views')
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('example'))
  // }
}
