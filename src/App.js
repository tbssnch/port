import React, { Component } from 'react';
import Hero from './Hero.js';
import Work from './Work.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Work />
      </div>
    );
  }
}

export default App;
