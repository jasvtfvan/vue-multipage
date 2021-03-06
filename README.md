# vue-multipage

> 基于vue2.5 多页应用，多级目录结构，可灵活配置的static/common.js，webpack3，index页面在根目录<br>
非vue-router，非eslint，尚未加入vux、elment-ui等，目的在于使用者可按需配置

## Build Setup 构建过程

``` bash
# install dependencies
# 安装依赖
npm install

# serve with hot reload at localhost:8080
# 开发模式启动运行
npm run dev

# build for production with minification
# 构建项目
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## dist structure dist目录结构
``` bash
|--- dist
  |--- static
    |--- css
    |--- js
    |--- common.js 可以配置window全局对象等
  |--- views
    |--- home
    |--- setting
    404.html 404页面
  |--- index.html 在dist根目录下的index页面
```

## directory structure 多级目录结构

``` bash
|--- vue-multipage
  |--- build
    |--- utils.js 添加解析路径方法
    |--- webpack.base.conf.js 配置多入口js
    |--- webpack.dev.conf.js 开发模式改造
    |--- webpack.prod.conf.js 生产环境改造
    |--- ... ... 其余没有变动
  |--- config
    |--- index.js 基础配置
  |--- plugins
    |--- html.bef.inject.js 可使 static/common.js 插入
  |--- src
    |--- assets 资源
      |--- css
        |--- home
          |--- home.css
        |--- common.css
      |--- img
        |--- logo.png
    |--- components 组件
      |--- HelloWorld
        |--- HelloWorld.vue
    |--- views
      |--- home
        |--- sub
          |--- subsub
            |--- subsub.html
            |--- subsub.js
            |--- Subsub.vue 子页面的子页面vue
          |--- sub.html
          |--- sub.js
          |--- Sub.vue 子页面vue
        |--- home.html
        |--- home.js
        |--- Home.vue home页面vue
      |--- setting
      |--- 404.html
      |--- 404.js
      |--- 404.vue
    |--- index.html
    |--- index.js
    |--- Index.vue
    |--- main.js 各vue组件全局配置
  |--- static
    |--- common.js 定义window全局变量，打包后可配置局域网地址等
```

## description of some js 部分js说明

> static/common.js
``` bash
console.log("common")
//window.aaa = aaa //可在vue中引用
```

> main.js 全局引用js
``` bash
import Vue from 'vue'
import '@/assets/css/common.css'
export default function (App, ele = '#app') {
  Vue.config.productionTip = false
  new Vue({
    el: ele,
    template: '<App/>',
    components: { App }
  })
}
```

> views/home/home.js
``` bash
import render from '@/main'
import '@/assets/css/home/home.css'
import Home from './Home.vue'
render(Home)
```

<br>
<br>
尚未对应博文，敬请谅解，如有疑问或意见，请发送email至<br>
[我的邮箱](jasvtfvan@163.com)
<br>
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
