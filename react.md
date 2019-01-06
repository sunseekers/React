复杂度高的用 `react`
面向用户复杂度不高的建议用`vue`,`vue`的`API`多，需要记得东西多，`react` 的 `API` 少，大部分东西需要我们自己去实现

## 安装
> yarn 安装 `[yarn](https://yarnpkg.com/zh-Hans/)`

    搭建手脚架 yarn add create-react-app -g

    创建项目 create-react-app my-app

    启动项目 yarn start

    打包项目 yarn build

> 如果你安装的 `Node >= 6` 和 `npm >= 5.2`  可以使用快速安装方法

    创建项目 npx create-react-app my-app
    
    进入项目 cd my-app
    
    启动项目 npm start


`PWA` 全称 `progressive web application` 运行在`https`协议上的服务器，通过写网页的形式写手机`app`应用，借助网页写手机`app`的效果，用户第一次访问，需要联网，断网了第二次访问，依然可以看到网页东西

前端组件化：把一个页面拆分成一个一个小的组件

`React 16` 版本以后有一个叫`Fragment`的占位符，占位符不会被渲染，可以用来替换最外层的`div`，因为一个组件只能有一个根元素包裹


在`react` 中一个{}表示是一个js表达式，{{}}这种，外层表示js表达式，内层是js对象

我们在写代码写成一坨一坨的时候就应该要代码拆分，一个函数尽量只做一件事

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

单项数据流的特点，当一个父组件底下有多个子组件的时候，如果子组件可以直接修改父组件的数据，如果出`bug` 不知道是哪个子组件导致，我们要一个一个去找，很麻烦。如果想修改父组件，我们只能在自组件调用父组件的方法，修改数据

函数式编程，都是一个一个函数组成的

虚拟`DOM`就是一个`js`对象，它用来描述真实的`DOM`

真实`DOM <div id="app"><span>hello world </span></div>`

虚拟`DOM ['div',{id:'app'},['span',{},'hello world']]`

`js`创建一个`js`对象（代价小）很简单，但是创建一个`DOM`很耗性能（代价高）

虚拟 `DOM` 底层原理
1. state 数据
2.JSX 模板
3. 数据+模板生成虚拟`DOM`(虚拟`DOM`就是一个`js`对象，它用来描述真实的`DOM,['div',{id:'app'},['span',{},'hello world']]`)
4.用虚拟`DOM` 的结构生成真实的`DOM` ,来显示 （`<div id="app"><span>hello world </span></div>`）真实的`DOM`非常耗性能
5.`state`发生改变
6.数据+模板生成虚拟`DOM`(虚拟`DOM`就是一个`js`对象，它用来描述真实的`DOM,['div',{id:'app'},['span',{},'hello']]`)（提高了性能）
7.比较原始虚拟`DOM`和新的虚拟`DOM`的区别，找到区别是`span`中的内容
8.直接操作`DOM`，改变`span`中的内容

优点：
性能提升
它使得跨端应用得以实现，`react+Native`，得益于虚拟`DOM`

`state`是异步的，因为当连续很近的时间修改`state`，是为了节约性能采用异步更新

`reatc` 里面不建议用`ref`，因为`setState`是异步的，他会直接操作`DOM`，在`vue` 中也有这个属性，他是作为渲染结果存在的，在初始渲染的时候不能访问，不能相应式的，不能做数据绑定


每一次父组件的`render`函数被执行的时候，子组件的`render`函数也会被执行，这会导致性能浪费，我们可以用`shouldComponentUpdate()`进行性能优化,见子组件例子

`ajax`请求数据的时候建议在`componentDidMount()`,组件被挂载在页面的时候被执行,更好的是放到`state` 中去



生命周期函数是指在某一时刻组件会自动调用执行的函数`render`函数(`constructor`是ES6类所有的函数，不是`react`所独有的)




 `<button onClick={(e) => this.handleClick(e)}></button> ` (不建议使用，每一次回调都会重新渲染，当有`props`传递进来数据的时候，浪费性能。可以替换`this`的绑定问题，等价于底下
  `<button onClick={this.handleClick.bind(this)}></button>`

  如果我们希望组件隐藏自身，我们可以使用返回`null`，而不是其渲染输出https://reactjs.org/docs/conditional-rendering.html

  `store` 是唯一
  只有`store`才能改变`store`的内容（我们用了深层拷贝）


  中间件（`redux`）指的是`action`和`store`之间通信用的，原来`action`只能是对象才能把数据传递给`store`，加入中间件`action`是函数也可以了


  `this.props` 由 `React` 本身设定, 而 `this.state` 具有特殊的含义，如果您需要存储不参与数据流的内容（如计时器 ID ），则可以自由向该类手动添加其他字段。

  在`react`中，属性是父传子，状态是组件自己控制

  定义一个组件如何渲染，其实就是返回一个`react`函数

  `componentDidMount()` 挂载完成，`react` 把一个虚拟的`DOM`转成真实的`DOM`之后自动执行的方法

  `componentWillUnmount()` 当`react` 准备销毁一个组件，会自动调用此方法，进行一些资源的释放和清理工作

  解决`this`指向的三种方式
  ```
    第一种
  class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

第二种
  class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

 第三种
  class LoggingButton extends React.Component {
  // 这个语法确保 `this` 绑定在 handleClick 中。
  // 警告：这是 *实验性的* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}