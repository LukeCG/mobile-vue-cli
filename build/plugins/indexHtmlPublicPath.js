

// 在打包过程中修改注入到index.html的链接的前缀，该插件要用在HtmlWebpackPlugin插件之前
function IndexHtmlPublicPath(options) {
	this.options = options;
}

IndexHtmlPublicPath.prototype.apply = function (compiler) {
	let indexHtmlPublicPath = this.options && this.options.indexHtmlPublicPath;

  // compile（'编译器'对'开始编译'这个事件的监听）
  compiler.plugin("compile", function (params) {});

  // compilation（'编译器'对'编译ing'这个事件的监听）
  compiler.plugin("compilation", function (compilation) {
    /**
     * 在compilation事件监听中，我们可以访问compilation引用，它是一个代表编译过程的对象引用
     * 我们一定要区分compiler和compilation，一个代表编译器实体，另一个代表编译过程
     */
    
    // before-chunk-assets之前publicPath的值还没加到图片等静态资源上
    compilation.plugin("before-chunk-assets", function () {
      // compilation.options.output.publicPath = 'http://localhost/221312312312/'
    });
  });
	
  // emit（'编译器'对'生成最终资源'这个事件的监听）
  compiler.plugin("emit", function (compilation, callback) {
		// 资源已经打包好，修改注入到index.html上的src的publicPath前缀
		if (indexHtmlPublicPath){
			compilation.options.output.publicPath = indexHtmlPublicPath;
		}

    callback(); // callback在最后必须调用
  });

};

module.exports = IndexHtmlPublicPath;
