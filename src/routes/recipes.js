const express = require('express');
const router = express.Router();
const controller = require('../controllers/recipesController')
const validators = require('../../validators')

router.get('/', validators.checkIngredientsParams, controller.getRecipesByIngredients);

module.exports = router;