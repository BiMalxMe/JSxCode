const express=require('express')
const zod=require('zod')
const app=express()

//input validation using zod
const schema=zod.array(zod.number())

app.use(express.json())


app.post('/',(req,res)=>{
    const kidneys=req.body.kidney;
   const response=schema.safeParse(kidneys)
    if(response.success){
        res.send({response})
    }
    else{
        res.status(411).send("Invalid Input, Cant validate")
    }
})

app.listen(3000)