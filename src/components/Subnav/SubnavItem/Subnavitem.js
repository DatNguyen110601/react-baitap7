import React from 'react';
import './Subnavitem.scss';


function Subnavitem(props) {
    
    return ( 
        <div className="subnav__user">
                        <div className="row">
                           <div className="row__icon">{props.icon}</div>
                           <span className="row__content">{props.subtitle}</span>
                           </div>

                           
                    </div>
            );
}
export default Subnavitem;