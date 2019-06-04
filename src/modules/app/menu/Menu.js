import React from 'react';
import './Menu.css';

// render sublevels recursively
const renderLevel = (level, handleChange) => {
  return (
    <ul className='list-group'>
      {level.map(item => (
        <li
          key={item.id}
          className='list-group-item'
        >
          <div onClick={() => handleChange(item)}>{item.name}</div>
          {item.sublevels ? renderLevel(item.sublevels, handleChange) : null}
        </li>
      ))}
    </ul>
  );
};

const Menu = ({ categories, handleChange }) => (
  <div>
    {renderLevel(categories, handleChange)}
  </div>
);

export default Menu;