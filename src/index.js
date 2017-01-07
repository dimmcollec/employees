import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { routes } from './routes'

const store = configureStore()

window.store = store

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
)
