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
  const { name, calories, fat, carbs, protein } = req.body;
  const arr = [name, calories, fat, carbs, protein];
  const query =
    "INSERT INTO People (name, meal, calories, fat, carbs, protein) VALUES ($1, 'breakfast', $2, $3, $4, $5)";
  db.query(query, arr)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
module.exports = foodController;
