import {createStore, applyMiddleware} from 'redux'
import sagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './saga'
const saga = sagaMiddleware()


const store = createStore(reducer, applyMiddleware(saga))
saga.run(rootSaga)

export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe

export default store