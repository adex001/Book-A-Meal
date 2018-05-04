import express from 'express';
import OrderController from '../controller/orderController';
import verifyToken from '../middleware/jwt';

const router = express.Router();

// Router to get all meal options
router.get('/orders', verifyToken, OrderController.getOrders);

// Router to create a meal
router.post('/orders', verifyToken, OrderController.createOrder);

// Router to update a meal information
router.put('/orders/:ordersId', verifyToken, OrderController.updateOrders);


module.exports = router;
