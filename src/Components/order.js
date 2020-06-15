import React, { Component } from 'react'
import { connect } from 'react-redux'
import { myOrder, deleteItem, quantifyDown, quantifyUp, addition } from '../actions/actions'
import './list.css'

class Order extends Component {
  componentDidMount() {
    this.props.myOrder()
  }
  render() {
    return (
      <div className="food-list">
        {this.props.ordered.map(el => <div key={el.id} className='plate'>
          <img width="50%" height="100%" src={el.image} alt={el.name}></img>
          <div className="plate-details">
            <div>{el.name}</div>
            <div>{el.price * el.number}</div>
            <div>{el.number}</div>
            <div className="amount">
              <label>Quantity:</label>
              <button onClick={() => this.props.up(el, el.id)}>up</button>
              <button onClick={() => this.props.down(el, el.id)}>down</button>
            </div>
            <div><i onClick={() => this.props.delete(el)} className="fa fa-trash" ></i></div>
          </div>
        </div>)}
        {/* <button onClick={this.props.validate}>Order </button> */}
        <p>{this.props.totalCost}</p>
        <p>{this.props.totalQuantity}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ordered: state.ordered,
  totalCost: state.totalCost,
  totalQuantity: state.totalQuantity
})
const actionCreators = (dispatch) => ({
  myOrder: () => dispatch(myOrder()),
  delete: (el) => dispatch(deleteItem(el)),
  up: (el, id) => dispatch(quantifyUp(el, id), addition()),
  down: (el, id) => dispatch(quantifyDown(el, id), addition())
})
export default connect(mapStateToProps, actionCreators)(Order)