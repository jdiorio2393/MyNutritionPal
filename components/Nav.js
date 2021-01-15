import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">Food</a>
      <a href="#contact">Excercise</a>
      <a href="#about">Reports</a>
      <a href="#about">Apps</a>
      <a href="#about">Community</a>
      <a href="#about">Blog</a>
    </div>
  );
};

export default Nav;
