import React,{Component} from 'react'
//用来保护那些只有登录才能访问的路由
//组件渲染的三种方式，第一种：Component，第二中render
export default function ({component:Component},...rest) {
  return <Route {...rest} render={props=>(
    localStorage.getItem('login')? <Component {...props}/>:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}/>
  )} />
}