const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    about: './src/js/about.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  stats: {
    children: false
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.scss$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          { loader: 'css-loader', options: { sourceMap: devMode } },
          { loader: 'postcss-loader', options: { sourceMap: devMode } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          { loader: 'css-loader', options: { sourceMap: devMode } },
          { loader: 'postcss-loader', options: { sourceMap: devMode } },
          { loader: 'sass-loader', options: { sourceMap: devMode } }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/index.html',
      chunks: ['app', 'styles']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/views/about.html',
      chunks: ['about', 'styles']
    }),
    new BrowserSyncPlugin(
      {
        host: '192.168.15.11',
        port: 3000,
        proxy: 'http://localhost:8080/'
      },
      {
        reload: false
      }
    )
  ]
}
