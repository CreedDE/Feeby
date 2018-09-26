import React, { Component } from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  position: relative;
  width: 90%;
  background: #eee;
  height: 300px;
  margin-bottom: 15px;
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
  renderNews() {
    return (
      <React.Fragment>
        {this.props.state.news.map((news, index) => {
          return (
            <React.Fragment>
              <CardStyled data-id-test="overview" key={index}>
                <img data-id-test="news-img" src={news.img} alt="news img" />
                <CardDesc>
                  <h1>{news.title}</h1>
                  <p>{news.source}</p>
                </CardDesc>
              </CardStyled>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    return <React.Fragment>{this.renderNews()}</React.Fragment>
  }
}
