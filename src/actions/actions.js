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
export function deleteItem(el) {
  return () => {
    axios.delete(`http://localhost:3000/order/${el.id}`)
    window.location.reload()
  }
}
export function quantifyUp(el, id) {
  return () => {
    axios.patch(`http://localhost:3000/order/${id}`, {
      number: el.number + 1
    }).then(res => console.log(res),
      window.location.reload())
  }
}
export function quantifyDown(el, id) {
  return () => {
    if (el.number <= 1) el.number = 1
    else {
      axios.patch(`http://localhost:3000/order/${id}`, {
        number: el.number - 1
      }).then(res => console.log(res),
        window.location.reload())
    }
  }
}
export const register = (el) => {
  return axios.post('http://localhost:3000/user', el)
}
export function sum() {
  return (dispatch) => {
    axios.get("http://localhost:3000/order").then(response => {
      dispatch(addition(response.data))
    })
  }
}
export function addition(item) {
  return {
    type: "addition",
    item
  }
}
export function utilisateurs() {
  return (dispatch) => {
    axios.get("http://localhost:3000/user").then(response => {
      dispatch(user(response.data))
    })
  }
}
export function user(item) {
  console.log(item)
  return {
    type: "user",
    item
  }
} 