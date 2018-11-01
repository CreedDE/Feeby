import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardStyled = styled.div`
  position: relative;
  width: 90%;
  background: #eee;
  min-height: 300px;
  max-height: 300px;
  margin-bottom: 25px;
  border-radius: 0 0 4px 4px;
  img {
    width: 100%;
    height: 170px;
  }
`
const CardDesc = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #2380dc;
  border-radius: 0 0 4px 4px;
  min-height: 130px;
  max-height: 130px;
  overflow: hidden;

  h1 {
    font-size: 18px;
    margin: 0;
    margin-left: 15px;
    margin-bottom: 15px;
    margin-top: 10px;
    color: #fff;
  }
  p {
    margin: 0;
    margin-left: 15px;
    color: #fff;
  }
`

export default class Card extends Component {
  static propTypes = {
    articles: PropTypes.array,
    onLoadApi: PropTypes.func,
  }

  renderNews() {
    const { urlToImage, title, description, index } = this.props
    return (
      <CardStyled data-id-test="overview" key={index}>
        <Link to={`/readNews?id=${index}`}>
          <img src={urlToImage} alt={urlToImage} />
          <CardDesc>
            <h1>{title}</h1>
            <p>{description}</p>
          </CardDesc>
        </Link>
      </CardStyled>
    )
  }

  render() {
    return <React.Fragment>{this.renderNews()}</React.Fragment>
  }
}
