/**
 * 高阶组件是一个普通的函数，传入一个组件，返回一个新的组件
 */
import React,{Component} from "react"
import ReactDOM from 'react-dom'
import UserName from './userName'
class Memo extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
          <UserName/>
        留言：<textarea></textarea>
      </div>
    )
  }
}
export default Memo