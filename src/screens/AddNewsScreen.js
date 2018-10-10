import React, { Component } from 'react'
import styled from 'styled-components'

const AddNewsBody = styled.div`
  height: 100vh;
  background: #3c99f5;
`

const HeaderText = styled.div`
  background: #227fdc;
  padding: 3px 35px;
  color: #fff;
  h2 {
    font-size: 28px;
  }
`

export default class AddNewsScreen extends Component {
  render() {
    return (
      <AddNewsBody>
        <HeaderText>
          <h2>Seite hinzufügen</h2>
        </HeaderText>
      </AddNewsBody>
    )
  }
}
