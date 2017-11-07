module.exports = {
  entry: ['./src/js/main.js'],
  output: {
    filename: './public/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  }
}