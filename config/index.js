'use strict'
// Template version: 1.2.7
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path') // node的内置模块，提供了一些用于处理文件路径的方法

module.exports = {
    // 开发环境配置数据
    dev: {
        /**
         * 开发环境的发布路径(例：assetsPublicPath+'/img/logo.png')
         * 如果构建后的产品文件有用于发布CDN或者放到其他域名的服务器，可以在这里进行设置
         */
        assetsPublicPath: '/',
        assetsSubDirectory: 'static', // 二级目录，存放静态资源文件的目录，位于dist文件夹下
        proxyTable: { // 配置代理（解决跨域问题），在这里可以配置特定的请求代理到对应的API接口
            "/api": {
                target: "http://192.168.0.239:8080/mms/",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },

        // 开发环境本地服务器配置
        host: 'localhost', // 配置host地址
        port: 8085, // 配置IP端口
        autoOpenBrowser: false, // 是否打开浏览器
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,

        // 开发环境的Source Maps 配置
        devtool: 'eval-source-map', // js的sourceMap
        cssSourceMap: false, //  是否开启css的SourceMap
        cacheBusting: true, // 缓存错误
    },

    // 生产环境配置数据
    build: {
        index: path.resolve(__dirname, '../dist/index.html'), // html入口文件

        // 生产环境的路径配置
        assetsRoot: path.resolve(__dirname, '../dist'), // 配置打包时生成的文件的根目录
        assetsSubDirectory: 'static', // 二级目录，存放静态资源文件的目录，位于dist文件夹下
        assetsPublicPath: 'http://www.luke.cn/dist/', // 生产环境的发布路径

				indexHtmlPublicPath: '', // 修改注入到index.html的链接的前缀，为空则不修改

        productionSourceMap: false, // 生产环境打包的时候是否开启SourceMap
        devtool: '#source-map', // 如果productionSourceMap为true，有效

        productionGzip: false, // 是否开启Gzip压缩
        productionGzipExtensions: ['js', 'css'], // gzip模式下需要压缩的文件的扩展名，当前只会对js和css文件进行压缩

        bundleAnalyzerReport: process.env.npm_config_report // 是否展示webpack构建打包之后的分析报告
		}, 
		
		// 测试环境配置数据
		test: {
			index: path.resolve(__dirname, '../dist/index.html'), // html入口文件

			// 生产环境的路径配置
			assetsRoot: path.resolve(__dirname, '../dist'), // 配置打包时生成的文件的根目录
			assetsSubDirectory: 'static', // 二级目录，存放静态资源文件的目录，位于dist文件夹下
			assetsPublicPath: 'http://192.168.0.198/github/mobile-vue-cli/dist/', // 测试环境的发布路径

			indexHtmlPublicPath: 'http://localhost/github/mobile-vue-cli/dist/', // 修改注入到index.html的链接的前缀，为空则不修改

			productionSourceMap: false, // 生产环境打包的时候是否开启SourceMap
			devtool: '#source-map', // 如果productionSourceMap为true，有效

			productionGzip: false, // 是否开启Gzip压缩
			productionGzipExtensions: ['js', 'css'], // gzip模式下需要压缩的文件的扩展名，当前只会对js和css文件进行压缩

			bundleAnalyzerReport: process.env.npm_config_report // 是否展示webpack构建打包之后的分析报告
	}
}