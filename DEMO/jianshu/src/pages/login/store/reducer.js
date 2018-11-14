import { fromJS } from 'immutable'
import * as type from './actionTypes'
const defaultState = fromJS({
  login: false,
})
export default (state=defaultState,action)=>{
  switch(action.type) {
    case type.CHANGE_LOGIN :
    return state.set('login',action.value);
    case type.CHANGE_LOGOUT:
    return state.set('login',action.value);
    default :
    return state;
  }
}