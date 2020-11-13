const recipePuppyApi = require('../repositories/recipePuppyApi');
const guiphyApi = require('../repositories/giphyApi');
const utils = require('../utils') ;

async function getRecipesByIngredients(req, res, next) {
    let recipesReturn = [];

    try {
        let recipesAPi = await recipePuppyApi.getRecipesByIngredients(req.query.i);

        for (let recipe in recipesAPi.results) {
            titleCleaned = recipe.title.trim();
            let gif = await guiphyApi.getGiphy(titleCleaned);

            recipesReturn.push({
                title: titleCleaned,
                ingredients: utils.sortArray(recipe.ingredients.split(', ')), // Cast ingredients to array and sort
                link: recipe.href,
                gif: gif
            })
        }

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
