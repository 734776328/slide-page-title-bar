module.exports = {
    lintOnSave: false,
    devServer: {
    proxy: {
      '/juejin': {
        target: 'https://apinew.juejin.im/',
        changeOrigin: true,
        pathRewrite: {
          '/juejin': ' ',
        }
      }
    }
  }
}