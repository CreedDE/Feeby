import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'
import PropTypes from 'prop-types'

const Body = styled.div`
  background: #eee;
  height: 100vh;
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
      <Body>
        {articles.map((allNews, index) => {
          return (
            <Card
              key={index}
              urlToImage={allNews.urlToImage}
              title={allNews.title}
              description={allNews.description}
            />
          )
        })}
      </Body>
    )
  }

  render() {
    return <React.Fragment>{this.renderCards()}</React.Fragment>
  }
}
