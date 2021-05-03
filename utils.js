const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}
const getQuotesByPerson = (arr,person) => {
  return arr.filter(obj => {
    return obj.person === person;
  })
}
module.exports = {
  getRandomElement,
  getQuotesByPerson
};
