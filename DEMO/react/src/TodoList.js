import React,{Component,Fragment} from 'react'
import LifeCycle from './life'
import HomePage from './HomePage'
import Memo from './highorder'
import Model from './Model'
import ErrorBoundary from './ErrorBoundary'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      inputVal:'ui',
      password:''
    }
     // 一般把this问题的绑定放在页面的顶部,提升性能优化，整个程序里面只会执行一次，避免子组件的无谓渲染
     //this指向问题是js原本就有的，并不是react所独有
    this.handleClick = this.handleClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  render(){
    return (
      <Fragment>
        
        {/* 调用两个相同事件，我们可以通过传入不同的参数，分别进行不同的操作，就不要写两个一样的方法只是某几个数据不同 */}
        <input value = {this.state.inputVal} 
        onChange = {(e)=>this.handleChange('inputVal',e)} />
        
        <input value = {this.state.password} 
        onChange = {(e)=>this.handleChange('password',e)} />
        {/* 不受状态state控制，他就不是受控组件了 
          ref里面如果放得是一个函数，那么此函数会在当此虚拟DOM转换真实DOM并插入到这页面后立刻调用
          参数是真实DOM
        */}
        <input type="text" ref={input=>this.username = input} />
        
        <button onClick = {this.handleClick} > 提交 </button>
        <ul>
          {
            this.state.list.map((item,index) =>{
              return (
                // 如果我们将参数传递给事件处理程序，可以使用箭头函数或者绑定事件
                // <li onClick={this.handleDel.bind(this,index)} key={item}>{item}</li>
                <li onClick={()=>this.handleDel(index)} key={item}>{item}</li>
              )
            })
          }
        </ul>
        <LifeCycle/>
        <HomePage/>
        <Memo/>
        <Model/>
        <ErrorBoundary/>
      </Fragment>
    )
  }
  handleChange(key,e){
    const value = e.target.value
    this.setState(()=>({
      [key]:value
    }))
    //console.log(this.state)
  }
  handleClick(){
    // 如果给input框附一个username的ref值，那么就可以通过this.refs.username获取到他对应的真实DOM元素
    console.log(this.username.value)
    this.setState((preState)=>({
      list:[...preState.list,preState.inputVal],
      inputVal:''
    }))
  }
  handleDel(index){
    this.setState((preState)=>{
      const list = preState.list
      list.splice(index,1)
      return list
    })
  }
}
export default TodoList