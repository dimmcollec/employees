import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { rootReducer } from '../reducers'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return composeEnhancers(
    applyMiddleware(thunkMiddleware),
    // applyMiddleware(createLogger()),
    // applyMiddleware(logger),
    applyMiddleware(generateId)
  )(createStore)(rootReducer)
}
