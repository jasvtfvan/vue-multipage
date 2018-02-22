# vue-multipage

> 基于vue2.5 多页应用，多级目录结构，可灵活配置的static/common.js

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

## directory structure 目录结构

``` bash
> vue-multipage
>> build
>>> utils.js 添加解析路径方法
>>> webpack.base.conf.js 配置多入口js
>>> webpack.dev.conf.js 开发模式改造
>>> webpack.prod.conf.js 生产环境改造
>>> ... ... 其余没有变动
>> config
>>> index.js 基础配置
>> plugins
>>> html.bef.inject.js 可使 static/common.js 插入
>> src
>>> assets 资源
>>>> css
>>>>> home
>>>>>> home.css
>>>>> common.css
>>>> img
>>> componets 组件

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
