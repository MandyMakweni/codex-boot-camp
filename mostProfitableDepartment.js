module.exports = function(salesData){
 var salesForEachDepartment = {};
   var num=0;
   var printH="";
for(var i=0;i<salesData.length;i++){
    var listItem = salesData[i];
  if (salesForEachDepartment[listItem.department] === undefined) {
     salesForEachDepartment[listItem.department] = 0;
}
  salesForEachDepartment[listItem.department] +=listItem.sales;


  if(salesForEachDepartment[listItem.department]>num){

         num = salesForEachDepartment[listItem.department];

        printH = listItem.department;



     }
}


  return printH;
}

function mostProfitableDay(salesData){
 var salesForEachDay = {};
   var num=0;
   var printH="";
for(var i=0;i<salesData.length;i++){
    var listItem = salesData[i];
  if (salesForEachDay[listItem.day] === undefined) {
     salesForEachDay[listItem.day] = 0;
}
  salesForEachDay[listItem.day] +=listItem.sales;


  if(salesForEachDay[listItem.day]>num){

         num = salesForEachDay[listItem.day];

        printH = listItem.day;



     }
}


  return printH;
}
