function newPromise(duration){
    const a=new Promise(function (resolve){
        console.log("Inside function")
        setTimeout(() => {
           resolve();
        }, duration);
    })
    return a;
}
ans=newPromise(1000);
ans.then(function() {
    console.log("Hey I am outer one")
})