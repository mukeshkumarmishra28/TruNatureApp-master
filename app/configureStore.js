import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'


import saga from './sagas'

import { configureReducer } from './configureReducer'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const reducer = configureReducer()
  const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(saga)
  return store
}

export const store = configureStore()
