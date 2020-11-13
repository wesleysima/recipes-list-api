const axios = require('axios');

async function getGiphy(searchString) {
    const { data } = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'pPiMNFkdnBt4wGmBiJ9YCryAw3lHJk98',
          limit: 1,
          q: searchString
        }});

    return data.data.length ? data.data[0].images.original.url : 'No gif found for this recipe'
}

module.exports = {
    getGiphy: getGiphy,
  }
