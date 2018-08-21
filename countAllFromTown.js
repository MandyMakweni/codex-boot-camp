module.exports = function(isFromTown,satrts){
   var fromTown = isFromTown.split(',');
   var platesNum =[];

  for(var i=0; i < fromTown.length; i++){
  if (fromTown[i].trim().startsWith(satrts) ){
      platesNum.push(fromTown[i])
   	}
  }
  return platesNum.length;
}
