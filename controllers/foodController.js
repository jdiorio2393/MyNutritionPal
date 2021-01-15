const { FormGroup } = require('@material-ui/core');
const db = require('../models/peopleModel');

const foodController = {};

foodController.getFood = (req, res, next) => {
  const foodQuery = 'SELECT * FROM "public"."people"';
  db.query(foodQuery).then((data) => {
    res.locals.food = data.rows;
    // console.log(data.rows[0]);
    next();
  });
};

foodController.chooseFood = (req, res, next) => {
  console.log(req.body);
  const { name, calories, fat, carbs, protein, meal } = req.body;
  const arr = [name, meal, calories, fat, carbs, protein];
  const query =
    'INSERT INTO People (name, meal, calories, fat, carbs, protein) VALUES ($1, $2, $3, $4, $5, $6)';
  db.query(query, arr)
    .then((data) => {
      console.log(data);
      next();
    })
    .catch((err) => console.log(err));
};

foodController.deleteFood = (req, res, next) => {
  console.log(req.body);
  const { name, meal } = req.body;
  const arr = [name, meal];
  const query = 'DELETE FROM People WHERE name=$1 AND meal=$2';
  db.query(query, arr)
    .then((data) => {
      console.log(data);
      next();
    })
    .catch((err) => console.log(err));
};

module.exports = foodController;
