const express = require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
app.use(express.json());

app.listen(port,(err)=>{
    if(err){
        console.log("error in running app on port",port);
    }

    console.log("app is running successfully on port",port);
})
