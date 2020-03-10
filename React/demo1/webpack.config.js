const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    mode: 'development',
    // entry: './src/index.js', // 入口文件
    entry: {
      app: './src/entry1/index.js',
      lib: './src/entry2/lib.js',
      vendor: ['react', 'react-dom']
    },
    output: {
      publicPath: '/', // 会为资源添加一个前缀(参考：juejin.im/post/5bb085dd6fb9a05cd24da5cf)
      path: path.resolve(__dirname, 'dist'), // 出口目录，dist文件
      filename: '[name]-[hash:8].js' // 这里的name就是打包出来的文件名
    },
    module: {
      rules:[
        { 
          test: /\.js$/,
          exclude: /node_modules/, // 表示那些目录中的 .js 文件不要进行babel-loader，减少打包时间
          use: ['babel-loader']
        }, 
        {
          test: /\.css/,
          use: ['style-loader',
            {
              loader: 'css-loader'
            },
            'postcss-loader' // 负责进一步处理 CSS 文件，比如添加浏览器前缀，压缩 CSS
          ]
        },
        {
          test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        },
        {
          test:/\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader'
            },
            'less-loader'
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          // vendors: {
          //   test: /react/,
          //   name: 'vendors's
          // }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new CleanWebpackPlugin("./dist"), // 需要写入打包后的文件名
      new ProgressBarPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        generateStatsFile: true,
        statsOptions: { source: false }
      })
    ],
    
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'), //设置server对外服务的内容来源，只有在提供静态文件访问的情况下才需要使用该配置
      port: 8000,
      host: 'localhost',
      overlay: true, // 在浏览器上显示编译的errors
      compress: true // 是否启用gzip压缩(影响了文件的压缩，你可以通过服务器返回头字段看到content-encoding: gzip)
    }
}