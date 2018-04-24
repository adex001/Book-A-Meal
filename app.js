//Importing express to the app
const express = require('express');

//Setting up express and major declarations
const app = express();
const port = 3000;


//Routes goes here!
app.get('/', (req,res)=>{
    res.send(`Welcome to the homepage.`)
});



//Calling the app
app.listen(port, (req, res) => {
    console.log(`App currently running on port ${port}`);
});