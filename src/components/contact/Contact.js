import React, { Component } from 'react';
import './Contact.css';
import github from './../../assets/github-logo.svg';
import linkedin from './../../assets/linkedin-logo.svg';
import email from './../../assets/envelope.svg';



class Contact extends Component {
  render() {
    return (
          <div className="ContactContainer">
            <div className="Contact">
              <p>let's work together</p>
            <div className="IconLinks">
              <a href="https://github.com/tbssnch"><img className="Github" src={github} alt="github"/></a>
              <a href="mailto:tbssnch@gmail.com"><img className="Email" src={email} alt="email"/></a>
              <a href="https://www.linkedin.com/in/tbssnch/"><img className="Linkedin" src={linkedin} alt="linkedin"/></a>
            </div>
            </div>

          </div>
    );
  }
}

export default Contact;
