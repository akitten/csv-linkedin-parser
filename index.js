var fs = require('fs');
var csvToArray = require('./helpers/csvToArray.js');
var jsonFormatObj = require('./helpers/jsonFormatObj.js');
var arrOfJsonObjects = require('./helpers/arrOfJsonObjects.js');

module.exports = function(csv) {
  var arr = csvToArray(csv);
  //contacts is an array of Linkdin information e.g [{names: ['"Czapla"', '"Anita"'], fullname: '"Anita Czapla"', headline: '"Florist"', org: '"Paradise"', email: '"hello:hello.com"'}]
  //with extra "" in a string
  var contacts = arr.map(jsonFormatObj);
  var jsonObj = arrOfJsonObjects(contacts);
  return jsonObj;
};
