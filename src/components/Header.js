import React, { Component } from 'react'
import styled from 'styled-components'
import '../css/header.css'
import { Link } from 'react-router-dom'

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
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 26px;
  }
`

export default class Header extends Component {
  myFunction() {
    document.getElementById('myDropdown').classList.toggle('show')
  }

  render() {
    return (
      <HeaderStyled>
        <h2>Feed</h2>
        <div className="dropdown">
          <button onClick={this.myFunction} className="dropbtn">
            <i className="fas fa-bars" />
          </button>
          <div id="myDropdown" className="dropdown-content">
            <div className="dropdown-items">
              <Link to="/">
                <i className="fas fa-search" />
              </Link>
            </div>
            <div className="dropdown-items">
              <Link to="/addNews">
                <i className="fas fa-plus" />
              </Link>
            </div>
          </div>
        </div>
      </HeaderStyled>
    )
  }
}
