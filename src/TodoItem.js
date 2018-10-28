import React,{Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)//为了节约性能，不在元素里面写this.handleClick.bind(this)，可以直接用this.handleClick
  }
  shouldComponentUpdate(nextProps,nextState){
    // nextProps:接下来我的props会变化成什么样
    // nextState：：接下来我的state会变化成什么样
    if (nextProps.content!==this.props.content) {
      //数据发生改变
      return true
    }else {
      return false
    } 
  }
  render(){
    const {content} =  this.props ;//结构赋值
    return (
      // 子组件接受父组件的数据通过this.props[xxx]
      <div onClick={this.handleClick}>{content}</div>
    )
  }
  handleClick(){
    console.log(this.props.index)
    const { deleteItem,index } = this.props
    //不允许子组件直接修改父组件的内容,只能通过调用父组件的方法实现
    deleteItem(index)
  }
}
TodoItem.propTypes = {//对传过来的值做属性校验,如果父组件没有穿过来，就不会做验证。除非我们在后面加isRequired要求必传
//  test:PropTypes.string.isRequired,
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number
}
TodoItem.defaultProps = {//设置默认值，如果父组件没有传过来，就显示默认的，主要针对值属性验证中必选，而没有传报错问题

}
export default TodoItem