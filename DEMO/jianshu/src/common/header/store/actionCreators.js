import * as type from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'
const changeList = (data) => ({//习惯把常量放在前面
  type:type.CHANGE_LIST,
  data:fromJS(data),
  totalPage: Math.ceil(data.length / 10)//获取总的条数，取整
})
export const getFocus = ()=>({
  type:type.SEARCH_FOCUS
})
export const getBlur = ()=>({
  type:type.SEARCH_BLUR
})
export const mouseEnter = ()=>({
  type:type.MOUSEENTER
})
export const mouseLeave = ()=>({
  type:type.MOUSELEAVE
})
export const getPage = (page) => ({
  type:type.PAGEVALUE,
  page
})
export const getList = () => {
  return (dispatch) => {//底层是node，先找对应的路由，找不到路由在去public里面找，找到了之后原样输出
    axios.get('/api/headerList.json').then(res=>{
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(()=>{
      console.log('error')
    })
  }
}
