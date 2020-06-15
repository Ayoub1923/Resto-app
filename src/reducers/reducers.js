const menu = []
const orderList = []
const totalPrice = 0
const totalNumbers = 0
const coordinates = null

export function foodMenu(state = menu, action) {
  if (action.type === "displayServices")
    return action.item
  return state
}
export function ordered(state = orderList, action) {
  if (action.type === "chosen")
    return action.item
  return state
}   
export function totalCost(state = totalPrice, action) {
  if (action.type === "addition")
    return state = action.item.filter()
  return state
}
export function totalQuantity(state = totalNumbers, action) {
  if (action.type === "addition")
    return
  return state
}
export function user(state = coordinates, action) {
  if (action.type === "user")
    return action.item
  return state
}