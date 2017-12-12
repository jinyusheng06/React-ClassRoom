import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'
let store = applyMiddleware(thunk,promise,logger)(createStore)(reducers)
window.store = store
export default store





