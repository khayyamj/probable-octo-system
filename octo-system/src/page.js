import React, { Component } from 'react';
import logo from './images/logo.svg';
import './app.scss';

class Page extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          It's time to start programming!
        </p>
      </div>
    );
  }
}

export default Page;
