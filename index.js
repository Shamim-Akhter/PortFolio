const express = require('express');
const bodyParser=require('body-parser');
const app=express();
require('dotenv').config();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
const port=process.env.PORT || 8000;
app.get('/',function(req,res){
    res.status(200).sendFile(__dirname+'/views/index.html');
});

app.post('/',function(req,res){
    const formData = req.body;
    console.log(formData);
    res.status(201).sendFile(__dirname+'/views/index.html');
});

app.use((req,res,next)=>{
    res.status(200).sendFile(__dirname+"/views/404.html");
})

app.listen(8000,function(){
    console.log(`Server is listening on port ${port}`);
});