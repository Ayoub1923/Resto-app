import React, { Component } from 'react'
import SignUp from '../signup/sign'
import { Link } from 'react-router-dom'
export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className='logo'>Burga's</div>
        <div className="links">
          <Link to="/" className="home">Home</Link>
          <Link to="/list" className="home">Our burgers</Link>
        </div>
        <SignUp />
      </div>
    )
  }
}
