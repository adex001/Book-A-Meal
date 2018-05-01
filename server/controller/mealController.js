import mealsArray from '../model/MealsModel';

const MealController = {
  getAllMeals: (req, res) => {
    const meals = mealsArray;
    res.send(meals);
  }

};


export default MealController;
