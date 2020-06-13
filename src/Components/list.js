import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actionCreators from './actions/actions'
import { move, add } from '../actions/actions'
import './list.css'

class List extends Component {
  componentDidMount() {
    this.props.displayFood()
  }
  render() {
    return (
      <div className="food-list">
        {this.props.foodList.map(el => <div key={el.id} className='plate'>
          <img width="50%" height="100%" src={el.image} alt={el.name}></img>
          <div className="plate-details">
            <div>{el.name}</div>
            <div>{el.price}</div>
            <div>{el.number}</div>
            <button onClick={() => this.props.ordered(el)} className="order-button">Order</button>
          </div>
        </div>
        )
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  foodList: state.foodMenu
})
const actionCreators = (dispatch) => ({
  displayFood: () => dispatch(move()),
  ordered: (el) => dispatch(add(el))
}) 
export default connect(mapStateToProps, actionCreators)(List)