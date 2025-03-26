
function newFunc() {
    setTimeout(function(){
        console.log('hi there it me bimal chalise');
    },2000)
}


async function s() {
    const variable=await newFunc();
    console.log("resolce")
}
 s();