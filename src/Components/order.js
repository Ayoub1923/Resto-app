import React, { Component } from 'react'
import { connect } from 'react-redux'
import { myOrder } from '../actions/actions'
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
            <div>{el.price}</div>
            <div>{el.number}</div>
            <label>Quantity</label>
            <input onChange={this.props.quantity} ></input>
          </div>
        </div>)}
        {/* <button onClick={this.props.validate}>Order </button> */}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ordered: state.ordered
})
const actionCreators = (dispatch) => ({
  myOrder: () => dispatch(myOrder()),
  // validate: () => dispatch(validate())
})
export default connect(mapStateToProps, actionCreators)(Order)