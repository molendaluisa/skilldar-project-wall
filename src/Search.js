import React from "react";
import './Search.css';
import searchIcon from './images/Vector.svg';
import { useDispatch, useSelector } from "react-redux";
import {fetchMovies, selectMovies} from './movies';


export default function Search() {
  const { total } = useSelector(selectMovies)	
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    let searchTerm = event.target[0].value

    dispatch(fetchMovies(searchTerm))
  }

  return (
    <div className="Search">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <img src={searchIcon} alt="search"></img>
          <input type="text" placeholder="Search creative projects"></input>
        </form>
      </div>
      <footer>All jobs - {total} results</footer>
    </div>
  )
}