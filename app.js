//  Importing express to the app
import express from 'express';
import route from './server/routes/mealsRoutes';

// Setting up express and major declarations
const app = express();
const port = 3000;


// Routes goes here!
app.get('/', (req, res) => {
  res.send('Welcome to the homepage.');
});

// Using our routes
app.use('/api/v1/meals', route.mealsRoutes);


// Calling the app
app.set(port, port);

// Exporting the app
module.exports = app;
