import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default class Signbar extends Component {
  render() {
    return (
      <div className="links">
        <Link to="/" className="home">Home</Link>
        <Link to="/order" className="home">Purchases</Link>
      </div>
    )
  }
}
