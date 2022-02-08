import { combineReducers } from 'redux-immutable'

import applicationReducer from './reducers'

export const configureReducer = () => {
  const reducer = combineReducers(applicationReducer)
  return reducer
}
