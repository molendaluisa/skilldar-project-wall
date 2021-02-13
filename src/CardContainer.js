import React from "react";
import './CardContainer.css';
import locationIcon from './images/location.svg';
import videoIcon from './images/video.svg';
import timeIcon from './images/time.svg';

export default function CardContainer(props) {
  let genreArr = props.movieInfo.Genre.split(',');
  let awards = (props.movieInfo.Awards === 'N/A') ? 'No Awards' : props.movieInfo.Awards;

  return (
    <div className="CardContainer">
      <div className="card">
        <div className="card-header">
          <div className="card-img">
            <img src={props.movieInfo.Poster} alt="client"></img>
          </div>
          <div className="card-info">
            <div className="card-title">
              <p>{props.movieInfo.Title}</p>
            </div>  
            <div className="card-location">
              <img className="location-icon" src={locationIcon} alt="location"></img>
              <p>{props.movieInfo.Country}</p>
            </div>
          </div>
        </div>
        <div className="card-content">
        <p>{awards}</p>
        </div>
        <div className="card-tags">
        {genreArr.slice(0, 4).map((tags, i) => (
          <div key={i}>
            <span>{tags}</span>
          </div>
        ))}
        </div>
        <div className="card-footer">
          <div className="card-videos">
            <img src={videoIcon} alt="videos"></img>
            <p>{props.movieInfo.imdbRating} Rating</p>
          </div>
          <div className="card-date">
            <img src={timeIcon} alt="time"></img>
            <p>{props.movieInfo.Released}</p>
          </div>
        </div>
      </div>
    </div>
  );
}