var array1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964] , ['color' , 'red']]
var obj1 = {};
var arrElement = [] ;
function fromListToObject(array) {
  for(var i=0 ; i< array.length ; i++){
    arrElement = array[i];
   
    obj1[arrElement[0]] = arrElement [1];
    
  }
    return obj1;
}

fromListToObject(array1);
console.log(obj1);
console.log(Array.isArray(obj1));