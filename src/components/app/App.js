import React, { Component } from 'react';
import Header from './../header/Header.js';
import Hero from './../hero/Hero.js';
import Work from './../work/Work.js';
import Contact from './../contact/Contact.js';
import TransitionAnimation from './../../TransitionAnimation';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

const App = () => {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={TransitionAnimation(Hero)} />
            <Route path='/work' component={TransitionAnimation(Work)} />
            <Route path='/contact' component={TransitionAnimation(Contact)} />
          </Switch>
        </div>
    );
  }





export default withRouter(App);
