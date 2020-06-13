import axios from 'axios'

export function move() {
  return (dispatch) => {
    axios.get("http://localhost:3000/posts").then(response => {
      dispatch(change(response.data))
    })
  }
}
export function change(item) {
  return {
    type: "displayServices",
    item
  }
}
export function add(el) {
  return () => {
    axios.post("http://localhost:3000/order", el).then(response => {
      console.log(response.data)
    })
  }
}
export function myOrder() {
  return (dispatch) => {
    axios.get("http://localhost:3000/order").then(response => {
      dispatch(chosen(response.data))
    })
  }
}
export function chosen(item) {
  return {
    type: "chosen",
    item
  }
}