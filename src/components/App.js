import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import { Provider } from 'react-redux'
import StartScreenContainer from '../containers/StartScreenContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../css/global.css'
import thunk from 'redux-thunk'
import AddNewsScreenContainer from '../containers/AddNewsScreenContainer'
import ReadNewsScreenContainer from '../containers/ReadNewsScreenContainer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={StartScreenContainer} />
            <Route path="/addNews" component={AddNewsScreenContainer} />
            <Route path="/readNews" component={ReadNewsScreenContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
