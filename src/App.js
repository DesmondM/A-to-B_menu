import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  
  const filterItems = (category)=>{
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category===category)
    setMenuItems(newItems)
  }

  return (<main>
    <section className='menu section'>
      <div className='title'>
    <h2>A-to-B Menu</h2>
    <h4>Cell: 082 677 9052</h4>
    <div className='underline'></div>
    </div>
    <Categories filterItems={filterItems}/>
    <Menu items ={menuItems}/>
    
    </section>
  
    </main>);
}

export default App;
