module.exports = function(phoneBill){
var bill  = phoneBill.split(', ')
	var callBill = [];
 	var smsBill = [];

  for(var i =0; i < bill.length; i++){
  	if(bill[i]==='call'){
    callBill.push(bill[i]);
  }
    else if (bill[i]==='sms'){
    smsBill.push(bill[i])
    }
  }
	var totalCall = callBill.length * 2.75;
 	var totalSms = smsBill.length * 0.65;
 	var overall = totalCall + totalSms;
  return  'R' + overall.toFixed(2);
  }
