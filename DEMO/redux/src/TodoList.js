import React from 'react'
import {connect} from 'react-redux'
import { getInputChangeAction,getListChangeAction,getDelChangeAction } from './store/actionCreators';

const TodoList = (props)=> {//无状态组件里面没有生命周期函数，不会真正的生成底层的东西
  const { list,inputValue,handleInputChange,handleDelChange,handleClick } = props
  return (
    <div>
      <div>
        <input value = {inputValue} onChange = {handleInputChange}/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index)=>{
            return (
              <li onClick={()=>handleDelChange(index)} key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
const mapStateToProps = (state) =>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputChange(e){
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleDelChange(index){
      const action = getDelChangeAction(index)
      dispatch(action)
    },
    handleClick() {
      const action = getListChangeAction()
      dispatch(action)
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(TodoList)