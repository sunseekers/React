import {fromJS} from 'immutable'
import * as type from './actionTypes'
const defaultState = fromJS({
  title:'',
  content:''
})
export default (state = defaultState,action)=>{
  switch(action.type) {
    case type.GETDETAIL :
    return state.merge({
      title:action.title,
      content:action.content
    })
    default :
    return state
  }
}