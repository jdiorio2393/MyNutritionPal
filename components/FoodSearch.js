import React from 'react';
import { Component } from 'react';
import ResultArea from '../components/resultArea';
import './foodsearch.css';

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      meal: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ ...this.state, food: [] });
    const key = 'LCLXuh5wsFYkmpCDYYBWWFBTEjEWVYebyA7FKcUP';
    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}&query=${
        document.querySelector('#foodSearch').value
      }`
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        console.log(
          data.foods[0].foodNutrients.sort((a, b) =>
            a.nutrientId > b.nutrientId ? 1 : -1
          )
        );
        // getting 10 food items and setting them in state
        for (let i = 0; i < 10; i++) {
          this.setState({
            ...this.state,
            food: [
              ...this.state.food,
              {
                name: data.foods[i].description,
                nutrients: data.foods[i].foodNutrients.sort((a, b) =>
                  a.nutrientId > b.nutrientId ? 1 : -1
                ),
              },
            ],
            meal: this.props.location.state.meal,
          });
        }
        console.log(this.state);
      });
  }

  render() {
    let foodItems = [];
    for (let i = 0; i < this.state.food.length; i++) {
      foodItems.push(
        <ResultArea
          name={this.state.food[i].name}
          calories={this.state.food[i].nutrients[3].value}
          fat={this.state.food[i].nutrients[1].value}
          carbs={this.state.food[i].nutrients[2].value}
          protein={this.state.food[i].nutrients[0].value}
          meal={this.state.meal}
        />
      );
    }
    return (
      <div>
        <div className="searchbox">
          <label className="foodLabel" htmlFor="fname">
            Search A Food
          </label>
          <input type="text" id="foodSearch" name="foodSearch" />
          <button onClick={this.handleClick}>Search Foods</button>
        </div>
        {foodItems}
      </div>
    );
  }
}

export default FoodSearch;
