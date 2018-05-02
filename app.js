//  Importing express to the app
import express from 'express';
import bodyParser from 'body-parser';
import mealRoutes from './server/routes/meals';
import menuRoutes from './server/routes/menu';
import orderRoutes from './server/routes/orders';
import userRoutes from './server/routes/users';


// Setting up express and major declarations
const app = express();
const port = 3000;

// Routes goes here!
const path = '/api/v1';
app.get('/', (req, res) => {
  res.send('Welcome to the homepage.');
});

// Middlewares
app.use(bodyParser.json()); // for parsing multipart/form-data
app.use(bodyParser.urlencoded({ extended: false }));

// Using the routes modules
app.use(`${path}/`, mealRoutes);
app.use(`${path}/`, menuRoutes);
app.use(`${path}/`, orderRoutes);
app.use(`${path}/`, userRoutes);
// app.use('/api/v1', routes);

app.get('*', (req, res) => {
  res.send('Error 404. This page cannot be found');
});

// Calling the app
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


// Exporting the app
module.exports = app;
