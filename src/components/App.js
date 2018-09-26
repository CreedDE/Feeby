import React, { Component } from 'react'
import { createStore } from 'redux'
import reducer from '../reducer'
import { Provider } from 'react-redux'
import StartScreenContainer from '../containers/StartScreenContainer'
import AddNewsContainer from '../containers/AddNewsContainer'
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
            <Route path="/addNews" component={AddNewsContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
