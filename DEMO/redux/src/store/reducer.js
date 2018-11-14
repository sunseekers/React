import * as type from './actionTypes'
//一个文件的reducer超过300行，是我们设计有问题了
const defaultState = {
  list : [123,456],
  inputValue : ''
}
export default (state = defaultState,action)=>{
  //console.log(action)
  if (action.type === type.CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === type.CHANGE_ADD_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === type.CHANGE_DEL_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}