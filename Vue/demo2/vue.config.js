const path = require('path')
const resolve = function(dir) {
  return path.join(__dirname, dir)
}
const BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MeasureWebpackPlugin = require('speed-measure-webpack-plugin')

const temp = new MeasureWebpackPlugin()
console.log(process.env.NODE_ENV, 3)
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/one/' : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
          .set('@', resolve('src'))
          .set('views', resolve('src/views'))
        config.optimization.runtimeChunk('single')
    },
    configureWebpack: temp.wrap({
        plugins: [
          new BundleAnalyzerPlugin()
        ]
    }),
    devServer: {
        host: 'localhost',
        port: '9000',
        hot: true,
        open: true
    }
}