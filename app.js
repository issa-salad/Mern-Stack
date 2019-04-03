const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');
// initialising express
const app = express();

// Bodyparser Middleware
 app.use(bodyParser.json());

 // DB config

 const db = require('./config/keys').mongoURI;

 // connect to Mongodb

 mongoose
 .connect(db)
 .then(() => console.log('MongoDB in the house...'))
 .catch(err => console.log(err));

 // use Routes

 app.use('/api/items', items);

 // setting up the server

 const port = process.env.PORT || 3002;

 app.listen(port, () => console.log(`we are live on port ${port}`));