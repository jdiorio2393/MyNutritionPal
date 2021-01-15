import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import './breakfast.css';

const breakfast = (props) => {
  const arr = [];
  for (let i = 0; i < props.foodName.length; i++) {
    arr.push(<Name foodname={props.foodName[i]} />);
  }
  console.log(props);

  return (
    <section className="breakfast">
      <h1>Breakfast</h1>
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
            state: { meal: 'breakfast' },
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

export default breakfast;

const Name = (props) => {
  const deleteFood = () => {
    fetch('/api/deleteFood', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: props.foodname, meal: 'breakfast' }),
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      // .then((data) => {
      //   console.log('delete success');
      // })
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
