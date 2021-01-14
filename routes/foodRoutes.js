const express = require('express');

const router = express.Router();

const foodController = require('../controllers/foodController');

router.get('/getfood', foodController.getFood, (req, res) => {
  res.status(200).json({ food: res.locals.food });
  //   res.send('working');
});

router.post('/chooseFood', foodController.chooseFood);

module.exports = router;
