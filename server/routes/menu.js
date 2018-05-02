import express from 'express';
import MealController from '../controller/menuController';

const router = express.Router();

// Router to get the menu for the day
router.post('/menu', MealController.createMenu);

// Router to setup a menu
router.get('/menu', (req, res) => {
  res.send('This routes gets the menu for the day!');
});

module.exports = router;
