var array=[22,66,77,99,45]
var new_array=[]
for (let i=0;i<array.length;i++){
    let a=array[((array.length)-1)-i];
    new_array.push(a);
}
console.log(new_array);
