import React, { Component } from 'react';
import './Contact.css';
import github from './../../assets/github-logo.svg';
import linkedin from './../../assets/linkedin-logo.svg';
import email from './../../assets/envelope.svg';



class Contact extends Component {
  render() {
    return (
          <div className="contact-container">
            <div className="contact">
              <p>LET'S WORK TOGETHER</p>
            <div className="icon-links">
              <a href="https://github.com/tbssnch" target="_blank"><img className="github" src={github} alt="github"/></a>
              <a href="mailto:tbssnch@gmail.com" target="_blank"><img className="email" src={email} alt="email"/></a>
              <a href="https://www.linkedin.com/in/tbssnch/" target="_blank"><img className="linkedin" src={linkedin} alt="linkedin"/></a>
            </div>
            </div>

          </div>
    );
  }
}

export default Contact;
