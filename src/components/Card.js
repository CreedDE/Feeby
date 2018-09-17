import React, { Component } from 'react'
import styled from 'styled-components'

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
  render() {
    return (
      <CardStyled>
        <img src="https://source.unsplash.com/random/355x170" alt="hello" />
        <CardDesc>
          <h1>Title</h1>
          <p>
            lorem ipsum dolor sit text let me grow dude
            blaaaaaaasdasdadasddasdsadasdad
          </p>
        </CardDesc>
      </CardStyled>
    )
  }
}
