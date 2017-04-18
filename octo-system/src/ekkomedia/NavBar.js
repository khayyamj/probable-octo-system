import React, { Component } from 'react';
import NavMenu from './NavMenu';

export default class NavBar extends Component {
  render () {
    return (
      <div className="navbar">
        <a><div className="ekkomedia-logo"></div></a>
        <NavMenu />
      </div>
    )
  }
}
