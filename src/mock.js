// 引入mockjs
const Mock = require('mockjs');

// 开发时模拟的数据
Mock.mock('/news/index', 'post', {
	'name': 'luke',
	'age': 20,
	'list|1-10': [{
		'id|+1': 1,
		'email': '@EMAIL'
	}]
});