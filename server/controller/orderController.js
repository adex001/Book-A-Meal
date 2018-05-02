import ordersArray from '../model/OrdersModel';


const OrderController = {
  getOrders: (req, res) => {
    res.send({
      ordersArray
    });
  }
};
export default OrderController;
