const prompt = require('prompt-sync')();
function SI(amount,rate,n_o_y)
{
 return ((amount*rate*n_o_y)/100);

}
var amount=prompt("Enter the Amount:- ");
var rate=prompt("Enter the Rate:- ");
var n_o_y=prompt("Enter the No Of Year:- ");
var result=SI(amount,rate,n_o_y);
console.log("Simple interset is: - "+result);