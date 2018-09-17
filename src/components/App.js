import React, { Component } from 'react'
import Card from './Card'

class App extends Component {
  state = {
    title: 'Bild',
    source: 'lorem ipsum dolor sit',
    img: 'https://source.unsplash.com/random/355x170',
  }

  render() {
    return (
      <React.Fragment>
        <Card
          title={this.state.title}
          source={this.state.source}
          img={this.state.img}
        />
      </React.Fragment>
    )
  }
}

export default App
