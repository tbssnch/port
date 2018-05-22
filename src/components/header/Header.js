import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../../assets/Logo.png';

class Header extends Component {
  render() {
    return (
        <div className="header-container">
          <img className="logo" src={logo} alt="logo"/>
          <div className="navigation">
            <ul>
              <li><Link className="links" to="/">HOME</Link></li>
              <li><Link className="links" to="/work">WORK</Link></li>
              <li><Link className="links" to="/contact">CONTACT</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Header;
