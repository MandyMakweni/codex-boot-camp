module.exports = function(isFromPaarl){
   var fromPaarl = isFromPaarl.split(",");
   var isPaarl =[];

  for(var i=0; i < fromPaarl.length; i++){
  if (fromPaarl[i].trim().startsWith('CJ') ){
      isPaarl.push(fromPaarl[i])
   	}
  }
  return isPaarl.length
}
