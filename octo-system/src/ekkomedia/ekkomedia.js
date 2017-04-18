import React, { Component } from 'react';
import NavBar from './NavBar';
import FullService from './FullService';
import PhotoCarosel from './PhotoCarosel';
import Individuals from './Individuals';
import Excellence from './Excellence';
import SocialLens from './SocialLens';
import Footer from './Footer';
import css from './ekkomedia.scss';

export default class Ekkomedia extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <FullService />
        <PhotoCarosel />
        <Individuals />
        <Excellence />
        <SocialLens />
        <Footer />
      </div>
    )
  }
}
