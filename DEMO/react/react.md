复杂度高的用 `react`
面向用户复杂度不高的建议用`vue`,`vue`的api多

安装`[yarn](https://yarnpkg.com/zh-Hans/)`

搭建手脚架
`yarn add create-react-app -g`

创建项目
`create-react-app my-app`

启动项目
`yarn start`

打包项目
`yarn build`

import registerServiceWorker from './registerServiceWorker'/
PWA 全称progressive web application 运行在https协议上的服务器，通过写网页的形式写手机app应用，借助网页写手机app的效果，用户第一次访问，需要联网，断网了第二次访问，依然可以看到网页东西

前端组件化：把一个页面拆分成一个一个小的组件

React 16 版本以后有一个叫Fragment的占位符，可以用来替换最外层的div，因为一个组件只能有一个元素包裹

是一个 `class` (类) 就有一个构造函数 `constructor()` 

在`react` 中一个{}表示是一个js表达式，{{}}这种，外层表示js表达式，内层是js对象

我们在写代码写成一坨一坨的时候就应该要代码拆分

新版的不推荐用之前的写法修改数据，而是用一个函数替换对象
```
之前的
this.setState({
  inputValue:e.target.value
})
现在的,直接这样写会导致异步操作,（一个对象变成一个函数都有可能会导致这个异步问题）
this.setState(()=>{
  return {
    inputValue:e.target.value
  }
})
用es6简写
const value = e.target.value
this.setState(()=>({
    inputValue:value
  }))
```

声明式开发
单项数据流的有点，当一个父组件底下有多个子组件的时候，如果子组件可以直接修改父组件的数据，如果出了bug不知道是哪个子组件导致，我们要一个一个去找，很麻烦。如果想修改父组件，我们只能在自组件调用父组件的方法，修改数据

函数式编程，都是一个一个函数组成的