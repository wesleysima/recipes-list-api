function unavailableService(err, req, res, next) {
    if (err.response.status === 503) {
            res.status(503).json({
            status: 503,
            message: 'Recipe Puppy or Giphy service is unavailable'
        });
    } else 
        next(err);
}

function giphyApiNoCredentials(err, req, res, next) {
    const status = err.response.status;

    if (status === 401 || status === 403) {
            res.status(403).json({
            status: 403,
            error: 'Invalid API key for Giphy!'
        });
    } else 
        next(err);
}

function invalidParameterHandler(err, req, res, next) {
    if (err instanceof TypeError) {
      res.status(400).json({
        status: 400,
        message: 'Only 3 ingredient parameters can be sent!'
      });
    } else
      next(err);
  }

  module.exports = {
    unavailableService: unavailableService,
    giphyApiNoCredentials: giphyApiNoCredentials,
    invalidParameterHandler: invalidParameterHandler
  }