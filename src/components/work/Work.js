import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
  render() {
    return (
          <div className="project-container">
            <a href="https://iband-aid.firebaseapp.com/" target="_blank">
              <div className="project">
                  <h1>A COLLABORATIVE PROJECT OF A RECORD COLLECTION MANAGEMENT APPLICATION BUILT USING ANGULAR 2, FIREBASE, AND UTILIZES API CALLS FROM DISCOGS AND BANDSINTOWN</h1>
                  <span className="hover">
                    <p>BANDAID</p>
                  </span>
              </div>
            </a>
            <a href="https://tbssnch.github.io/react-tap-list/" target="_blank">
              <div className="project">
                  <h1>AN APPLICATION FOR TAP ROOMS TO KEEP TRACK OF THEIR INVENTORY BUILT USING REACT.JS</h1>
              <span className="hover">
                <p>TAP ROOM</p>
              </span>
              </div>
            </a>
            <a href="https://tbssnch.github.io/timbers-army-layout" target="_blank">
              <div className="project">
                  <h1>AN UNOFFICIAL RECONSTRUCTION OF THE TIMBERS ARMY MAIN PAGE BUILT USING SASS</h1>
                  <span className="hover">
                    <p>TIMBERS ARMY</p>
                  </span>
              </div>
            </a>
          </div>
    );
  }
}

export default Work;
