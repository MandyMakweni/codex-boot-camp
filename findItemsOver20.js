module.exports = function(objList){
  var objectOver20 = [];

  for (var i = 0; i < objList.length; i++) {
    var listObject = objList[i];
    var thisPrice = listObject.qty

    if (thisPrice > 20) {
      objectOver20.push(listObject);
    }
  }
  return objectOver20;
}
  function findItemsOver20(namePrice, threshold) {
  var comparedPrice = [];
  for (var i = 0; i < namePrice.length; i++) {
    var objAttr = namePrice[i];
    var thePriceObj = objAttr.qty

    if (thePriceObj > 20
       ) {
      comparedPrice.push(objAttr)
    }
  }
  return comparedPrice;
}
