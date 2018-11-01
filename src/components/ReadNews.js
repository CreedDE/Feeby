import React, { Component } from 'react'
import styled from 'styled-components'

const FullNews = styled.div`
  background: #3c99f5;
  height: 83vh;
  color: #fff;
  overflow: scroll;
  padding: 0 25px;
  img {
    width: 100%;
  }
`

export default class ReadNews extends Component {
  render() {
    const { title, urlToImage, content } = this.props
    return (
      <FullNews>
        <img src={urlToImage} alt={urlToImage} />
        <h1>{title}</h1>
        <p>{content}</p>
      </FullNews>
    )
  }
}
