const axios = require('axios');

async function getGiphy(searchString) {
    const {  data } = await axios.get(process.env.GIPHY_API_URL, {
        params: {
          api_key: process.env.GIPHY_API_KEY,
          limit: 1,
          q: searchString
        }});

    return data.data.length ? data.data[0].images.original.url : 'No gif found for this recipe'
}

module.exports = {
    getGiphy: getGiphy,
  }
