import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './common/header/index'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'//异步组件，Detail 引用的组件变了，原来的index无法直接获取state数据
import Login from './pages/login'
import Write from './pages/write';
//Provider组件可以通过store字段把仓库store里面的数据传给各个子组件使用，在子组件里面选择对应的reducer就可以引用
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
