const menu = []
const orderList = []
const coordinates = null
const getload = []
export function foodMenu(state = menu, action) {
  if (action.type === "displayServices" || action.type === "delete service")
    return action.item
  return state
}
export function ordered(state = orderList, action) {
  if (action.type === "chosen")
    return action.item
  return state
}
export function user(state = coordinates, action) {
  if (action.type === "user")
    return action.item
  return state
}
/***********************load status reducer****************** */
export function getLoadReducer(state = getload, action) {
  if (action.type === "getLoad")
    return action.payload
  return state
}