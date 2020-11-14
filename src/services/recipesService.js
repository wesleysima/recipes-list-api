const recipePuppyApi = require('../repositories/recipePuppyApi');
const guiphyApi = require('../repositories/giphyApi');
const utils = require('../utils');

async function mountRecipesJson(ingredientsParams) {
    const { results } = await recipePuppyApi.getRecipesByIngredients(ingredientsParams); 
    const gifs = await Promise.all(results.map(i => getGif(i)));

    const recipes = results.map((recipe, index) => ({
        title: recipe.title.trim(),
        ingredients: utils.sortArray(recipe.ingredients.split(',')),
        link: recipe.href,
        gif: gifs[index],
    }));

    return recipes;
}

async function getGif(recipe) {
    const title = recipe.title.trim();
    const gif = await guiphyApi.getGiphy(title)

    return gif
}

module.exports = {
    mountRecipesJson: mountRecipesJson,
  }