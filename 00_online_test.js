// Your code here
var myArray = [];
myArray = ["Sujitha Sambasivareddy" , "sujithas875"];
function cutName (name){
  var resArray = [];
  if(name){
  resArray = name.split(" ");
  }
  return resArray;
}

var myInfo = {} ; 
myInfo.fullName = cutName(myArray[0]) ;
myInfo.skype = myArray[1];
myInfo.github = "https://github.com/sujithavikram" ;

console.log(JSON.stringify(myInfo));