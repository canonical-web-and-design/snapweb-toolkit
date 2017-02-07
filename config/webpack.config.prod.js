const path = require('path')
const webpack = require('webpack')
const package = require('../package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const wUtils = require('./webpack-utils')

// Set to true to export each component so they can be imported individually
const STANDALONE_COMPONENTS = false

const rootDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(rootDir, 'src')
const libDir = path.resolve(rootDir, 'lib')

const components = STANDALONE_COMPONENTS? require('./components') : []
const entry = Object.assign({},
  wUtils.componentsToEntry(components, srcDir),
  { bundle: path.resolve(srcDir, 'index.js') }
)

module.exports = {

  context: rootDir,

  entry,

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },

  output: {
    path: libDir,
    filename: '[name].js',
    library: 'snapwebToolkit',
    libraryTarget: 'umd',
  },

  resolve: {
    alias: {
      'toolkit': srcDir,
    },
  },

  stats: {
    children: false
  },

  module: {
    rules: [
      {
        exclude: [
          /\.(js|jsx)$/,
          /\.css$/,
          /node_modules/,
        ],
        loader: 'url-loader',
        query: {
          // limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: srcDir,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: srcDir,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],

  // postcss: () => ([
  //   autoprefixer({
  //     browsers: [
  //       '>1%',
  //       'last 4 versions',
  //       'Firefox ESR',
  //       'not ie < 9', // React doesn't support IE8 anyway
  //     ]
  //   }),
  // ]),
}
