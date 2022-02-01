import userReducer from './features/user';
import { combineReducers } from 'redux'

export default combineReducers({
  user:userReducer
})