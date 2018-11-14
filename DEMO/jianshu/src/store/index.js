import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//异步请求或者复杂的逻辑放到action里面。中间件指的是action和store之间
//没有引入中间件的话action只能是一个对象，使用之后可以是函数（相当于对dispatch的一个封装或者升级
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;