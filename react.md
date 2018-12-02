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

虚拟DOM就是一个js对象，它用来描述真实的DOM

真实DOM <div id="app"><span>hello world </span></div>
虚拟DOM ['div',{id:'app'},['span',{},'hello world']]

js创建一个js对象（代价小）很简单，但是创建一个DOM很耗性能（代价高）

虚拟 `DOM` 底层原理
1. state 数据
2.JSX 模板
3. 数据+模板生成虚拟`DOM`(虚拟DOM就是一个js对象，它用来描述真实的DOM,['div',{id:'app'},['span',{},'hello world']])
4.用虚拟`DOM` 的结构生成真实的`DOM` ,来显示 （<div id="app"><span>hello world </span></div>）真实的DOM非常耗性能
5.state发生改变
6.数据+模板生成虚拟`DOM`(虚拟DOM就是一个js对象，它用来描述真实的DOM,['div',{id:'app'},['span',{},'hello']])（提高了性能）
7.比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容
8.直接操作DOM，改变span中的内容

优点：
性能提升
它使得跨端应用得以实现，react+Native，得益于虚拟DOM

state是异步的，因为当连续很近的时间修改state，是为了节约性能采用异步更新

reatc 里面不建议用ref，因为setState是异步的，他会直接操作DOM

生命周期函数的作用
所有的生命周期都可以不存在，除了render函数除外，因为react.Component函数默认内置了其他函数，但是没有内置render函数

每一次父组件的render函数被执行的时候，子组件的render函数也会被执行，这会导致性能浪费，我们可以用`shouldComponentUpdate()`进行性能优化,见子组件例子

ajax请求数据的时候建议在`componentDidMount()`,组件被挂载在页面的时候被执行



生命周期函数是指在某一时刻组件会自动调用执行的函数`render`函数(`constructor`是ES6类所有的函数，不是`react`所独有的)


JXS 可以使用表达式，函数或者对象的形式
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

```
this.setState()里面传一个对象更新可能会是一个异步，解决方案里面传递一个函数


 <button onClick={(e) => this.handleClick(e)}></button> (不建议使用，每一次回调都会重新渲染，当有props传递进来数据的时候，浪费性能。可以替换this的绑定问题，等价于底下
  <button onClick={this.handleClick.bind(this)}></button>

  如果我们希望组件隐藏自身，我们可以使用返回null，而不是其渲染输出https://reactjs.org/docs/conditional-rendering.html

  状态提升和父子组件传值没有什么区别（基本一模一样）

  store 是唯一
  只有store才能改变store的内容（我们用了深层拷贝）
  reducer 必须是纯函数（纯函数，给固定的输入，就一定会有固定的输出，而且不会有任何副作用

  ui组件里面只有一个render函数，其他的都是传参进来的

  中间件（redux）指的是action和store之间通信用的，原来action只能是对象才能把数据传递给store，加入中间件action是函数也可以了

  目前大部分的异步处理都使用redux-saga中间件

  this.props 由 React 本身设定, 而 this.state 具有特殊的含义，如果您需要存储不参与数据流的内容（如计时器 ID ），则可以自由向该类手动添加其他字段。

  在`react`中，属性是父传子，状态是组件自己控制

  定义一个组件如何渲染，其实就是返回一个`react`函数

  `componentDidMount()` 挂载完成，`react` 把一个虚拟的`DOM`转成真实的`DOM`之后自动执行的方法

  `componentWillUnmount()` 当`react` 准备销毁一个组件，会自动调用此方法，进行一些资源的释放和清理工作

  解决`this`指向的三种方式
  this.handChange.bind(this)
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

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
  ()=>this.handChange()
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

  handChange=()=>{//ES7的写法

  }
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
  {}只能放表达式，不能放js语句，因为他需要一个返回值