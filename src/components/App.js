import React, { Component } from 'react'
import Card from './Card'

class App extends Component {
  state = {
    news: [
      {
        title: 'Titel von der News',
        source: 'Beschreibung von der News',
        img: 'https://source.unsplash.com/random/355x170',
      },
      {
        title: '2 Titel von der News',
        source: 'Beschreibung von der 2 News',
        img: 'https://source.unsplash.com/random/355x170',
      },
      {
        title: '3 Titel von der News',
        source: 'Beschreibung von der 3 News',
        img: 'https://source.unsplash.com/random/355x170',
      },
    ],
  }

  render() {
    return <Card infos={this.state.news} />
  }
}

export default App
