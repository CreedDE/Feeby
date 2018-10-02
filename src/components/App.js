import React, { Component } from 'react'
import { createStore } from 'redux'
import reducer from '../reducer'
import { Provider } from 'react-redux'
import StartScreenContainer from '../containers/StartScreenContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../css/global.css'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={StartScreenContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
