import express from 'express';
import MealController from '../controller/mealController';

const router = express.Router();

// Router to get all meal options
router.get('/meals', MealController.getAllMeals);

// Router to create a meal
router.post('/meals', MealController.createMealOption);

// Router to update a meal information
router.put('/meals/:mealsId', MealController.updateMeal);

router.delete('/meals/:mealsId', MealController.deleteMeal);

module.exports = router;
