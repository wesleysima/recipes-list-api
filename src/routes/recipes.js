const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipesController')

router.get('/', controller.getRecipesByIngredients);

module.exports = router;