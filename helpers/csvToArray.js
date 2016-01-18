module.exports = function (csvFile) {
  var results = [];
  var elements = csvFile.split('\n');
  var notEmptyElements = elements.filter(Boolean);
  
  notEmptyElements.forEach(function(elem, index) {
    if (index !== 0){    
      results.push(elem.split(','));
    }  
  });
  return results;
}
