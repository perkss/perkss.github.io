import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
    }
  }

  render() {
      return this.props.children;
  }
}

export default withRouter(ScrollToTopRoute);
