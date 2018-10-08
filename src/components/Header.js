import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  background: #227fdc;
  display: flex;
  padding: 3px 35px;
  color: #fff;
  justify-content: space-between;
  margin-bottom: 25px;

  h2 {
    font-size: 28px;
    font-family: 'Arial';
  }

  i {
    display: flex;
    align-items: center;
    font-size: 26px;
  }
`

export default class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <h2>Feed</h2>
        <i className="fas fa-bars" />
      </HeaderStyled>
    )
  }
}
