// vue.config.js

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8000',
        target: 'http://my.djangosite.test:5000/',
        changeOrigin: true,
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? 'static/webapp'
    : '/',

  outputDir: '../backend/webapp/static/webapp',
  indexPath: '../../templates/webapp/index.html',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}
