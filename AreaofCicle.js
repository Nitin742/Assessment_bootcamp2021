const prompt = require('prompt-sync')();
function Area(radius)
{
return Math.PI*radius*radius;
}
var radius=prompt("Enter the Radius: - ");
var result=Area(radius);
console.log(result);