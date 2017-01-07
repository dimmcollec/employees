import { combineReducers } from 'redux'
import listEmployees from './listEmployees'
import filter from './filter'
import editor from './editor'

export const rootReducer = combineReducers({
  listEmployees,
  filter,
  editor
})
