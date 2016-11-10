var fs = require('fs')
var path = require('path')

module.exports = {
  entry: './server.tsx',
  output: {
    filename: './server.bundle.js'
  },
  target: 'node',
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  // keep node_module paths out of the bundle
  externals: fs.readdirSync('./node_modules').concat([
    'react-dom/server', 'react/addons'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass']}
    ]
  // },
  // externals: {
  //   "window": "window",
  }
}
