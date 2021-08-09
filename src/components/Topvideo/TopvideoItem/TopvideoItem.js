import React from 'react';
import './TopvideoItem.scss';
function TopvideoItem(props) {
    const { item } = props;
    const { srcImg, title, view, day, description } = item;
    return ( 
      <div className="topvideo-card">
        <div className="topvideo-card__img">
            <img src={srcImg} alt="anh" className="img"></img>
        </div>
        <div className="topvideo-card__content">
            <div className="title">
                {title}
            </div>
            <div className="content">
                <span>{view}</span>
                <span>{day}</span>
            </div>
            <div className="description">
                <span>{description}</span>
            </div>
        </div>
      </div>
    );
}

export default TopvideoItem;