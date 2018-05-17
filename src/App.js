import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Hero from './Hero.js';
import Work from './Work.js';
import Contact from './Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><Hero />} />
          <Route path='/Work' render={()=><Work />} />
          <Route path='/Contact' render={()=><Contact />} />
        </Switch>
      </div>
    );
  }
}

export default App;
