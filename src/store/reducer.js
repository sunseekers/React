import * as Type from './actionTypes.js'
const defaultState = {
  inputValue:'',
  list:[]
}
export default (state = defaultState,action)=>{
  console.log(state,action)
  //reducer 可以接受state，但是绝不能修改state
  if (action.type === Type[CHANGE_INPUT_VALUE]){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}
//state.整个仓库存储的数据