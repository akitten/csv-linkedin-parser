var deleteQuotes = require('./deleteQuotes.js');

module.exports = function (arr) {
  var results = [];
  arr.forEach(function (obj) {
  var jsonObj = {};
    for (var prop in obj) {
      if (typeof obj[prop] === 'object') {
       jsonObj.names = obj[prop].map(deleteQuotes);
      } else {

        jsonObj[prop] = deleteQuotes(obj[prop]);
      }
    }
    results.push(jsonObj);
  });
  return results;
};
