import React from 'react';
import { Link } from 'react-router-dom';
import './dinner.css';
import { Fragment } from 'react';

const Dinner = (props) => {
  const arr = [];
  for (let i = 0; i < props.foodName.length; i++) {
    arr.push(<Name foodname={props.foodName[i]} />);
  }
  return (
    <section className="Dinner">
      <h1>Dinner</h1>
      {arr}
      <section className="macros">
        <p className="fat">Fat: {props.macros.fat}g</p>
        <p className="carbs">Carbs: {props.macros.carbs}g</p>
        <p className="protein">Protein: {props.macros.protein}g</p>
      </section>
      <div className="addfood">
        <Link
          to={{
            pathname: '/findfood',
            state: { meal: 'dinner' },
          }}
        >
          Add Food
        </Link>
      </div>
      <div className="addfood">
        <a href="">Quick Tools</a>
      </div>
      <hr className="solid"></hr>
    </section>
  );
};

export default Dinner;

const Name = (props) => {
  const deleteFood = () => {
    fetch('/api/deleteFood', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: props.foodname, meal: 'dinner' }),
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <h3 className="mealName">{props.foodname}</h3>
      <p className="deletebtn" onClick={deleteFood}>
        Delete This Entry
      </p>
      <br></br>
    </Fragment>
  );
};
