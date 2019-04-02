/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allReducers from './src/reducers'
import rootSaga from './src/sagas/rootSaga'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { PersistGate } from 'redux-persist/es/integration/react'
import NavigationComponent from './src/component/Navigation/NavigationComponent'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigationReducer,
  'root',
)

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(
  sagaMiddleware,
  navigationMiddleware,
  logger
))

let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationComponent />
        </PersistGate>
      </Provider>
    )
  }
}
