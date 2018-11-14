import * as Type from './actionTypes.js'
export const getInputChangeAction = (val)=>({
    type:Type[CHANGE_INPUT_VALUE],//做什么事
    val
})
