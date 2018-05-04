import express from 'express';
import mealController from '../controller/mealController';
import verifyToken from '../middleware/jwt';


const router = express.Router();

// Router to get all meal options
router.get('/meals', verifyToken, mealController.getAllMeals);

// Router to create a meal
router.post('/meals', verifyToken, mealController.createMealOption);

// Router to update a meal information
router.put('/meals/:mealsId', verifyToken, mealController.updateMeal);

router.delete('/meals/:mealsId', verifyToken, mealController.deleteMeal);

export default router;
