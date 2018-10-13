## 手脚架描述
>对vue-cli版本为v2.9.2的手脚架进行了二次封装，适用于移动端

## 常用命令
``` bash
# 下载框架依赖
npm i

# 开发环境
npm run dev

# 正式环境所需要的代码
npm run build

# 测试环境所需要的代码
npm run test
```

## 新增功能
```
>1.  打包时，新增了test环境，可通过process.env.NODE_ENV判断当前的环境
>2.  新增webpack插件indexHtmlPublicPath，可用于修改注入到index.html的链接的前缀
>3.  二次封装了axios，用于配置请求的通用项，统一处理错误请求，配置token等等
>4.  新增util文件夹，用于存放通用函数库（如处理cookie、H5本地存储等等）
>5.  全局引入所有可复用组件，避免局部引入，提升开发效率
```

## 引入新的框架或库
```
>1.  引入了mock.js，用于后端接口数据模拟
>2.  引入了fastclick.js，用于解决click时间延迟300ms的问题
>3.  引入了rest.css和base.css
>4.  引入了util.js公共函数库
>5.  引入了lib-flexible-2.0，用于解决移动端屏幕适配问题
>6.  引入了vconsole.js，用于移动端调试
>7.  引入了axios.js，用于解决请求数据
>8.  引入了一些常用的webpack插件，详情可查看package.json
```


