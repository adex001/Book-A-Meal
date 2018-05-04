const menuObject = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    menuTitle: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.STRING,
    },
  });

  return menuObject;
};

// const menuArray = [
//   {
//     menuId: 1,
//     menuDay: '1/5/2018',
//     meals: [1, 2, 3] // Link to the mealId
//   },
//   {
//     menuId: 2,
//     menuDay: '2/5/2018',
//     meals: [2, 3, 1]
//   }
// ];

export default menuObject;
