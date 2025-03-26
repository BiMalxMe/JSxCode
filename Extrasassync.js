const fs=require('fs')

function writeintofile(){
fs.readFile("new.txt","utf-8",function(err,data){
    data=data+" Hey Added " ;
       console.log(data)
       })
}

writeintofile();
console.log("hey");
