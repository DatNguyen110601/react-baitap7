import React from 'react';
import TopvideoItem from './TopvideoItem/TopvideoItem';
import './Topvideo.scss';

function Topvideo(props) {
    const { data } = props;
    return ( 
      <div className="topvideo">
          <h3 className="topvideo__title">Video thịnh hành</h3>
        {
          data.map((item,index)=>(
            <TopvideoItem item={item} key={index}/>
          ))
        }
      </div>
    );
}

export default Topvideo;