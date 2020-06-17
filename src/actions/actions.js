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
export function addToMainList(el) {
  return () => {
    axios.post(`http://localhost:3000/posts/`, el).then(response => console.log(response.data))
    window.location.reload()
  }
}
export function deleteFromMainList(el) {
  return () => {
    axios.delete(`http://localhost:3000/posts/${el.id}`).then(response => console.log(response.data))
    window.location.reload()
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
    axios.delete(`http://localhost:3000/order/${el.id}`).then(response => console.log(response.data))
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
export function utilisateurs() {
  return (dispatch) => {
    axios.get("http://localhost:3000/user").then(response => {
      dispatch(user(response.data))
    })
  }
}
export function user(item) {
  return {
    type: "user",
    item
  }
}
/*************************get load***************************** */
export function importLoad() {
  return (dispatch) => {
    axios.get("http://localhost:3000/load").then(response => {
      dispatch(getLoad(response.data))
    })
  }
}
export function getLoad(payload) {
  return {
    type: "getLoad",
    payload
  }
}
/************************patch loadstatus**************************/
export function changeLoad(data) {
  return () => {
    axios.patch(`http://localhost:3000/load/1`, { loadstatus: data }).then(res => console.log(res))
  }
}