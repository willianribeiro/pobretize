import { createStore } from 'redux'
import rootReducer from './modules/reducers.js'

const store = createStore(rootReducer)
export default store
