const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

/**
 * @type {import('webpack').Configuration}
 */
const productionConfig = {
  mode: 'production',
  devtool: 'source-map',
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
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.build.json'
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: true
        }
      })
    ]
  }
}

module.exports = merge(common, productionConfig)
