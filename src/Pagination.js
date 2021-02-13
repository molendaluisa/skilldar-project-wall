import React from "react";
import './Pagination.css';


export default function Pagination() {
  return (
    <div className="Pagination">
      <ul className="mobile">
        <li><a href="/"></a></li>
        <li> 1 of 10 </li>
        <li><a href="/"></a></li>
      </ul>
      <ul className="desktop">
        <li className="active"><a href="/">1</a></li>
        <li><a href="/">2</a></li>
        <li><a href="/">3</a></li>
        <li><a href="/">4</a></li>
        <li><a href="/">5</a></li>
        <li><a href="/">6</a></li>
        <li><a href="/">7</a></li>
        <li><a href="/">8</a></li>
        <li><a href="/">9</a></li>
        <li><a href="/">10</a></li>
      </ul>
    </div>
  )
}