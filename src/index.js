import React from 'react';
import ReactDOM from 'react-dom';
//all in js,js里面可以引入css
import './index.css';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';
//JSX语法中，如果我们要使用自己创建的组件，组件开头必须是大写的字母，
//方便区分是自己定义的组件还是html里面的元素
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
