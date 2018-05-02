import express from 'express';
import MealController from '../controller/menuController';

const router = express.Router();

// Router to get the menu for the day
router.post('/menu', MealController.createMenu);

// Router to setup a menu
router.get('/menu/:day', MealController.getMenu);

module.exports = router;
