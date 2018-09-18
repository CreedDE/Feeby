import React, { Component } from 'react'
import Card from './Card'

class App extends Component {
  state = {
    title: 'Titel von der News',
    source: 'Beschreibung von der News',
    img: 'https://source.unsplash.com/random/355x170',
  }

  render() {
    return (
      <Card
        title={this.state.title}
        source={this.state.source}
        img={this.state.img}
      />
    )
  }
}

export default App
