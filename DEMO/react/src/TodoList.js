import React,{Component,Fragment} from 'react'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      inputVal:'ui'
    }
     // 一般把this问题的绑定放在页面的顶部,提升性能优化，整个程序里面只会执行一次，避免子组件的无谓渲染
     //this指向问题是js原本就有的，并不是react所独有
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  render(){
    return (
      <Fragment>
        <input value = {this.state.inputVal} onChange = {this.handleChange} />
        <button onClick = {this.handleClick} > 提交 </button>
        <ul>
          {
            this.state.list.map((item,index) =>{
              return (
                <li onClick={()=>this.handleDel(index)} key={item}>{item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleChange(e){
    const value = e.target.value
    this.setState(()=>({
      inputVal:value
    }))
  }
  handleClick(){
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