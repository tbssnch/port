import React, { Component } from 'react';
import './Header.css';
import logo from './assets/Logo.svg';

class Header extends Component {
  render() {
    return (
        <div className="HeaderContainer">
          <img className="logo" src={logo} alt="logo"/>
          <div className="navigation">
            <ul>
              <li>work</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Header;
