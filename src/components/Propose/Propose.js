import React from 'react';
import './Propose.scss';
import Proposeitem from './ProposeItem/ProposeItem';

function Propose(props) {
   const { data } = props;
    return ( 
      <div className="propose">
         <h3 className="propose__title">
            Âm nhạc Việt Nam
         </h3>
         <div className="propose__card">
         {
           data.map((item, index)=>(
              <Proposeitem item={item} key={index}/>
           ))
         }
         </div>
      </div>
    );
}

export default Propose;