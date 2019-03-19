require('dotenv').config();

const express = require("express");
const userRouter = require('./routers/user');
const publicRouter = require('./routers/public');

const app = express()

app.use(express.json())
app.use(userRouter);
app.use(publicRouter);
  
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;  
  res.status(err.statusCode).send({error: err.message});  
  
});

module.exports = app;


