import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
        
      <button className="dropdown-toggle" onClick={handleToggle}>
       Facts
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'visible' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


const ImageWithDropdown = ({ imageUrl, items }) => {
  return (
   
    <div className="image-container">
      <img src={imageUrl} alt="Example" />
    
      <Dropdown items={items} />     
    </div>
     
  );
};

export default ImageWithDropdown;
