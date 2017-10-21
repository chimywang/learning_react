/**
 * 开发服务器，用于在开发环境下提供热替换服务
 * 生产环境下无须启动
 */
var Express = require('express');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./dev.config');

var app = new Express();
var port = require('../src/config').port + 1;

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🚧  Webpack development server listening on port ${port}.`)
  }
});
