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
        // console.log(this.state.food);
      });
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];
    if (this.state.food.length > 0) {
      for (let i = 0; i < this.state.food.length; i++) {
        if (this.state.food[i].meal === 'breakfast')
          breakfast.push(this.state.food[i].name);
      }
    }
    console.log(breakfast);
    return (
      <Fragment>
        <Jumbotron />
        <Breakfast foodName={breakfast} />
        <Lunch />
        <Dinner />
        <Snacks />
      </Fragment>
    );
  }
}
export default FrontPage;
