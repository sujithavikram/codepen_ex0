////////////////////////////
var obj = {
    a: 'a',
    number: 11,
    hungry: true,
    grammyWins: 1
}
console.log(getAllKeys(obj));

function getAllKeys(obj) {
    var arrayList = [];
    arrayList = Object.getOwnPropertyNames(obj);
    return arrayList;
}