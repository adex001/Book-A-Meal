import express from 'express';

const router = express.Router();

// Router to get all meal options
router.get('/orders', (req, res) => {
  res.send('This gets all the orders.');
});

// Router to create a meal
router.post('/meals', (req, res) => {
  res.send('This routes sets the meals option from the menu!');
});

// Router to update a meal information
router.put('/orders/:ordersId', (req, res) => {
  res.send('This routes modifies an order!');
});


module.exports = router;
