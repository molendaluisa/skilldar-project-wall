import React from "react";
import './Header.css';
import redCircle from './images/Red_Circle.svg';
import logo from './images/logo.svg';

export default function Header() {
  return (
    <div className="Header">
      <img src={redCircle} alt="Logo" className="red-circle" />
      <img src={logo} alt="Logo" className="logo"/>
    </div>
  )
}