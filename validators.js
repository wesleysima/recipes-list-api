function checkIngredientsParams(req, res, next) {
    if ( req.query.i.split(',').length > 3) 
        throw new TypeError();
    else 
        next();
}

module.exports = {
    checkIngredientsParams: checkIngredientsParams,
  }