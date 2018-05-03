import express from 'express';
import userController from '../controller/userController';

const router = express.Router();

// Router to get all Users
router.get('/users', (req, res) => {
  res.send('userController.getUsers');
});

// Router to Register a user
router.post('/users', userController.createUser);

// Router to login a user
router.post('auth/login', (req, res) => {
  res.send('Post to login route');
});

// Router to update users information
router.put('/users/:ordersId', (req, res) => {
  res.send('userController.updateOrders');
});


export default router;
