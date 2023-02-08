const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Ecommerce_API');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting to database"));

db.once('open',()=>{
    console.log("successfully connected to db");
})

module.exports=db;