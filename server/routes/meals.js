import express from 'express';
import MealController from '../controller/mealController';

const router = express.Router();

// Router to get all meal options
router.get('/meals', MealController.getAllMeals);

// Router to create a meal
router.post('/meals', MealController.createMealOption);

// Router to update a meal information
router.put('/meals/:mealsId', (req, res) => {
  res.send('This routes updates the information of a meal option');
});

router.delete('/meals/:mealsId', (req, res) => {
  res.send('This routes deletes a meal option');
});

module.exports = router;
