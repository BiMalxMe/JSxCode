const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors())

app.get('/interest',function(req,res){
    const principal=req.query.principal;
    const time=req.query.time;
    const rate=req.query.rate;
    const Interst=(principal*time*rate)/100;
    res.send(Interst.toString())
})
app.listen(8888)