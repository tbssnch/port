import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <div className="HeroContainer">
          <div className="Hello">
            <p>Hello there,</p>
            <p>Im Tyler.</p>
          </div>
          <div className="About">
           <p>Designer and front end web developer. My passion for design, problem solving, creating, and contributing to my community have motivated me to pursue a career in programming to build and develop materials that are both functional and aesthetically thoughtful resources for positive user experiences.</p>
          </div>
        </div>
    );
  }
}

export default Hero;
