import { combineReducers } from 'redux'
import { foodMenu, ordered, getLoadReducer, user } from './reducers'
const allReducers = combineReducers({
  foodMenu: foodMenu,
  ordered: ordered,
  users: user,
  getLoad: getLoadReducer
})
export default allReducers;
