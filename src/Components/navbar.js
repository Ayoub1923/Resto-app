import React, { Component } from 'react'
import './navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='logo'>Burger's</div>
        {/* <div className="buttons">
          <button className="sign-in">Sign in</button>
          <button className="sign-up">Sign up</button>
        </div> */}
      </div>
    )
  }
}
