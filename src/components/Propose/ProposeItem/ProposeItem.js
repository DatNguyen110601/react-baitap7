import React from 'react';
import './ProposeItem.scss';
function Proposeitem(props) {
    const { item } = props;
    const { srcImg, title, channel, view, day } = item;
    return <div className="propose-card">
          <div className="propose-card__img">
            <img src={srcImg} alt="anh" className="img"></img>
          </div>

          <div className="propose-card__content">
              <div className="title">
                {title}
              </div>
              <div className="channel">
                {channel}
              </div>
              <div className="footer">
                  <span className="footer__view">
                      {view}
                  </span>
                  <span className="footer__day">
                      {day}
                  </span>
              </div>
          </div>
      </div>
}

export default Proposeitem;