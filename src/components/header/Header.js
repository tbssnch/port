import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../../assets/Logo.png';

class Header extends Component {
  render() {
    return (
        <div className="HeaderContainer">
          <img className="logo" src={logo} alt="logo"/>
          <div className="navigation">
            <ul>
              <li><Link className="links" to="/">HOME</Link></li>
              <li><Link className="links" to="/Work">WORK</Link></li>
              <li><Link className="links" to="/About">ABOUT</Link></li>
              <li><Link className="links" to="/Contact">CONTACT</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Header;
