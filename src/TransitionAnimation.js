import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TransitionAnimation = (Component) => {
  return props => <ReactCSSTransitionGroup
            transitionAppear={true}
                  transitionAppearTimeout={1700}
                  transitionEnterTimeout={1700}
                  transitionLeaveTimeout={200}
                  transitionName="SlideIn"
  >
    <Component { ...props} />
  </ReactCSSTransitionGroup>
}

export default TransitionAnimation;
