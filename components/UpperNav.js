import React from 'react';
import './uppernav.css';

const UpperNav = () => {
  return (
    <div className="uppernav">
      <a className="logo" href="#home">
        My Nutrition Pal
      </a>
      <a href="#news" className="upper">
        Food
      </a>
      <a href="#contact" className="upper">
        Excercise
      </a>
      <a href="#about" className="upper">
        Reports
      </a>
      <a href="#about" className="upper">
        Apps
      </a>
      <a href="#about" className="upper">
        Community
      </a>
      <a href="#about" className="upper">
        Blog
      </a>
    </div>
  );
};

export default UpperNav;
