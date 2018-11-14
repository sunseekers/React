import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as type from './actionTypes'
export { reducer,actionCreators,type }
//把所有文件都通过index导出去，
//在别的地方引入的时候可以少引用一层数据结构