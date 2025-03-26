let obj={
    Name:"bimal",
    age:22,
    ismarried:false
}
function Objecttypes(){
   let key= Object.keys(obj);
   let val= Object.values(obj)
   let hasownproperty= Object.hasOwnProperty("bimal")
    console.log("Keys of the objects are",key);
    console.log("Values of the objects are",val);
    console.log("has own Property",hasownproperty);//is bimal in keys section
    console.log("Values of the objects are",val);
    let newObj=Object.assign(obj,{newProperty:"Real State"})//adding new objects to exisiting objects
    console.log(newObj)
} 
Objecttypes();