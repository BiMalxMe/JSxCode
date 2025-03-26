let value=new Promise(function(resolve){
    setTimeout(function(){
        resolve('Hey Its me');
    },4000)
})

function callback(){
    console.log(value)
}
console.log(value);
value.then(callback);