import React from "react";
import './Search.css';
import searchIcon from './images/Vector.svg';


export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="input-container">
          <img src={searchIcon} alt="search"></img>
          <input type="text" placeholder="Search creative projects"></input>
        </div>
      </form>
      <footer>All jobs - 30 results</footer>
    </div>
  )
}