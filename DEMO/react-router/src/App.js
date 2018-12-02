import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route,Link} from './react-router'
/**
 * HashRouter 通过路径里的哈希变量实现的
 * BrowserRouter 用的是html5的history API 实现的
 * Router是路由容器
 * Route 代表路由规则
 * 渲染的时候会先取出当前的路径（location.hash)，然后跟path进行匹配，
 * 如果匹配上则显示component指定的组件，如果不匹配就不显示
 */
let Home = (props,context)=> {
  // console.log(props)
  // console.log(context)
  return <div><Link to='/user'>首页</Link></div>
}
let User = ()=> <div>用户管理</div>
let Profile = ()=> <div>个人设置</div>
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/home" component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/profile' component={Profile}/>
        </div>
      </Router>
    )
  }
}

export default App;
