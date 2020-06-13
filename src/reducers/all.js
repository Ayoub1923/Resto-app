import { combineReducers } from 'redux'
import { foodMenu, ordered } from './reducers'
const allReducers = combineReducers({
  foodMenu: foodMenu,
  ordered: ordered
})
export default allReducers;
