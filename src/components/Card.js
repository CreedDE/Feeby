import React, { Component } from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  position: relative;
  width: 90%;
  background: #eee;
  height: 300px;
  margin-bottom: 15px;
  img {
    width: 373px;
    height: 170px;
  }
`
const CardDesc = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #2380dc;
  border-radius: 0 0 4px 4px;
  height: 130px;

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
  state = {
    articles: [],
  }

  componentDidMount() {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=de&' +
      'apiKey=84b554b20b83402c880d4a2c9759b49e'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ articles: data.articles })
      })
  }
  renderNews() {
    return (
      <React.Fragment>
        {this.state.articles.map((news, index) => {
          return (
            <CardStyled data-id-test="overview" key={index}>
              <img
                data-id-test="news-img"
                src={news.urlToImage}
                alt="failed to load the news IMG or they have no images"
              />
              <CardDesc>
                <h1>{news.title}</h1>
                <p>{news.description}</p>
              </CardDesc>
            </CardStyled>
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    return <React.Fragment>{this.renderNews()}</React.Fragment>
  }
}
