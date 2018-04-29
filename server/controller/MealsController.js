
// Controller declarations.
import Controller from './Controller';
import meals from '../models/meals';
/**
 * Meal Class extends from the controller to perform actions like addmeal, deletemeal modify meal.
 */
class MealsController extends Controller {
  /**
   * This method adds meal to the database
   */
  static addMeal(req, res) {
    // gets the request from the body of the post API
    let mealTitle, mealDescription, mealAmount, mealImage = req.body;
    const newMeal = {
      mealId: meals.length + 1,
      mealTitle,
      mealDescription,
      mealAmount,
      mealImage
    };
    if(mealTitle==='' || mealAmount==='' || mealImage===''){
      return res.status(400).json({
        status: 'error',
        message: 'Pls, check your details again and confirm.'
      })
    }else{
      meals.push(newMeal);
      return res.status(201).json({
        status: 'OK',
        message: 'Meal successfully created!',
      });
    }


  static retrieveMeals(req, res){
    // gets the request to retrieve all meals from the database.
    
  }
}

module.export = MealsController;
