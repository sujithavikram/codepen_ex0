/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has 
visited the restaurant.  Please refer to the customerData object. 

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ): 

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD IDEA:


if (firstName === 'Joe') {
  // do something
}

Starter Code :
*/

var customerData = {
    'Joe': {
        visits: 1
    },
    'Carol': {
        visits: 2
    },
    'Howard': {
        visits: 3
    },
    'Carrie': {
        visits: 4
    }
};
console.log(greetCustomer('Carrie'));
function greetCustomer(firstName) {
    var xy = customerData[firstName];
    console.log(xy);
    var visits = 0;
    if (xy) {
        visits = xy.visits;
    }
    var greeting = '';
    switch (visits) {
        case 0:
            greeting = 'Welcome! Is this your first time?';
            break;
        case 1:
            greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
            break;
        default:
            greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
            break;

    }
    return greeting;

}


// console.log(greetCustomer('Carrie'));
// function greetCustomer(firstName) {
//     var greeting = '';
//     // your code here


//     var array1 = [];
//     var index;
//     var i = 0;
//     var names = [];

//     for (key in customerData) {
//         if (customerData.hasOwnProperty(key)) {
//              array1[i] = key;
//             }
//             i++;

//     }
//     console.log(array1);

//     var l = 0;
//     console.log(customerData[firstName]);
//     for (var k = 0; k < names.length; k++) {
//         if (key === firstName) {
//             var obj1 = customarray1[k];

//             for (key in obj1) {
//                 if (obj1.hasOwnProperty(key)) {
//                     l = obj1[key];
//                 }
//             }
//         }
//     }
//     switch (l) {
//         case 0:
//             greeting = 'Welcome! Is this your first time?';
//             break;
//         case 1:
//             greeting = 'Welcome back,' + firstName + ' ! We\'re glad you liked us the first time!';
//             break;
//         case 2:
//             greeting = 'Welcome back,' + firstName + ' ! So glad to see you again!';
//             break;
//         case 3:
//             greeting = 'Welcome back,' + firstName + ' ! So glad to see you again!';
//             break;
//         case 4:
//             greeting = 'Welcome back,' + firstName + ' ! So glad to see you again!';
//             break;
//     }

//     return greeting;
// }

//     //   handles 1st time visitor from sample data
//     //   handles 2nd time visitor from sample data
//     //   handles 2nd time visitor from new nonsample data
//     //   handles 3rd time visitor from sample data
//     //   handles 4th time visitor from new nonsample data


    // var obj1 = {};

    // var key1 = "name1";

    // obj1[key1] = "suj";
    // console.log(obj1);


    // obj2 = {
    //     name2: "red"
    // }
    // for (key in obj2) {
    //     console.log(key2 = key);
    // }
