const  express=require('express')
const app=express()
app.use(express.json())

app.post('/',(req,res)=>{
    const kidneys=req.body.kidney;
    kidneyLength=kidneys.length;
   res.send("the total numebr of kidnys are "+kidneyLength)
})
//catching all the input except the upper one

app.use((err,req,res,next)=>{
    res.json({
        msg:"sorry bruh incorrect input"
    })
})
app.listen(3000)