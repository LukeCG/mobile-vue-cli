import Vue from 'vue';
import Alert from './alert';

// Alert组件的渲染实例
const Instance = new Vue({
  render: h => h(Alert),
});

// 获取alert的节点
const component = Instance.$mount();
document.body.appendChild(Instance.$el);

// 输出实例对象
const instance = Instance.$children[0];

export default instance;
