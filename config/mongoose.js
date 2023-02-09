const mongoose=require('mongoose');
//connecting to the database
mongoose.connect('mongodb://127.0.0.1/Ecommerce_API');
// acquiring the connection to check if it is succesfull
const db=mongoose.connection;
// checking for the error
db.on('error',console.error.bind(console,"error in connecting to database"));
// up and running then print the statement
db.once('open',()=>{
    console.log("successfully connected to db");
})
// exporting the connection
module.exports=db;