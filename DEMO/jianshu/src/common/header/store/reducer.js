import * as type from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn:false,
  page: 1,
  totalPage: 1
})
export default (state = defaultState,action) => {
  //immutable 对象的set方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
  // console.log(action)
  switch(action.type) {
    case type.SEARCH_FOCUS:
      return state.set('focused',true);
    case type.SEARCH_BLUR:
      return state.set('focused',false);
    case type.CHANGE_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })//合并，同时改变多个内容
      // return state.set('list',action.data).set('totalPage',action.totalPage)
    case type.MOUSEENTER :
      return state.set('mouseIn',true)
    case type.MOUSELEAVE :
      return state.set('mouseIn',false)
    case type.PAGEVALUE :
      return state.set('page',action.page)
    default:
      return state
  }
  
}