import React, { Component } from 'react';
//ES6 结构赋值
//import { Component} from 'react'
//等价于
//import React from 'react'
// const Component = React.Component


//一个类继承另一个类（一个类继承react，就是react
class App extends Component {
  render() {//返回什么，组件就显示什么
    return (
      <div>
        hello world,my name sunseekers
      </div>
    );
  }
}

export default App;
