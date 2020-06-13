const menu = []
const orderList = []

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