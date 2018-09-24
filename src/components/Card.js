import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardStyled = styled.div`
  position: relative;
  width: 90%;
  background: #eee;
  height: 300px;
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
  static propTypes = {
    title: PropTypes.string,
    source: PropTypes.string,
    img: PropTypes.string,
  }

  render() {
    const { title, source, img } = this.props
    return (
      <CardStyled>
        <img src={img} alt="news img" />
        <CardDesc>
          <h1>{title}</h1>
          <p>{source}</p>
        </CardDesc>
      </CardStyled>
    )
  }
}
