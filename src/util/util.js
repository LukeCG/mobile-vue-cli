let dateAdd = function (interval, num) {
	let date = new Date();
	switch (interval) {
		case 'y':
			date.setFullYear(date.getFullYear() + num);
			break;
		case 'q':
			date.setMonth(date.getMonth() + (num * 3));
			break;
		case 'n':
			date.setMonth(date.getMonth() + num);
			break;
		case 'd':
			date.setDate(date.getDate() + num);
			break;
		case 'w':
			date.setDate(date.getDate() + (num * 7));
			break;
		case 'h':
			date.setHours(date.getHours() + num);
			break;
		case 'm':
			date.setMinutes(date.getMinutes() + num);
			break;
		case 's':
			date.setSeconds(date.getSeconds() + num);
			break;
		case 'i':
			date.setMilliseconds(date.getMilliseconds() + num);
			break;
		default:
			date.setMilliseconds(date.getMilliseconds() + num);
			break;
	}
	return date;
}

// 操作Cookie的对象
const Cookie = {
	/**
	 * 设置cookie值
	 * setObject对象有5个属性
	 * @param {String} setObject['key'] 键名
	 * @param {String} setObject['value'] 键值
	 * @param {String} setObject['domain'] 域(子域之间能够互相共享cookie) 可省略
	 * @param {String} setObject['path'] 路径(让整个网站或者网站的某个目录下的文件都能够使用cookie的值)，可省略
	 * @param {Int} setObject['expires'] 设置cookie过期时间(分钟)，默认30分钟后过期，可省略
	 * @throws 参数错误
	 */
	set: function (setObject) {
		var key = setObject['key']
		var value = setObject['value']
		var domain = setObject['domain']
		if (key && value) {
			var path = setObject['path'] || "/";
			var expires = dateAdd('m', setObject['expires'] || 30).toString();
			(!domain) ? domain = "": domain = "; domain=" + domain;
			document.cookie = key + "=" + encodeURIComponent(value) + "; path=" + path + "; expires=" + expires + domain
		} else {
			throw new Error("设置cookie时参数错误！");
		}
	},

	/**
	 * 获取cookie值
	 * @param {String} key 键名
	 * @return {String} 返回cookie的值，没有就返回null
	 */
	get: function (key) {
		var items = document.cookie.split("; ");
		for (var i = 0; i < items.length; i++) {
			var item = items[i].split("=");
			if (key == item[0] && item.length == 2) {
				//decodeURIComponent函数用于对encodeURIComponent函数编码的URI进行解码。
				return decodeURIComponent(item[1]);
			}
		}
		return '';
	},

	/**
	 * 删除cookie值
	 * @param {String} key 键名
	 * @param {String} domain 域
	 * @param {String} path 路径
	 */
	remove: function (key) {
		this.set({
			key: key,
			value: " ",
			expires: -1
		});
	}
};

// 获取url参数
const GetQueryString = (name) => {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = '';
	if (window.location.search){
		r = window.location.search.substr(1).match(reg);
	}else{
		r = window.location.href.split('?')[1] && window.location.href.split('?')[1].match(reg);
	}
	if (r != null) return unescape(r[2]);
	return null;
}

// time的格式：yyyy-mm-dd hh:mm:ss
const timeStamp = (time) => {
	let times = time.split(' ')
	let ymd = times[0].split('-')
	let hms = times[1].split(':')
	return new Date(ymd[0], ymd[1], ymd[2], hms[0], hms[1], hms[2]).getTime();
} 

const isMobile = (mobile) => {
	return (/^1[34578]\d{9}$/.test(mobile))
}

// 平台
const os = (function() {
	let ua = window.navigator.userAgent,
			isWindowsPhone = /(?:Windows Phone)/.test(ua),
			isWeixin = /(?:MicroMessenger)/.test(ua),
			isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
			isAndroid = /(?:Android)/.test(ua),
			isFireFox = /(?:Firefox)/.test(ua),
			isChrome = /(?:Chrome|CriOS)/.test(ua),
			isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
			isiPhone = /(?:iPhone)/.test(ua) && !isTablet,
			isPc = !isiPhone && !isAndroid && !isSymbian && !isTablet;
	return {
			isTablet: isTablet,
			isWeixin: isWeixin,
			isiPhone: isiPhone,
			isAndroid: isAndroid,
			isPc: isPc
	}
})();

export default {
	Cookie,
	GetQueryString,
	timeStamp,
	os,
	isMobile,
}