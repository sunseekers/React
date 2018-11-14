import axios from 'axios'
import * as type from './actionTypes'
const changeLogin = ()=>({
  type:type.CHANGE_LOGIN,
  value:true
})
export const loginOut = ()=>({
  type:type.CHANGE_LOGOUT,
  value:false
})
export const login = (accout, password) => {
  return (dispatch)=>{
    axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
      const result = res.data.data
      if (result) {
        dispatch(changeLogin())
      }else {
        alert('登录失败')
      }
    })
  }
}