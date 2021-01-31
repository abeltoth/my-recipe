const express = require('express');
const corsHandler = require('./middleware/cors-handler');
const recipeRouter = require('./routers/recipe');

const app = express();

app.use(corsHandler);
app.use(express.json());
app.use(recipeRouter);

module.exports = app;