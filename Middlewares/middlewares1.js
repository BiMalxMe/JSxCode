
const express =require('express')
const app=express()

app.get("/health-checkup",(req,res)=>{
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;

    //if there is only one user
    if(username != "bimal" || password != "pass"){
        res.status(403).json({
            msg:"Sorry the username doesnot exists"
        })
        return;
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"Wrong Input"
        })
        return;
    }
    res.status(200).json({
        msg:"you heart is healthy"
    })
})

app.listen(3000)