/* eslint-disable class-methods-use-this */
import ordersArray from '../model/OrdersModel';

class OrderController {
  getOrders(req, res) {
    res.send({
      ordersArray,
    });
  }
  updateOrders(req, res) {
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
  createOrder(req, res) {
    // Creates an order by selecting from the meal option

    // dummy datas
    const userId = 2;
    const orders = { mealId: 1, quantity: 4 };
    const deliveryStatus = 'pending';
    const shippingAddress = 'Ilupeju, Lagos';
    const orderObject = {};

    orderObject.ordersId = ordersArray.length + 1;
    orderObject.userId = userId;
    orderObject.orders = orders;
    orderObject.deliveryStatus = deliveryStatus;
    orderObject.shippingAddress = shippingAddress;

    // Pushes the orderObject to the ordersArray
    ordersArray.push(orderObject);

    // Displays the meal array
    res.send(ordersArray);
  }
}

// Instantiating the order controller
const orderController = new OrderController();
export default orderController;
