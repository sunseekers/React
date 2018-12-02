import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
class Title extends Component {
  static contextTypes = {
    color:PropTypes.string
  }
  render(){
    //this.context 接受数据
    return (
      <div>
        <h1 style={{color:this.context.color}}>我是标题</h1>
      </div>
    )
  }
}
class Content extends Component {
  static contextTypes = {//接受谁，就把谁传进来，不接受就不传
    color:PropTypes.string,
    setColor:PropTypes.func
  }
  render(){
    return (
      <div>
        <h1 style={{color:this.context.color}}>我是内容</h1>
        <button onClick={()=>{this.context.setColor('green')}}> 变绿 </button>
        <button onClick={()=>{this.context.setColor('yellow')}}> 变黄 </button>
      </div>
    )
  }
}
class Header extends Component {
  render(){
    return (
      <div>
        <Title/>
      </div>
    )
  }
}
class Main extends Component {
  render(){
    return (
      <div>
        <Content/>
      </div>
    )
  }
}
 class HomePage extends Component {
  /**
   * 1.在父组件里定义childContextTypes 子上下文类型
   * 2.在父组件里定义一个getChildContext用来返回上下文对象
   * 3.在要接受这些上下文对象的组件里写contextTypes
   */
  static childContextTypes = {
    color:PropTypes.string,
    setColor:PropTypes.func

  }
  getChildContext(){
    return {
      color:this.state.color,
      setColor:this.setColor
    }
  }
  constructor(props){
    super(props)
    //状态只能自己改不能别人改，但是可以在自己身上定义一个方法，传给别人，别人帮忙改
    this.state = {
      color: 'red'
    }   
  }
  setColor=(color)=>{
    this.setState(()=>({
      color
    }))
  }
  render(){
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}
export default HomePage