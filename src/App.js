import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Body, Footer } from "./layout"
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <span>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </span>
      </Router>
    );
  }
}

export default App;
