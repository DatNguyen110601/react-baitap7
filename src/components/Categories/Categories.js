import React from 'react';

import './Categories.scss';
import Categoriesitem from './CategoriesItem/CategoriesItem';

function Categories(props) {
  const { data }= props;

    return ( 
      <div className="categories">
        
        {
                data.map((item, index) => (
                    <Categoriesitem item={item} key={index}/>
                ))
            }
      </div>
    );
}

export default Categories;