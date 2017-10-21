/* eslint-disable */
/**
 * 中间件
 * @type {webpack}
 */
var webpack = require('webpack');
/**
 * 中间件  是服务器在收到请求和做出相应之间的一个处理器。
 * 可以多个串联使用。
 * 是express框架最主要的一种拓展方式
 * 记录日志、内容压缩
 * @type {webpack}
 */
/**
 * 监视代码变动，一旦代码变动，就会停止提供旧版的资源服务，等到变异完成后继续提供新的资源服务
 */
var webpackDevMiddleware = require('webpack-dev-middleware');
/**
 * 完成了大部分的自动化工作，但他无法完成热替换，无法在更新代码后保留程序的状态
 * @type {webpackHotMiddleware}
 */
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
