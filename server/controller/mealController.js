// Body parser comes to work here to parse all post request
import mealsArray from '../model/MealsModel';

const MealController = {
  // Return all meal options
  getAllMeals: (req, res) => {
    const meals = mealsArray;
    return res.status(200).send({
      success: 'true',
      message: 'successful',
      meals
    });
  },
  // Creates a new meal option.
  createMealOption: (req, res) => {
    const mealTitle = 'Rice and egg';
    const mealDescription = 'Save for another day';
    const mealPrice = 45.33;
    const mealImage = 'image';
    const mealObject = {};
    mealObject.mealId = mealsArray.length + 1;
    mealObject.mealTitle = mealTitle;
    mealObject.mealDescription = mealDescription;
    mealObject.mealPrice = mealPrice;
    mealObject.mealImage = mealImage;

    // Push elements to the array
    mealsArray.push(mealObject);
    // res.json(mealsArray); // displays the meals array
    return res.status(201).send({
      success: 'true',
      message: 'Successfully created a meal option',
      meal: mealsArray
    }); // Returns the newly added meal option
  }

};


export default MealController;
