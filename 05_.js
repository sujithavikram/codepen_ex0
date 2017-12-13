// // var arr = {};
// // var ab = 'a';
// // arr.ab = 'x';
// // arr.b = 'y';
// // console.log(arr);

var obj1 = {
    name : 'Krysten',
    age : 33,
    hasPets : false
  }
  function listAllValues(obj) {
    // your code here
    var array = [];
    
    for(key in obj){
      if(obj.hasOwnProperty(key)){
          array.push(obj[key]);
      }
   }
    return array;
  }
  console.log(listAllValues(obj1));