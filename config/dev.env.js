'use strict'
const merge = require('webpack-merge') // webpack-merge是一个可以合并数组和对象的插件
const prodEnv = require('./prod.env') // 引入生产环境变量

module.exports = merge(prodEnv, {
	// 配置为开发环境
	NODE_ENV: '"development"'
})