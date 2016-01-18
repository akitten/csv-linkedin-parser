module.exports = function (arr) {

  var result = {
    names: [arr[3], arr[1]],
    fullname: arr[1] + ' ' + arr[3],
    headline: arr[31],
    org: arr[29],
    email: arr[5]
  }
  return result;
}