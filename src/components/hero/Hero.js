import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <div className="HeroContainer">
          <div className="intro">
            <div className="Hello">
              <p>TYLER BUSSANICH</p>
            </div>
            <div className="title">
              <p>WEB DEVELOPER BASED IN THE PNW</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Hero;
