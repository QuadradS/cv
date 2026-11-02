const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// One Node.js CV in two languages.
const pages = [
  { data: require('./content/cv.json'), filename: 'index.html' },
  { data: require('./content/cv.ru.json'), filename: 'ru.html' },
];

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/[name].js',
      // Relative publicPath so the site works under a GitHub Pages project
      // subpath (e.g. https://quadrads.github.io/cv/). The dev server needs an
      // absolute one, otherwise dev-middleware can't map requests to the
      // in-memory build and falls back to stale files on disk.
      publicPath: isProd ? './' : '/',
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
      // One HtmlWebpackPlugin per page; the page's content object is
      // exposed to the template at build time.
      ...pages.map(
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
      // No static dir: everything (pages, css, fonts, photo) comes from the
      // in-memory build, so a stale dist/ can never shadow it.
      static: false,
      port: 8080,
      // Open the English CV.
      open: ['/' + pages[0].filename],
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
