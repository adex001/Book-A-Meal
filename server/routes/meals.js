import express from 'express';
import mealController from '../controller/mealController';


const router = express.Router();

// Router to get all meal options
router.get('/meals', mealController.getAllMeals);

// Router to create a meal
router.post('/meals', mealController.createMealOption);

// Router to update a meal information
router.put('/meals/:mealsId', mealController.updateMeal);

router.delete('/meals/:mealsId', mealController.deleteMeal);

export default router;
