
import React from 'react';
import './CategoriesItem.scss';
function CategoriesItem(props) {
    const { item } = props;
    const { icon , content  } = item;
    
    return <div className="categories-card">
          <div className="categories-card__icon">
            <i className="card-icon">{icon}</i>
          </div>
          <div className="categories-card__content">
            <h4 className="">{content}</h4>
          </div>
      </div>
    
}

export default CategoriesItem;