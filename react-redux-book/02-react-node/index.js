//使用require Hook
/**
 *
 * 使用Babel 编译运行Node.js程序
 * 作用：每次使用require加载js文件是，就会先用Babel进行编译
 * 使用共四个步骤
 * 1.安装babel-register   npm install babel-register --save-dev
 * 2.在入口文件顶部添加 require('babel-register');
 * 3.安装ES2015和React预设   npm install babel-preset-es2015 babel-preset-react --save-dev
 * 4.添加配置文件.babelrc ，激活ES2015和react的预设
 */
require('babel-register');
require('./src/server.js');
