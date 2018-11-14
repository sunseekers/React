//异步操作
import axios from 'axios'
import * as type from './actionTypes'
import {fromJS} from 'immutable'
const changeHomeData = (result)=>({
  type:type.CHANGE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
})
const addHomeList = (list,nextPage)=>({
  type:type.ADD_HOME_LIST,
  list:fromJS(list),
  nextPage
})
export const toggleTopShow = (flag)=>({
  type:type.TOGGLE_SHOW,
  flag
})
export const getHomeInfo = ()=>{
  return (dispatch)=>{
      axios.get('/api/home.json').then(res=>{
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}
export const getMoreList = (page)=>{
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then(res=>{
      const result = res.data.data
      dispatch(addHomeList(result,page+1))
    })
  }
} 
