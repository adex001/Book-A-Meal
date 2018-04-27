import express from 'express';

const router = express.Router();

// Router to get the menu for the day
router.get('/menu', (req, res) => {
  res.send('This routes gets the menu for the day.');
});

// Router to setup a menu
router.post('/menu', (req, res) => {
  res.send('This routes sets up the menu for the day!');
});

module.exports = router;
