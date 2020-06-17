import React, { Component } from 'react'
import { connect } from 'react-redux'
import { move, add, importLoad, deleteFromMainList, addToMainList } from '../actions/actions'
import Navbar from './navbar'
import './list.css'
class List extends Component {
  state = {
    image: "",
    name: "",
    price: ""
  }
  componentDidMount() {
    this.props.displayFood()
    this.props.importLoad()
  }
  addOrder = (el) => {
    const a = this.props.loadList.map(el => el.loadstatus).join('')
    if (a === "guest") {
      alert("PLease sign in")
    }
    else
      this.props.ordered(el)
  }
  render() {
    const a = this.props.loadList.map(el => el.loadstatus).join('')
    return (
      <div>
        <Navbar />
        {(a === "client" || a === "guest") ?
          <div className="food-list">
            {this.props.foodList.map(el => <div key={el.id} className='plate'>
              <img width="50%" height="100%" src={el.image} alt={el.name}></img>
              <div className="plate-details">
                <div>{el.name}</div>
                <div>{el.price} DT</div>
                <button onClick={() =>
                  this.addOrder(el)
                } className="order-button">Order</button>
              </div>
            </div>
            )
            }
          </div> :
          <div>
            <div className="add-item">
              <div>
                <input placeholder="image URL" onChange={(e) => this.state.image = e.target.value}></input>
                <input placeholder="burger's name" onChange={(e) => this.state.name = e.target.value}></input>
                <input placeholder='price' onChange={(e) => this.state.price = e.target.value}></input>
              </div>
              <div className="add-icon"><i onClick={() => this.props.add({
                "image": this.state.image,
                "name": this.state.name,
                "price": this.state.price,
              })} className="fa fa-plus" ></i></div>
            </div>
            <div className="food-list">
              {this.props.foodList.map(el => <div key={el.id} className='plate'>
                <img width="50%" height="100%" src={el.image} alt={el.name}></img>
                <div className="plate-details">
                  <div>{el.name}</div>
                  <div>{el.price} DT</div>
                  <div><i onClick={() => this.props.delete(el)} className="fa fa-trash" ></i></div>
                </div>
              </div>
              )
              }
            </div>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  loadList: state.getLoad,
  foodList: state.foodMenu
})
const actionCreators = (dispatch) => ({
  importLoad: () => dispatch(importLoad()),
  displayFood: () => dispatch(move()),
  ordered: (el) => dispatch(add(el)),
  delete: (el) => dispatch(deleteFromMainList(el)),
  add: (el) => dispatch(addToMainList(el))
})
export default connect(mapStateToProps, actionCreators)(List)