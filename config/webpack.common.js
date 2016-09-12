var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    //Modules that are lazy loaded (require.ensure) will automatically be loaded into separate chunks
    'app': './src/app/main.ts',
    'vendor': './src/vendor.ts',
    'polyfills': './src/polyfills.ts'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
        dragula: "dragula",
        d3: "d3",
        $: "jquery",
        jQuery: "jquery",
        toastr: "toastr",
        _: "underscore"
    })
  ],

    resolve: {
        // alias: {
        //     jquery: "jquery/src/jquery"
        // },
        extensions: ['', '.js', '.ts']
  },

};