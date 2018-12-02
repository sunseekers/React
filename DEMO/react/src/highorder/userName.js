import React,{Component} from 'react'
import local from './local'
class UserName extends Component {
  render(){
    return (
      <div>
        <label>
          用户名：<input defaultValue={this.props.data} onChange={this.props.save}/>
        </label>
      </div>
    )
  }
}
export default local(UserName,'userName','用户名')
/*
现在希望加载数据的时候先从local里取一个可以、，然后再从接口里面取出这个key得值进行显示
*/