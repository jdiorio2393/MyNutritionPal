import React from 'react';
import { Fragment, Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Breakfast from '../components/breakfast';
import Lunch from '../components/Lunch';
import Dinner from '../components/Dinner';
import Snacks from '../components/Snacks';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
    };
  }

  componentDidMount() {
    fetch('/api/getfood')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.food);
        this.setState({
          ...this.state,
          food: data.food,
        });
        console.log(this.state.food);
      });
  }

  getMacroNumbers(meal) {
    const macroObj = {};
    for (let i = 0; i < this.state.food.length; i++) {
      if (this.state.food[i].meal === meal) {
        if (!macroObj.fat) macroObj.fat = 0;
        macroObj.fat += Math.round(Number(this.state.food[i].fat));
        if (!macroObj.carbs) macroObj.carbs = 0;
        macroObj.carbs += Math.round(Number(this.state.food[i].carbs));
        if (!macroObj.protein) macroObj.protein = 0;
        macroObj.protein += Math.round(Number(this.state.food[i].protein));
      }
    }
    return macroObj;
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];
    let totalCalories = 0;
    if (this.state.food.length > 0) {
      for (let i = 0; i < this.state.food.length; i++) {
        if (this.state.food[i].meal === 'breakfast')
          breakfast.push(this.state.food[i].name);
        if (this.state.food[i].meal === 'lunch')
          lunch.push(this.state.food[i].name);
        if (this.state.food[i].meal === 'dinner')
          dinner.push(this.state.food[i].name);
        totalCalories += Number(this.state.food[i].calories);
      }
    }
    console.log(breakfast);

    return (
      <Fragment>
        <Jumbotron calories={totalCalories} />
        <Breakfast
          foodName={breakfast}
          macros={this.getMacroNumbers('breakfast')}
        />
        <Lunch foodName={lunch} macros={this.getMacroNumbers('lunch')} />
        <Dinner foodName={dinner} macros={this.getMacroNumbers('dinner')} />
        <Snacks />
      </Fragment>
    );
  }
}
export default FrontPage;
