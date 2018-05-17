import React, { Component } from 'react';
import Hero from './Hero.js';
import Header from './Header.js';
import Work from './Work.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Work />
      </div>
    );
  }
}

export default App;
