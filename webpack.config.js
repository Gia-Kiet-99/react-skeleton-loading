const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    roots: [path.resolve(__dirname, 'src')],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      actions: path.resolve(__dirname, 'src', 'actions'),
      api: path.resolve(__dirname, 'src', 'api'),
      config: path.resolve(__dirname, 'src', 'config'),
      global: path.resolve(__dirname, 'src', 'global'),
      providers: path.resolve(__dirname, 'src', 'providers'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
      types: path.resolve(__dirname, 'src', 'types'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    liveReload: true,
    static: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React with Webpack',
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env', '@babel/react', '@babel/typescript'],
        //   },
        // },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    // minimize: true,
    // minimizer: [new TerserPlugin()], // only for production mode
  },
};
