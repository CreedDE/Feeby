import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import PropTypes from 'prop-types'
import Header from '../components/Header'

const Body = styled.div`
  background: #3c99f5;
  height: 100vh;
`

const CardList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 83vh;
  overflow: scroll;
`

export default class StartScreen extends Component {
  componentDidMount() {
    this.props.onLoadApi()
  }

  static propTypes = {
    articles: PropTypes.array,
    onLoadApi: PropTypes.func,
  }

  renderCards() {
    const { articles } = this.props
    return (
      <CardList>
        {articles.map((allNews, index) => {
          return (
            <Card
              key={index}
              urlToImage={allNews.urlToImage}
              title={allNews.title}
              description={allNews.description}
              index={index}
            />
          )
        })}
      </CardList>
    )
  }

  render() {
    return (
      <Body>
        <Header />
        {this.renderCards()}
      </Body>
    )
  }
}
