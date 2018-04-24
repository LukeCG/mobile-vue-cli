// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "autoprefixer": {
			browsers: 'last 5 version'  // 加前缀
		},
		'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /node_modules/i // 过滤某个文件夹不转rem
    }
  }
}
