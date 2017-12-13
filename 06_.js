  ///////////////////////////
var arrGiven = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

console.log(transformEmployeeData(arrGiven));
function transformEmployeeData(array) {
    // your code here
    var arrRes , arrRes1 = [ ];
    for(var i=0; i<array.length ; i++){
       arrRes = array[i];
       var obj = {};
       var arr1 = [ ];
        for(var j=0; j<arrRes.length ; j++){
            arr1 = arrRes[j];
            obj[arr1[0]] = arr1[1];
           console.log(obj);
            
        }
        arrRes1.push(obj);
    }
    console.log(Array.isArray(obj));
    return arrRes1;
  }

// // // // // [
// // // // //     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
// // // // //     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// // // // // ]

  var arrGiven = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

console.log(transformEmployeeData(arrGiven));