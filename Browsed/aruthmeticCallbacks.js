function arithmetic_operation(a,b,functype){
  const result=functype(a,b);
  return result;
}
function sum(x,y){
  return x+y;
}
function sub(x,y){
  return x-y;
}
function div(x,y){
  return x/y;
}
function mul(x,y){
  return x*y;
}

answer=arithmetic_operation(1,6,sum);
console.log("The output is : "+answer)