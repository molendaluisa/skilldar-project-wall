import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Search from './Search';
import CardContainer from './CardContainer';
import Pagination from './Pagination';
import Footer from './Footer';
import { useDispatch, useSelector } from "react-redux";
import {fetchMovies, selectMovies} from './movies';


export default function App() {
  
  const { movies, loading } = useSelector(selectMovies)	
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchMovies('Batman'))}, [dispatch])

  let moviesList;
  if (loading) {
    moviesList = "";
  } else {
    moviesList = movies.slice(0, 9).map( (movie, i) => <CardContainer key={i} movieInfo={movie}/>)
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Search />
      
      <div className="card-wall">
        {moviesList}
      </div>
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
}
