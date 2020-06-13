import React, { Component } from 'react'
import List from './Components/list'
import Navbar from './Components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Signbar from './Components/signbar'
import Order from './Components/order'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Signbar />
          <Route exact path="/" component={List} />
          <Route exact path="/order" component={Order} />
        </div>
      </BrowserRouter>

    )
  }
}
