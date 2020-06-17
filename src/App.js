import React, { Component } from 'react'
import List from './Components/list'
import { BrowserRouter, Route } from 'react-router-dom'
import Order from './Components/order'
import Landing from './Components/landing'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/list" component={List} />
          <Route exact path="/order" component={Order} />
        </div>
      </BrowserRouter>

    )
  }
}
