import express from 'express';

const router = express.Router();

// Router to get all meal options
router.get('/meals', (req, res) => {
  res.send('This routes returns all meal options.');
});

// Router to create a meal
router.post('/meals', (req, res) => {
  res.send('This routes add a meals option!');
});

// Router to update a meal information
router.put('/meals/:mealsId', (req, res) => {
  res.send('This routes updates the information of a meal option');
});

router.delete('/meals/:mealsId', (req, res) => {
  res.send('This routes deletes a meal option');
});

module.exports = router;
