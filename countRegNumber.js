module.exports = function(regNumber){
  var num = regNumber.split(",");

  var regCount = num.length;
  return regCount;
}
// countRegNumber('CA 182736,CY 523519,CJ 812328');
