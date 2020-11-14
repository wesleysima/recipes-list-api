const recipePuppyApi = require('../repositories/recipePuppyApi');
const guiphyApi = require('../repositories/giphyApi');
const utils = require('../utils');

async function mountRecipesJson(ingredientsParams) {
    let recipesReturn = [];
    let recipesAPi = await recipePuppyApi.getRecipesByIngredients(ingredientsParams);

    for (let recipe of recipesAPi.results) {
        titleCleaned = recipe.title.trim();
        let gif = await guiphyApi.getGiphy(titleCleaned);

        recipesReturn.push({
            title: titleCleaned,
            ingredients: utils.sortArray(recipe.ingredients.split(', ')), // Cast ingredients to array and sort
            link: recipe.href,
            gif: gif
        })
    }

    return recipesReturn;
}

module.exports = {
    mountRecipesJson: mountRecipesJson,
  }