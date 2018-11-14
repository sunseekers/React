import * as type from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [],
  articleList:[], 
  articlePage:1,
  recommendList:[],
  showScroll:false,//默认不显示返回顶部按钮
})
const changeHomeList = (state,action)=>{
  return state.merge({
    topicList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList),
  });
}
export default (state = defaultState,action) => {
  switch(action.type) {
    case type.CHANGE_HOME_DATA:
    return changeHomeList(state,action)
    case type.ADD_HOME_LIST:
    // 获取原来的内容，然后再向后面追加
    return state.merge({
      'articleList':state.get('articleList').concat(action.list),
      'articlePage':action.nextPage

    });
    case type.TOGGLE_SHOW:
    return state.set('showScroll',action.flag)
    default:
      return state
  }
  
}