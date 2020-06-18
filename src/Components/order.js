import React, { Component } from 'react'
import { connect } from 'react-redux'
import { myOrder, deleteItem, quantifyDown, quantifyUp, importLoad } from '../actions/actions'
import Navbar from './navbar'
import './list.css'

class Order extends Component {
  state = {
    sumFood: 0
  }
  componentDidMount() {
    this.props.myOrder()
  }
  totalPrice = () => {
    const totalPrice = this.props.ordered.map
      (el => el.price * el.number)
    let somme = 0
    for (let i = 0; i < totalPrice.length; i++) {
      somme += totalPrice[i]
      this.setState({ sumFood: somme })
    }
    return somme
  }

  render() {
    const a = this.props.loadList.map(el => el.loadstatus).join('')

    return (
      <div>
        <Navbar />
        {(a === "client") ?
          <div>
            <div className="totaux">
              <p>Total price : {this.state.sumFood} DT</p>
              <button onClick={this.totalPrice}>Order </button>
            </div>
            <div className="food-list">
              {this.props.ordered.map(el => <div key={el.id} className='plate'>
                <img width="50%" height="100%" src={el.image} alt={el.name}></img>
                <div className="plate-details">
                  <div>{el.name}</div>
                  <div>{el.price} DT</div>
                  <div>{el.number}</div>
                  <div className="amount">
                    <label>Quantity:</label>
                    <button onClick={() => this.props.up(el, el.id)}>+</button>
                    <button onClick={() => this.props.down(el, el.id)}>-</button>
                  </div>
                  <div><i onClick={() => this.props.delete(el)} className="fa fa-trash" ></i></div>
                </div>
              </div>)}
            </div>
          </div>
          :
          <div className="food-list">
            {this.props.ordered.map(el => <div key={el.id} className='plate'>
              <img width="50%" height="100%" src={el.image} alt={el.name}></img>
              <div className="plate-details">
                <div>{el.name}</div>
                <div>{el.price} DT</div>
                <div className="amount">
                  <label>Quantity:</label>
                  <span>{el.number}</span>
                </div>
                <div><i onClick={() => this.props.delete(el)} className="fa fa-trash" ></i></div>
              </div>
            </div>)}
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ordered: state.ordered,
  loadList: state.getLoad
})
const actionCreators = (dispatch) => ({
  myOrder: () => dispatch(myOrder()),
  delete: (el) => dispatch(deleteItem(el)),
  up: (el, id) => dispatch(quantifyUp(el, id)),
  down: (el, id) => dispatch(quantifyDown(el, id)),
  importLoad: () => dispatch(importLoad())
})
export default connect(mapStateToProps, actionCreators)(Order)