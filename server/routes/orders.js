import express from 'express';
import OrderController from '../controller/orderController';

const router = express.Router();

// Router to get all meal options
router.get('/orders', OrderController.getOrders);

// Router to create a meal
router.post('/orders', OrderController.createOrder);

// Router to update a meal information
router.put('/orders/:ordersId', OrderController.updateOrders);


module.exports = router;
