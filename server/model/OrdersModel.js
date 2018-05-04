const orderObject = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userid: DataTypes.ID,
    password: DataTypes.STRING,
    order: DataTypes.STRING,
  });

  Order.associate = function (models) {
    models.Order.hasMany(models.Order);
  };

  return orderObject;
};
// const ordersArray = [
//   {
//     ordersId: 1,
//     userId: 2,
//     orders: {
//       mealId: 1,
//       quantity: 3
//     },
//     deliveryStatus: 'delivered',
//     shippingAddress: 'Clokes Avenue, London'
//   },
//   {
//     ordersId: 2,
//     userId: 3,
//     orders: {
//       mealId: 2,
//       quantity: 2
//     },
//     deliveryStatus: 'processing',
//     shippingAddress: 'Abesan Estate, Ipaja'
//   }
// ];

// export default ordersArray;
