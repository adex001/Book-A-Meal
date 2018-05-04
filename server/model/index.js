import Sequelize from 'sequelize';
// Connect to the database
const sequelize = new Sequelize('bookameal', 'postgres', 'postgres', {
  dialect: 'postgres',
});

// Creating a model arrays
const models = {
  users: sequelize.import('./userModel'),
  orders: sequelize.import('./ordersModel'),
  menu: sequelize.import('./MenuModel'),
  meals: sequelize.import('./MealsModel'),

};

// loads the models
Object.keys(models).forEach((modelName) => {
  if ('associate' in models.modelName) {
    models[modelName].associate(models);
  }
});
models.sequelize = sequelize;
models.Sequelize = Sequelize;
// export the database models
export default models;
