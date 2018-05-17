import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './assets/Logo.svg';

class Header extends Component {
  render() {
    return (
        <div className="HeaderContainer">
          <img className="logo" src={logo} alt="logo"/>
          <div className="navigation">
            <ul>
              <li><Link className="links" to="/">home</Link></li>
              <li><Link className="links" to="/Work">work</Link></li>
              <li><Link className="links" to="/About">about</Link></li>
              <li><Link className="links" to="/Contact">contact</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Header;
