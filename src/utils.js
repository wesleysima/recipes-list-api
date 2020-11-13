const removeSpecialCaractersFromArray = (array) => {let returnArray = []; array.forEach(item => returnArray.push(item.trim())); return returnArray }
const sortArray = (array) => array.filter(x => x).sort();

module.exports = {
    removeSpecialCaractersFromArray: removeSpecialCaractersFromArray,
    sortArray: sortArray
  }