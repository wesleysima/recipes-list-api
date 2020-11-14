const recipesService = require('../services/recipesService');
const utils = require('../utils');

async function getRecipesByIngredients(req, res) {
    recipes = await recipesService.mountRecipesJson(req.query.i);

    res.json({
        keywords: utils.removeSpecialCaractersFromArray(req.query.i.split(',')),
        recipes: recipes
    });
}

module.exports = {
    getRecipesByIngredients: getRecipesByIngredients,
  }
