import express from 'express';
import userController from '../controller/userController';
import verifyToken from '../middleware/jwt';

const router = express.Router();

// Router to get all Users
router.get('/users', verifyToken, (req, res) => res.send('Hello'));

// Router to Register a user
router.post('/users', verifyToken, userController.createUser);

// Router to login a user
router.post('auth/login', verifyToken, userController.loginUser);

// Router to update users information
router.put('/users/:ordersId', verifyToken, (req, res) => {
  res.send('userController.updateOrders');
});


export default router;
