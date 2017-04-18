import React, { Component } from 'react';

export default class NavMenu extends Component {
  render () {
    return (
      <div className="navmenu">
        <div className="siteLinks">
          <span className="navLink"> Home </span>
          <span className="navLink"> About </span>
          <span className="navLink"> Services </span>
          <span className="navLink"> Projects </span>
          <span className="navLink"> News </span>
          <span className="navLink"> Contact </span>
        </div>
        <div className="socialMediaLinks">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-google-plus" aria-hidden="true"></i>
          <i className="fa fa-vimeo" aria-hidden="true"></i>
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
        <div className="subscribeLink">
          <span className="subscribe"> subscribe </span>
        </div>
        <a><div className="hamburgerMenu">

            <section className="shortHam">
            </section>
            <section className="longHam">
            </section>
            <section className="shortHam">
            </section>
        </div></a>
        <div className="close-bluefield"> Close </div>
      </div>
    )
  }
}
