const express=require('express');
const app=express();
const port=3000;
function IsertTodos(Todo_list){ 
    todo=Todo_list;
    let newans=todo.join('\n')
app.get('/',(req,res)=>{
    res.send(newans);
})
}
app.listen(port)

IsertTodos([
    "Dont lie the homework until dawn\n",
    "\nmeet with the client",
    "\nbuy the grocery",
    "\nGet to the bills seminar"
])

//npx nodemon index.js to auto reload the website