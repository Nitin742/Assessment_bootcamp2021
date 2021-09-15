const prompt = require('prompt-sync')();
function ispalindrome(str)
{
    var newstr="";
    for(var i=str.length-1;i>=0;i--)
    newstr+=str[i];
    for(var i=0;i<str.length;i++)
    {
        if(str[i]!=newstr[i])
        return false;
        
    }
    return true;

}
var str=prompt("Enter A String :- ");
var result=ispalindrome(str);
console.log(result);