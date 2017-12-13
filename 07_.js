/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays,
 like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

var inputObj = {
    name: 'Holly',
    age: 35,
    role: 'producer'
}

console.log(convertObjectToList(inputObj));

function convertObjectToList(obj) {
    // your code here
    var outputArray = [];
    var i = 0;
    var inputArr = [];
    for (key in obj) {
        // console.log(key);
        inputArr[0] = key;
        inputArr[1] = obj[key];
        console.log(inputArr);
        outputArray[i] = inputArr;
        console.log(outputArray);

    }
    //return outputArray;
}

var inputObj = {
    name: 'Holly',
    age: 35,
    role: 'producer'
}
convertObjectToList(inputObj);
function convertObjectToList(obj) {
    var inputArr = [];
    var outputArray = [];
    var i = 0;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            inputArr[0] = key;
            inputArr[1] = obj[key];
            outputArray.push(inputArr);
            console.log(outputArray);

        }
        console.log(inputArr);

    }
}