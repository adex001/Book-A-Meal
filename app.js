//  Importing express to the app
import express from 'express';

// Setting up express and major declarations
const app = express();
const port = 3000;


// Routes goes here!
app.get('/', (req, res) => {
  res.send('Welcome to the homepage.');
});


// Calling the app

app.listen(port, () => {
  console.log(`App currently running on port ${port}`);
});

// Exporting the app
module.exports = app;
