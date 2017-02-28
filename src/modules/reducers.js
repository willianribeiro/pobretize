import {combineReducers} from 'redux'
import homeReducer from './home/reducers/index.js'

export default combineReducers({
  home: homeReducer
})
