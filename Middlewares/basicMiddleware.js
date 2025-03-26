
const express =require('express')
const app=express()


//can define multiple functions inside of the get parameter

app.get('/route',function(req,res,next)
{
   console.log("Hello from the first function") 
   //function stucks here until res is send or next() function is used
    next()
},function(req,res,next){
    console.log("Hello from the second function")
    next()
},function(req,res){
    console.log("Hello From the final function")
    res.json({
        msg:'Thanks for contacting us'
    })
})

app.listen(3000)