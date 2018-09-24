import React, { Component } from 'react'
import Card from './Card'

class App extends Component {
  state = {
    title: 'Titel von der News',
    source: 'Beschreibung von der News',
    img: 'https://source.unsplash.com/random/355x170',
  }

  render() {
    const { title, img, source } = this.state
    return <Card title={title} source={source} img={img} />
  }
}

export default App
