import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import { HomePage, Login, Contact } from '../pages'
export default class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    )
  }
}
