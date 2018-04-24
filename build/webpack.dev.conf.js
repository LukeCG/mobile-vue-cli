'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge') // webpack-merge是一个可以合并数组和对象的插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin') // 用于更友好地输出webpack的警告、错误等信息

/**
 * html-webpack-plugin用于将webpack编译打包后的产品文件注入到html模板中
 * 即自动在index.html里面加上<link>和<script>标签引用webpack打包后的文件
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

const portfinder = require('portfinder') // 获取可用端口

const HOST = process.env.HOST // 获取host
const PORT = process.env.PORT && Number(process.env.PORT) // 获取端口

const devWebpackConfig = merge(baseWebpackConfig, {
	module: {
		/**
		 * 样式文件的处理规则，对css/sass/scss等不同内容使用相应的styleLoaders
		 * 由utils配置出各种类型的预处理语言所需要使用的loader，例如sass需要使用sass-loader
		 */
		rules: utils.styleLoaders({
			sourceMap: config.dev.cssSourceMap,
			usePostCSS: true
		})
	},

	// 使用这种sourceMap
	devtool: config.dev.devtool,

	// 本地服务器配置，配置文件在“/config/index.js”
	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: true,
		hot: true,
		compress: true,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay ?
			{
				warnings: false,
				errors: true
			} :
			false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true, // FriendlyErrorsPlugin模块用到
		watchOptions: {
			poll: config.dev.poll,
		}
	},

	// 配置开发环境的打包插件
	plugins: [
		new webpack.DefinePlugin({
			'process.env': require('../config/dev.env')
		}),

		// 开启webpack热更新功能
		new webpack.HotModuleReplacementPlugin(),

		// 使用模块路径为模块的ID，用于缓存vendor.js
		new webpack.NamedModulesPlugin(),

		// webpack编译过程中出错的时候跳过报错阶段，不会阻塞编译，在编译结束后报错
		new webpack.NoEmitOnErrorsPlugin(),

		// 自动将依赖注入html模板，并输出最终的html文件到目标文件夹
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
	]
})

module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = process.env.PORT || config.dev.port // 获取初始化端口
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err)
		} else {
			// 发布e2e测试所需的新端口
			process.env.PORT = port

			// 添加端口到devServer配置文件
			devWebpackConfig.devServer.port = port

			/**
			 * 添加FriendlyErrorsPlugin插件
			 * 这个插件可以识别某些特定的webpack错误，并优化它们来提供一个更好的开发环境。
			 */
			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
				},
				onErrors: config.dev.notifyOnErrors ?
					utils.createNotifierCallback() :
					undefined
			}))

			resolve(devWebpackConfig)
		}
	})
})