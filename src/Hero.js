import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <div className="HeroContainer">
          <div className="intro">
            <div className="Hello">
              <p>hey there,</p>
              <p>i'm tyler.</p>
            </div>
            <div className="line"></div>
            <div className="title">
              <p>web developer based in the pnw</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Hero;
