const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',  // Default entry point for the main app
    search: './src/search.js', // Entry point for search.html
  },
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output folder for production build
    filename: '[name].bundle.js',  // Dynamic name for each entry point
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX extensions
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Process JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Use Babel to transpile React
          },
        },
      },
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader'],  // Inject styles into the DOM
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Handle image files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Template for the default HTML file
      filename: 'index.html',  // Output file for the main app
      chunks: ['index'],  // Ensure only the necessary JS is included
    }),
    new HtmlWebpackPlugin({
      template: './public/search.html',  // Template for the search HTML file
      filename: 'search.html',  // Output file for search page
      chunks: ['search'],  // Ensure only the necessary JS is included
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Serve static assets from 'public'
    },
    compress: true,
    port: 8080,  // Dev server will run on http://localhost:8080
    hot: true,  // Enable hot module replacement
    open: true,  // Automatically open the browser when the server starts
    historyApiFallback: true,  // Important for React Router to work correctly
  },
};
