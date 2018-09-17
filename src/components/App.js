import React, { Component } from 'react'
import Card from './Card'
/* import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { applyMiddleware, createStore } from 'redux' 
import reducer from '../reducer'
import thunk from 'redux-thunk' */

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card />
      </React.Fragment>
    )
  }
}

export default App
