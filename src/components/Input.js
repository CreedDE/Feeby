import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: #fff;
  border: none;
  border-radius: 25px;
  padding: 5px 25px;
  margin-bottom: 20px;
`

export default class Input extends Component {
  state = {
    inputValue: '',
  }
  render() {
    return <StyledInput />
  }
}
