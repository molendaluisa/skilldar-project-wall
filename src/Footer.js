import React from "react";
import './Footer.css';
import instagramIcon from './images/instagram.svg';
import twitterIcon from './images/twitter.svg';

export default function Footer() {
  return (
    <div className="Footer">

      <a href="#" alt="terms and privacy">Terms & Privacy</a>
      <a className="desktop" href="#" alt="contact">Contact</a>
      <span className="side">
        <a href="#" alt="all rights reserved" className="rights">2020 | SKILLDAR | All Rights Reserved</a>
        <a className="desktop social" href="#" alt="instagram"><img src={instagramIcon} alt="instagram"></img></a>
        <a className="desktop social" href="#" alt="twitter"><img src={twitterIcon} alt="twitter"></img></a>
      </span>

    </div>
  )
}
