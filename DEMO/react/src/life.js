import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class LifeCycle extends Component {
  constructor(props){
    console.log('constructor:是第一个被执行的构造函数')
    super(props)
    this.state = {
      count:0,
      number:0
    }
  }
  handleChange=()=>{
    this.setState((preState)=>({
      count:preState.count+1
    }))
  }
  tick(){
    this.setState((preState)=>({
      number:preState.number+1
    }))
  }
  handleUnMountChange=()=>{
    //index.js:1452 Warning: Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    //in LifeCycle (at TodoList.js:44)  
    // 因为定时器没有被销毁，一直引用这setState，这时候的this已经是undefined了
    //解决办法，情况定时器
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  componentWillMount(){
    console.log('componentWillMount：第一个被执行的生命周期函数，当第一次在组件即将被挂载到页面的时刻自动执行')
  }
  render(){
    console.log('render：第二个被执行的生命周期函数')
    return (
      <div>
        <button onClick={this.handleChange}>j计数：{this.state.count}</button>
        <button onClick={this.handleUnMountChange}>卸载定时计数器：{this.state.number}</button>
      </div>
    )
  }
  //异步获取数据，数据渲染我们一般会在这个生命周期函数里面进行
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('componentDidMount：第三个被执行的生命周期函数,当第一次在组件挂载到页面的之后自动执行')
  }
  //当组件数据发生变化的时候，重新渲染

  //询问逐渐是否要被更新，当一个组件的属性或者状态只要有一个发生变化，默认就会重新渲染，这个钩子函数适合做优化
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate：更新组件执行的第一个生命周期函数。组件被更新之前，他会自动被执行")
    /*
    循环下一个新的属性对象的每一个属性，判断新的属性值和旧的属性值是不是同一个。这个比较属于浅比较
    for(let prop in nextProps){
      if(nextProps[prop]!==this.props[props]){
        return true
      }
    }
    */
    if (nextState.count < 10) {//累加计数器
      return true
    }else {
      return false
    }
    //需要返回true或false，如果返回false，组件将不被更新；可以做性能优化
  }
  //他和shouldComponentUpdate的区别：如果shouldComponentUpdate返回false，这个函数不被执行
  //shouldComponentUpdate返回true，这个函数才会被执行
  componentWillUpdate(){
    console.log("componentWillUpdate:组件更新前执行")
  }
  componentDidUpdate(){
    console.log('componentDidUpdate：组件更新完成之后被执行')
  }

  //父组件更新子组件，父组件传给子组件的数据发生变化，子组件也要走一遍生命周期函数
  //一个组件要从父组件接受参数。如果这个组件第一次存在于父组件中，不会执行，如果这组件不是第一次存在组件中，会执行
  componentWillReceiveProps(){
    console.log("我是父组件，不会被执行")
  }

  //组件不用卸载的时候执行的函数,因为我们建立的是单页面应用，有一些组件不用的时候，应该对他的资源进行处理
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
}
export default LifeCycle