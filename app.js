const express = require('express');
const recipesRouter = require('./src/routes/recipes');
const app = express();

app.use('/recipes/', recipesRouter);

module.exports = app;

