## 写在前面

这款应用是rudux官方示例[TodoMVC](https://github.com/reactjs/redux/tree/master/examples/todomvc)的拓展，在此基础上又结合redux作者Dan Abramov大神在[egghead](https://egghead.io)上对redux的讲解。

UI使用了[Material-UI](Material-UI),参考了知乎[@黄玄](https://www.zhihu.com/people/huxpro/answers)的Vue写的TodoApp，想着重点是为了练手react 和redux。所以UI和交互就没有打算花太多时间。

## 在线地址

[预览](https://zev91.github.io/ToDo/build/)

## 源码地址

[github](https://github.com/zev91/ToDo)

## 功能

 1.纯单页面应用。
 2.可在线注册登录，数据保存在leancloud上，数据更改会实时同步到云端。
 3.根据添加的事项的时间信息，对列表进行排序和分类。
 4.切换不同的路由选项，可显示不同完成状态的事项。

## 演示

### pc端演示

![](http://upload-images.jianshu.io/upload_images/4787324-ecc7fae613e47c9c.gif?imageMogr2/auto-orient/strip)

![](http://upload-images.jianshu.io/upload_images/4787324-79bfee0416acbd81.gif?imageMogr2/auto-orient/strip)

### 移动端演示

![](http://upload-images.jianshu.io/upload_images/4787324-57c83febcd22a6d9.gif?imageMogr2/auto-orient/strip)

## 技术栈

 . React：生命周期函数，PropTypes 组件参数验证，ref 和 React.js 中的 DOM 操作，组件的动态渲染等
 . Redux： 根据不同的逻辑 把不同的state用不同的reducer进行分离，再合并。用 `redux-thunk`中间件，统一了异步和同步 action 的调用方式，把异步过程放在 action 级别解决。
 . create-react-app: 基于Webpack+ES6的最简易的React项目模板，方便快速上手。
 . React-Router 4.0：构建单页面应用的利器，不过3.0版本到4.0版本改动相当大，踩了不少的坑.
Styled-Components：一个React第三方库，可以将样式写成组件的形式，实现在JS上编写CSS。
 . CSS3: 和CSSTransitionGroup结合，创建组件过渡动画，优化用户体验。
 . LeanCloud： 使用了它的数据存储功能，将用户数据保存在云端。

## 目录结构

```
├── build.js                   项目打包后的文件
├── package.json         定义依赖的nodejs模块

├── node_modules               node模块目录
├── public
│   └──index.html
├── src
│   ├── index.js               入口文件
│   ├── actions               所有在需要时需要触发的actction文件
│   ├── api                     请求和接受数据的模块集
│   ├── components      包含样式组件的组件
│   ├── container           包含逻辑的容器组件
│   ├── reducers            redux中的reducer
│   ├── store                  数据仓库的位置
│   ├── styles                 简单的样式组件
├── .gitignore
├── README.md
└── yarn.lock
```
## 小结

最初，这款应用只是个逻辑更加简单的react小应用(redux和router以及异步都未涉及)，本着探索react全家桶的目的，刷了遍redux作者在egghead上的redux教程，又参考官方文档。一遍遍的填坑，历时10天，又经过修修补补，终于做成个样子出来了。