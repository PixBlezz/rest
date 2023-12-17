const express= require('express');
const app=express();
const PORT = 8080;
app.use(express.json)
app.get('/shirt',(req,res)=>{
   res.status(200).send({
    'tshirt':'cloth',
    'size':'large'
   })
  }
);
app.post('/tshirt/:id',(req,res)=>{
const{id}=req.params;
const{logo}=req.body;

})