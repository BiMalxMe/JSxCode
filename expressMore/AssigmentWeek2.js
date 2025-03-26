//Counter

// function DateCall(){
//     let newDate=new Date();
// let hrs=newDate.getHours();
// let mins=newDate.getMinutes();
// let secs=newDate.getSeconds();
// console.log(hrs+':'+mins+":"+secs)
// }
// setInterval(() => {
    
//     DateCall()
// }, 1000);


// //Useing fileread
// const fs=require('fs');
// fs.readFile('new.txt','utf-8',function(err,data){
//     console.log(data)
// })
// let sum=0;
// for(let i=0;i<100000;i++){
// sum=sum+i;
// }
// console.log(sum)



//writhing in a file 
const fs = require('fs');

// // Read the file
// fs.readFile('new.txt', 'utf-8', function(err, data) {
//     if (err) {
//         console.error('Error reading file:', err);
//         return; // Exit if there's an error
//     }

//     // Modify the file content
//     data += "copyright act 2024";

//     // Write the modified content back to the file
//     fs.writeFile('new.txt', data, 'utf-8', function(err) {
//         if (err) {
//             console.error('Error writing file:', err);
//             return; // Exit if there's an error
//         }
//         console.log('File updated successfully');
//     });
// });



// //file cleaner
// fs.readFile('new.txt','utf-8',function(err,data){
//     data=data.replace(/\s+/g, ' ')
//     fs.writeFileSync('new.txt',data);
// })



/// - HH:MM::SS (Eg. 13:45:23)

 //- HH:MM::SS AM/PM (Eg 01:45:23 PM)

function DateCall(){
let newDate=new Date();
let hrs=newDate.getHours();
let mins=newDate.getMinutes();
let secs=newDate.getSeconds();
let zone=newDate.toLocaleTimeString();
console.log("12 Hours date Time : "+hrs+':'+mins+":"+secs+" "+zone)
let hrs1=newDate.getUTCHours( );
let mins1=newDate.getUTCMinutes();
let secs1=newDate.getUTCSeconds();
let zone1=newDate.toLocaleTimeString();
console.log("24 hours date Time : "+hrs1+':'+mins1+":"+secs1+" "+zone1)
}
setInterval(() => {
    
    DateCall()
}, 6000);