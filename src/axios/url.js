let host = '';

if (process.env.NODE_ENV === 'development'){
	host = 'http://localhost:8085/api'; // 开发环境
}else {
	host = document.location.protocol+'//' + window.location.host + '/api'; // 测试环境或正式环境
}

// url统一存放
export default {
	// login: host + '/coach/login', // login后端接口
	login: '/news/index', // login接口的mock
}