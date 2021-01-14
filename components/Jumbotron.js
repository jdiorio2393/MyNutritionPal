import React from 'react';
import './jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="Picture">
        <img src="" alt="Blank" border="0" />
      </div>
      <div className="Calories">1900 Remaining</div>
      <div className="add-excercise">
        <button className="jumbobtn">Add Excercise</button>
      </div>
      <div className="add-food">
        <button className="jumbobtn">Add Food</button>
      </div>
    </div>
  );
};

export default Jumbotron;
