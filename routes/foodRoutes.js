const express = require('express');

const router = express.Router();

const foodController = require('../controllers/foodController');

router.get('/getfood', foodController.getFood, (req, res) => {
  res.status(200).json({ food: res.locals.food });
  //   res.send('working');
});

router.post('/chooseFood', foodController.chooseFood, (req, res) => {
  res.status(200).redirect('/');
});

router.delete('/deleteFood', foodController.deleteFood, (req, res) => {
  res.status(200).send('worked');
});

module.exports = router;
