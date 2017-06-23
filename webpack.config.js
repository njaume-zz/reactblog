var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './public/src/index.js', //cual es la entrada de nuestra aplicacion
  output: {
    path: __dirname + '/public/javascripts', //donde colocará los archivos al terminar
    filename: 'index.js' //el nombre de nuestro bundle
  },
  devServer: { // opciones para el servidor de desarrollo
    inline: true, // para que se recargue automáticamente cuando cambie un archivo
    port: 3333 // puerto donde funcionará el servidor
  },
  resolve: {
    extensions: ['.jsx', '.scss', '.js', '.json', '.md'],
    alias: {
      'react-toolbox': path.resolve(__dirname, './node_modules/react-toolbox')
    }
  },
  resolve: {
     extensions: [".js", ".json", ".css"]
   },
   devtool: "eval-source-map",
   module: {
     rules: [
       {
         test: /\.js?$/,
         loader: 'babel-loader',
         options: {
           presets: [
             ["es2015", { modules: false }],
             "stage-2",
             "react"
           ],
           plugins: [
             "transform-node-env-inline"
           ]
         }
       },
       {
         test: /\.css$/,
         use: [
           "style-loader",
           {
             loader: "css-loader",
             options: {
               modules: true,
               sourceMap: true,
               importLoaders: 1,
               localIdentName: "[name]--[local]--[hash:base64:8]"
             }
           },
           "postcss-loader" // has separate config, see postcss.config.js nearby
         ]
       },
     ]
   },
   devServer: {
     contentBase: path.resolve("src/www"),
     publicPath: "http://localhost:8080/", // full URL is necessary for Hot Module Replacement if additional path will be added.
     quiet: false,
     hot: true,
     historyApiFallback: true,
     inline: true
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NamedModulesPlugin(),
     new webpack.LoaderOptionsPlugin({
       debug: true
     }),
   ],
};
