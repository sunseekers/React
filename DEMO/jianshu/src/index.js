import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';//一旦在某个组件里面被引用，在其他组件也生效，是全局的
import App from './App';
import './statics/iconfont/iconfont'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

