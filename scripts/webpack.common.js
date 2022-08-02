const WebpackBar = require('webpackbar')

const { resolve, PROJECT_PATH } = require('./constants')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    index: resolve(PROJECT_PATH, './src/web/index.ts')
  },
  output: {
    // 打包成umd模块 因为作为 SDK ，我们希望能够支持多种方式的引用：import、require、script
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: resolve(PROJECT_PATH, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@core': resolve(__dirname, '../src/core'),
      '@web': resolve(__dirname, '../src/web'),
      '@typings': resolve(__dirname, '../typings')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new WebpackBar({
      name: '正在打包中'
    })
  ]
}
