import React from 'react';

const Categories = ({filterItems}) => {
  return (
  <div className='btn-container'>
  
  <button className='filter-btn' onClick={()=>
  filterItems('all')}>all
  </button>

  <button className='filter-btn' onClick={()=>
  filterItems('baked')}>baked
  </button>

  <button className='filter-btn' onClick={()=>
  filterItems('lunch')}>lunch
  </button>

  <button className='filter-btn' onClick={()=>
  filterItems('platters')}>platters
  </button>

  <button className='filter-btn' onClick={()=>
  filterItems('healthy')}>healthy
  </button>

  </div>
  );
};

export default Categories;
