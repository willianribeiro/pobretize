import {combineReducers} from 'redux'
import incomeModalReducers from './incomeModalReducers.js'

export default combineReducers({
  incomeModal: incomeModalReducers
})
