import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
  height: 100vh;
  background: #2380dc;
  margin: 0;
  padding: 0;
`

const StyledHeader = styled.div`
  background: #1976d3;
  top: 0;
  width: 100%;
  padding-left: 25px;
  color: #fff;
  h1 {
    margin: 0;
  }
`

const StyledInput = styled.input`
  background: #fff;
  border: none;
  border-radius: 25px;
  padding: 5px 25px;
`

const StyledButton = styled.button`
  background: #1976d3;
  padding: 5px 15px;
  color: #fff;
  border: none;
`

export default class AddNews extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledBackground>
          <StyledHeader>
            <h1>News hinzufügen</h1>
          </StyledHeader>
          <StyledInput />
          <StyledInput />
          <StyledInput />
          <StyledButton>Abesenden</StyledButton>
        </StyledBackground>
      </React.Fragment>
    )
  }
}
