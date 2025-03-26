
const express=require('express');
const app=express();

function userMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    if(username != 'bimal' || password != 'pass'){
        res.status(401).json({
            msg:"Either username or password is not valid "
        })
    }
    else{
        next()
    }
    }
function kidneyMiddleware(req,res,next){
    const kidneyId=req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(401).json({
            msg:"Kidney id is not valid "
        })
    }
    else{
        next()
    }
    }
    app.get('/',userMiddleware,kidneyMiddleware,(req,res)=>{
        //can do something here
        res.json({msg:"Kidney is healthy bruh"})
    })
    app.use((req,res)=>{
        res.json({
            msg:"Invalid"
        })
    })
    app.listen(3000)