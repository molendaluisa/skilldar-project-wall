import React from "react";
import './CardContainer.css';
import locationIcon from './images/location.svg';
import profileImg from './images/ProfilePic.jpg';
import videoIcon from './images/video.svg';
import timeIcon from './images/time.svg';

export default function CardContainer() {
  return (
    <div className="CardContainer">
      <div className="card">
        <div className="card-header">
          <div className="card-img">
            <img src={profileImg} alt="client"></img>
          </div>
          <div className="card-info">
            <div className="card-title">
              <p >Olofs Tradgard</p>
            </div>  
            <div className="card-location">
              <img className="location-icon" src={locationIcon} alt="location"></img>
              <p>Stockholm, Sydney</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <p>Videos for new social media posts</p>
        </div>
        <div className="card-tags">
          <span>Animation</span>
          <span>Product Video</span>
          <span>Narrative</span>
        </div>
        <div className="card-footer">
          <div className="card-videos">
            <img src={videoIcon} alt="videos"></img>
            <p>5 Videos</p>
          </div>
          <div className="card-date">
            <img src={timeIcon} alt="time"></img>
            <p>17 March</p>
          </div>
        </div>
      </div>
    </div>
  );
}