const path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = (options, { mode }) => ([
  {
    entry: './src/index.tsx',
    output: {
      filename: '[name].js',
      chunkFilename: '[contenthash].js',
      path: path.resolve(__dirname, 'dist/assets'),
      publicPath: '/assets/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.js'],
      alias: {
        react: path.resolve('./node_modules/react'),
        'styled-components': path.resolve('./node_modules/styled-components'),
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            enforce: true,
            chunks: 'all',
          },
          default: {
            minSize: 0,
            reuseExistingChunk: true,
          },
        },
      },
    },
    mode,
    ...(mode === 'development' && {
      devtool: 'source-map',
    }),
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
    ],
  },
  {
    entry: './src/server.tsx',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist/server'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.js'],
      alias: {
        react: path.resolve('./node_modules/react'),
        'styled-components': path.resolve('./node_modules/styled-components'),
      },
    },
    mode,
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/resources', to: '' },
        ],
      }),
    ],
  },
])
