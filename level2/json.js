//Converts the object type to string type

// var a={
//     Name:'Bimal',
//     Age:33,
//     Address:'Gaindakot'
// }
// var converged=JSON.stringify(a);
// console.log(converged);


//Converts the string type to object type

let str11='{"Name":"Bimal","age":22,"address":"Gaindkot"}'
var parced_data=JSON.parse(str11);
console.log(parced_data["Name"])
