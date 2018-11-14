import * as type from './actionTypes'
export const getInputChangeAction = (value) => ({
  type: type.CHANGE_INPUT_VALUE,
  value
})
export const getListChangeAction = (value) => ({
  type: type.CHANGE_ADD_VALUE,
  value
})
export const getDelChangeAction = (index) => ({
  type: type.CHANGE_DEL_VALUE,
  index
})