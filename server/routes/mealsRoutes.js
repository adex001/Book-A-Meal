// Import declarations
import express from 'express';
import MealController from '../controller/MealsController';

const router = express.Router();

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BOOK-A-MEAL API!',
  }));
  // API to retrieve meals
  router.get('/api/v1/meals', MealController.retrieveMeals);

  // api route to add a meal
  app.post('/api/v1/addMeal', MealController.addMeal);

  //  api route to update a meal
  app.post('/api/v1/meals/:mealId', MealController.updateMeal);

  // api route to delete a meal
  app.post('/api/v1/meals/:mealId', MealController.deleteMeal);

};

