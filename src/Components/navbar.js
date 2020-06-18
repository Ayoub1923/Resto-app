import React, { Component } from 'react'
import './navbar.css'
import SignUp from '../signup/sign'
import { importLoad } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    const a = this.props.loadList.map(el => el.loadstatus).join('')

    return (
      <div className='nav'>
        <div className='logoo'>Burga's</div>
        <div className="links">
          <Link to="/" className="home">Home</Link>
          <Link to="/list" className="home">Our burgers</Link>
          {(a === "client") ? <Link to="/order" className="home">My bill</Link> : (a === "admin") ? <Link to="/order" className="home">Orders</Link>: null}
        </div>
        <SignUp />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadList: state.getLoad
})
const actionCreators = (dispatch) => ({
  importLoad: () => dispatch(importLoad())
})
export default connect(mapStateToProps, actionCreators)(Navbar)