import { combineReducers } from 'redux'
import { foodMenu, ordered, totalCost, totalQuantity, user } from './reducers'
const allReducers = combineReducers({
  foodMenu: foodMenu,
  ordered: ordered,
  totalQuantity: totalQuantity,
  totalCost: totalCost,
  users: user
})
export default allReducers;
