const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// One content file per locale → one HTML page each.
const locales = [
  { data: require('./content/cv.json'), filename: 'index.html' }, // en (default)
  { data: require('./content/cv.ru.json'), filename: 'ru.html' }, // ru
];

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/[name].js',
      // Relative publicPath so the site works under a GitHub Pages project
      // subpath (e.g. https://quadrads.github.io/cv/).
      publicPath: './',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
          options: {
            // {{> header}} etc. are resolved from here.
            partialDirs: [path.resolve(__dirname, 'src/partials')],
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false } },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      // One HtmlWebpackPlugin per locale; the locale's content object is
      // exposed to the template at build time.
      ...locales.map(
        ({ data, filename }) =>
          new HtmlWebpackPlugin({
            template: './src/index.hbs',
            filename,
            templateParameters: data,
            minify: isProd && {
              collapseWhitespace: true,
              removeComments: true,
              keepClosingSlash: true,
            },
          })
      ),
      new MiniCssExtractPlugin({ filename: 'assets/[name].css' }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/assets', to: 'assets' }],
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 8080,
      open: true,
      hot: true,
      watchFiles: ['src/**/*', 'content/**/*'],
    },
    stats: 'minimal',
    performance: {
      // The Inter variable font (one file, all weights) is intentionally large.
      assetFilter: (asset) => !/\.woff2?$/.test(asset),
    },
  };
};
