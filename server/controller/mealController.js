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
  },
  // Update a meal function
  updateMeal: (req, res) => {
    const mealId = 1;
    // Iterate through the meals array
    mealsArray.forEach((meal) => {
      // Look for a particular mealId
      if (mealId === meal.mealId) {
        // Update the meal object
        meal.mealTitle = '';
        meal.mealDescription = '';
        meal.mealPrice = 0;
        meal.mealImage = '';

        // Return a success
        res.send({
          success: 'true',
          message: 'successfully updated the meal option',
          meal: mealsArray
        });
      } else {
        res.send({
          success: 'false',
          message: 'cannot find that id',
          meal: mealsArray
        });
      }
    });
  },
  deleteMeal: (req, res) => {
    const mealId = 1;
    // Iterates through the meal array to find the particular meal id
    mealsArray.forEach((meal) => {
      // Checks for the Id
      if (mealId === meal.mealId) {
        // Gets the index of the meal object
        const index = mealsArray.indexOf(mealId);
        // Delete the meal
        mealsArray.splice(index, 1);
        res.send({
          success: 'true',
          message: 'successfully deleted the meal option',
          meal: mealsArray
        });
      } else {
        res.send({
          success: 'false',
          message: 'cant find meal',
          meal: mealsArray
        });
      }
    });
  }

};


export default MealController;
