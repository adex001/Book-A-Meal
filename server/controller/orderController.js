import ordersArray from '../model/OrdersModel';


const OrderController = {
  getOrders: (req, res) => {
    res.send({
      ordersArray
    });
  },
  updateOrders: (req, res) => {
    // Gets the order Id
    const orderId = 1;
    // Iterates through the orders array
    ordersArray.forEach((order) => {
      // Look for the particular meal
      if (orderId === order.ordersId) {
        order.orders.mealId = 3;
        order.orders.quantity = 4;
        order.deliveryStatus = 'pending';
        order.shippingAddress = 'EPIC Towers';

        // Return the array
        res.json(ordersArray);
      } else {
        res.json('Cant update! No such orders');
      }
    });
  }
};
export default OrderController;
