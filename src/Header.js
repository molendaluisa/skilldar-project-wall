import React from "react";
import './Header.css';
import redCircle from './images/Red_Circle.svg';
import logo from './images/logo.svg';
import { useSelector } from 'react-redux';

export default function Header() {
  const theName = useSelector(state => state.name)

  return (
    <div className="Header">
      <div>{theName}</div>
      <a href="https://www.skilldar.com/" target="_blank" rel="noreferrer"><img src={redCircle} alt="Logo" className="red-circle" />
      <img src={logo} alt="Logo" className="logo"/></a>
    </div>
  )
}