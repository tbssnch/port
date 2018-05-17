import React, { Component } from 'react';
import './Contact.css';
import github from './assets/github-logo.svg';
import linkedin from './assets/linkedin-logo.svg';
import email from './assets/envelope.svg';



class Contact extends Component {
  render() {
    return (
          <div className="ContactContainer">
            <div className="Contact">
              <p>let's work together</p>
            <div className="IconLinks">
              <img className="Github" src={github} alt="github"/>
              <img className="Email" src={email} alt="email"/>
              <img className="Linkedin" src={linkedin} alt="linkedin"/>
            </div>
            </div>

          </div>
    );
  }
}

export default Contact;
