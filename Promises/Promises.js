const fs=require('fs');
const { isGeneratorFunction } = require('util/types');

//my own asynchronous Function
function bimalsereadfile(){
    return new Promise(function(callbacks){
        console.log('Inside the Promise');
        fs.readFile('new.txt',"utf-8",function(err,data){
            console.log('Before Resolving');
            callbacks(data)
        });
    })
}

//Callback function to call
function onDone(data){
    console.log(data);
}
bimalsereadfile().then(onDone);
console.log("Completed")