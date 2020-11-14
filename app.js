const express = require('express');
const recipesRouter = require('./src/routes/recipes');
const app = express();
const errors = require('./errors')

app.use('/recipes/', recipesRouter);
app.use(errors.giphyApiNoCredentials);
app.use(errors.unavailableService);
app.use(errors.invalidParameterHandler);

module.exports = app;

