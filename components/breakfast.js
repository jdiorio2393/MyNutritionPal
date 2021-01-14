import React from 'react';
import './breakfast.css';

const breakfast = (props) => {
  const arr = [];
  for (let i = 0; i < props.foodName.length; i++) {
    arr.push(<Name foodname={props.foodName[i]} />);
  }
  return (
    <section className="breakfast">
      <h1>Breakfast</h1>
      {arr}
      <div className="addfood">
        <a href="">Add Food</a>
      </div>
      <div className="addfood">
        <a href="">Quick Tools</a>
      </div>
      <hr className="solid"></hr>
    </section>
  );
};

export default breakfast;

const Name = (props) => {
  return <h3>{props.foodname}</h3>;
};
