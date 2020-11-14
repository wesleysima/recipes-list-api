const recipesService = require('../services/recipesService');
const utils = require('../utils');

async function getRecipesByIngredients(req, res, next) {
    try {
        ingredientsParams = req.query.i;

        if ( ingredientsParams.split(',').length > 3) {
            throw new TypeError();
          }

        recipes = await recipesService.mountRecipesJson(ingredientsParams);

        res.json({
            keywords: utils.removeSpecialCaractersFromArray(ingredientsParams.split(',')),
            recipes: recipes
        });
        
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getRecipesByIngredients: getRecipesByIngredients,
  }
