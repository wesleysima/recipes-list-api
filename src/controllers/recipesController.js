async function getRecipesByIngredients(req, res, next) {
    res.status(200).send('Test');
}

module.exports = {
    getRecipesByIngredients: getRecipesByIngredients,
  }
