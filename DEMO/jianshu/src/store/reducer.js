import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer }from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import {reducer as loginReducer } from '../pages/login/store'
const reducer = combineReducers ({
  header:headerReducer,
  home:homeReducer,
  detail:detailReducer,
  login: loginReducer
})
export default reducer
//如果一个reducer内容会很多，可能会造成代码的不可维护，
//我们可以把很多reducer拆成很多子的reducer，然后在合并成一个