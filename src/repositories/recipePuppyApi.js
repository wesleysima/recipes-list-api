const axios = require('axios');

async function getRecipesByIngredients(ingredients) {
    const { data } = await axios.get(process.env.RECIPE_PUPPY_API_URL, {
      params: {
        i: ingredients
      }
    });
    
    return data;
  }

  module.exports = {
    getRecipesByIngredients: getRecipesByIngredients,
  }
