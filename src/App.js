import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import FrontPage from './FrontPage';
import FoodSearch from '../components/FoodSearch';
import UpperNav from '../components/UpperNav';

function App() {
  return (
    <Fragment>
      <UpperNav />
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage}></Route>
          <Route exact path="/findfood" component={FoodSearch}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
export default App;
