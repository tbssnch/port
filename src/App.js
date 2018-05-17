import React, { Component } from 'react';
import Hero from './Hero.js';
import Header from './Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
