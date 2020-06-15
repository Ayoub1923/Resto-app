import React, { Component } from 'react'
import './navbar.css'
import SignUp from '../signup/sign'
export default class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='logo'>Burger's</div>
        <SignUp />
        {/* <div className="buttons">
          <button className="sign-in">Sign in</button>
          <button className="sign-up">Sign up</button>
        </div> */}
      </div>
    )
  }s
}
