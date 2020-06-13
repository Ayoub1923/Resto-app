import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Signbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/order">Purchases</Link>
      </div>
    )
  }
}
