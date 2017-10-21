var path = require('path');
var webpack = require('webpack');

module.exports = {
  //开发工具，生成源代码映射（Source Map），方便调试，记录打包编译后的代码和源代码之间的位置的对应关系，可以直接跳到源代码，而不是编译后的代码
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',//用于热替换功能的，原理：先连上服务器，等着接受需要重新变异代码的通知，一旦代码变动，就会收到通知进而更新客户端代码。
    './index.js'//程序的入口文件
  ],
  /**
   * path: 表示输出的硬盘路径，
   * fileName：输出的文件名称
   * publicPath：公共路径，所有资源的URL前缀
   *
   * path+publicPath+fileName
   */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  /**
   * 插件列表
   *
   * 用于实现与打包相关的特定功能
   */
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),//用于给经常使用的模块分配最小的ID
    new webpack.HotModuleReplacementPlugin()//用于热替换
  ],
  /**
   * 加载器列表
   *
   */
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
