import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'
let store = applyMiddleware(thunk,promise,logger)(createStore)(reducers)
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = composeEnhancers(applyMiddleware(thunk,promise,logger))(createStore)(reducers);*/

window.store = store
export default store





