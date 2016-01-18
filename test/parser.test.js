var test = require('tape');
var fs      = require('fs');
var dir     = __dirname.split('/')[__dirname.split('/').length-1];
var file    = dir + __filename.replace(__dirname, '') + ' >';
var parser = require('../index');


test(file + 'parse CSV into JSON format ', function (t) {

  var fixture = fs.readFileSync(__dirname + '/fixtures/testerN.csv', 'utf-8');
  var result = parser(fixture);
  t.ok(result.length === 3, 'There are 3 contacts');
  t.ok(result[0].fullname === 'Hugh Triggerr', 'The fullname of the first formatted contact is Hugh Triggerr');
  t.ok(result[1].fullname === 'Michael Harney', 'The fullname of the second formatted contact is Michael Harney');
  t.ok(result[2].email === 'ola@gmail.com', 'The email of the thirs contact is ola@gmail.com ');
  t.end();
});