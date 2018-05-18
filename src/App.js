import React, { Component } from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import Work from './Work.js';
import Contact from './Contact.js';
import TransitionAnimation from './TransitionAnimation';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

const App = () => {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={TransitionAnimation(Hero)} />
            <Route path='/Work' component={TransitionAnimation(Work)} />
            <Route path='/Contact' component={TransitionAnimation(Contact)} />
          </Switch>
        </div>
    );
  }





export default withRouter(App);
