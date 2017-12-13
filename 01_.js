var arrayList = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
var arrayObj =  {};
function transformFirstAndLast(array) {
  
  var first = array[0];
  console.log(first);
  var last = array[array.length-1];
  arrayObj[first] = last;
  return arrayObj;
  
}
transformFirstAndLast(arrayList);

console.log(arrayObj);