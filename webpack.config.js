const path = require('path');

module.exports = {
  entry: {
    app: [path.join(__dirname,'app.jsx')]
  },
  output: {
    path: path.join(__dirname,'assets'),
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel',
      query: {
        presets: ['es2015','stage-1','react']
      }
    }]
  },
  resolve: {
    extensions: ['','.js','.jsx','/index','/index.js','/index.jsx']
  },
  plugins: []
}
