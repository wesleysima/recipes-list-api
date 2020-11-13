const recipePuppyApi = require('../repositories/recipePuppyApi');
const utils = require('../utils') ;

async function getRecipesByIngredients(req, res, next) {
    let recipesReturn = [];

    try {
        let recipesAPi = await recipePuppyApi.getRecipesByIngredients(req.query.i);

        recipesAPi.results.forEach(recipe => {
            recipesReturn.push({
                title: recipe.title.trim(),
                ingredients: utils.sortArray(recipe.ingredients.split(', ')), // Cast ingredients to array and sort
                link: recipe.href,
            })
        })

        res.json({
        keywords: utils.removeSpecialCaractersFromArray(req.query.i.split(',')),
        recipes: recipesReturn
        });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getRecipesByIngredients: getRecipesByIngredients,
  }
