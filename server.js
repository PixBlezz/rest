const express= require('express');
const app =express();
const PORT = 8080;
app.use(express.json)
app.get('/tshirt',(req,res)=>{
   res.status(200).send({
   'tshirt':'cloth'
   ,'size':'larger'

   })




});
app.post('/shirt/:id',(req,res)=>{

const {id}=req.params;
const {logo}=req.body;


})