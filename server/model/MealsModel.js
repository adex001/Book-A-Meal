const mealsObject = (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    userid: {
      type: DataTypes.ID,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.STRING,
    },
  });

  Meals.associate = (models) => {
    models.hasMany(models.Order);
  };


  return mealsObject;
};

// const mealsArray = [
//   {
//     mealId: 1,
//     mealTitle: 'Rice and Chicken',
//     mealDescription: 'Soft parboiled rice and super grilled Chicken',
//     mealPrice: 4000,
//     mealImage: 'https://www.tablespoon.com/recipes/wild-rice-and-turkey-casserole/b86a2adc-fd0a-4cc6-9871-b44d081c5e00',

//   },
//   {
//     mealId: 2,
//     mealTitle: 'Spaghetti with grilled Fish',
//     mealDescription: 'fine spaghetti and seasoned grilled Chicken',
//     mealPrice: 3000,
//     mealImage: 'https://www.manusmenu.com/spaghetti-with-fish-sauce',

//   },
// ];

export default mealsObject;
