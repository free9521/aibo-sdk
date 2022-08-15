const { merge } = require('webpack-merge')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common.js')
const { resolve, PROJECT_PATH } = require('./constants')
const { VueLoaderPlugin } = require('vue-loader');

/**
 * @type {import('webpack').Configuration}
 */
const developmentConfig = {
  entry: {
    index: resolve(PROJECT_PATH, './test/web/init.ts') // 用于挂载SDK
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    compress: true,
    open: true,
    hot: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false
      }
    },
    // 配置路由
    setupMiddlewares: function (middlewares, devServer) {
      middlewares.unshift({
        name: 'user-info',
        path: '/success',
        middleware: (req, res) => {
          res.json({ name: 'mock' });
        }
      });
      middlewares.unshift({
        name: 'user-info',
        path: '/error',
        middleware: (req, res) => {
          res.sendStatus(500);
        }
      });
      return middlewares;
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './test/web/index.html'),
      scriptLoading: 'blocking',
      inject: 'head'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = merge(common, developmentConfig)
