import React from 'react';

const resultArea = (props) => {
  const foodObj = {
    name: props.name,
    calories: props.calories,
    fat: props.fat,
    carbs: props.carbs,
    protein: props.protein,
  };
  const chooseFood = () => {
    fetch('/api/chooseFood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodObj),
    })
      .then((response) => response.json())
      .then((data) => console.log('post success'))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>Calories: {props.calories}</h3>
      <h3>Fat:{props.fat}</h3>
      <h3>Carbs:{props.carbs}</h3>
      <h3>Protein:{props.protein}</h3>
      <button onClick={chooseFood}>Add Food!</button>
    </div>
  );
};

export default resultArea;
