import React, { Component } from 'react'
import ReadNews from '../components/ReadNews'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Body = styled.div`
  background: #3c99f5;
  height: 100vh;
`

const HeaderToBack = styled.div`
  background: #227fdc;
  display: flex;
  padding: 15px 35px;
  color: #fff;
  margin-bottom: 25px;
`

export default class ReadNewsScreen extends Component {
  componentDidMount() {
    this.props.onLoadApi()
  }

  static propTypes = {
    articles: PropTypes.array,
    onLoadApi: PropTypes.func,
  }

  renderClickedNews() {
    const { articles } = this.props
    return (
      <React.Fragment>
        {articles.map((clickedNews, index) => {
          return (
            <ReadNews
              key={index}
              title={clickedNews.title}
              urlToImage={clickedNews.urlToImage}
              content={clickedNews.content}
            />
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    return (
      <Body>
        <HeaderToBack>
          <Link to="/">
            <i className="fas fa-chevron-left" />
          </Link>
        </HeaderToBack>
        {this.renderClickedNews()}
      </Body>
    )
  }
}
