module.exports = function(year){
var newYear= new Date();
  var fullYear = newYear.getFullYear();
  return fullYear -year;
}
