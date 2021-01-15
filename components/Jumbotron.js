import React from 'react';
import './jumbotron.css';

const Jumbotron = (props) => {
  const changePage = () => {
    window.location.replace('/');
  };

  return (
    <div style={{ paddingBottom: '2%' }}>
      <div className="topJumbo">
        <p>Your Daily Summary</p>
      </div>
      <div className="jumbotron">
        <div className="Picture">
          <img
            src="https://i.ibb.co/nfPX2nJ/unnamed.jpg"
            alt="unnamed"
            border="0"
            className="image"
          />
        </div>
        <div className="Calories">Total Calories Eaten: {props.calories} </div>
        <div className="add-excercise">
          <button onClick={changePage} className="jumbobtn">
            Add Excercise
          </button>
        </div>
        <div className="add-food">
          <button className="jumbobtn">Add Food</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
