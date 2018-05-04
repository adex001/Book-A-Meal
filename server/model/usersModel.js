const userObject = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  User.associate = function (models) {
    models.User.hasMany(models.Meal);
  };

  return User;
};


// const userArray = [{
//   userId: 1,
//   userName: 'adeoye',
//   password: 'password',
//   email: 'adex001@gmail.com'
// }];

export default userObject;
