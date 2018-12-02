import React,{Component} from 'react'
class Example extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count:0
    }
  }
  render(){
    return (
      <div>
        <p>You click {this.state.count} times </p>
        <button onClick = {()=>this.setState({count:this.state.count+1})}>Click me</button>
       </div>
    )
  }
}

//hooks 版本
import {useState} from 'react'
function ExampleHooks () {
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>You click {count} times </p>
      <button onClick={()=>setCount(count+1)}>Click me </button>
    </div>
  )
}

/*
useState 是react 自带的一个 hook函数，作用是声明状态变量。这个函数接受的参数是我们的状态初始值
返回一个数组，第一项是当前状态值，第二项是改变状态值得方法函数
*/

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date:new Date()
    }
  }
  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.tick()
    },100)
  }
  componentWillUnmount(){
    cleartInterval(this.timerID)
  }
  tick(){
    this.setState(()=>{
      date:new Date()
    })
  }
  render(){
    return (
      <div>
        {this.state.date}
      </div>
    )
  }
}


class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state={
      isToggle:false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(){
    this.setState((preState)=>({
      isToggle:!preState.isToggle
    }))
  }
  render(){
    return (
      <div>
        <button onClick={this.handleChange}>
        {this.state.isToggle? 'NO':'Yes'}
        </button>
      </div>
    )
  }
}