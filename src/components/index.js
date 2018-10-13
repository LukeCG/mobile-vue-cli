// 以元素的方式使用组件
import Test from './test';

// 通过调用方法使用组件
import alert from './alert';

const components = {
	Test
}

function install (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
	});

	Vue.prototype.$alert = alert.show;
}

export {
	install
};