import axios from 'axios'
import * as type from './actionTypes'
const changeDetail = (title,content)=>({
  type:type.GETDETAIL,
  title,
  content
})
export const getDetail = (id)=>{
  return (dispatch)=>{
    axios.get('/api/detail.json?id='+id).then(res=>{
      const result = res.data.data
      dispatch(changeDetail(result.title,result.content))
    })
  }
}