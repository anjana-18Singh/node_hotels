const mongoose=require('mongoose');

//Define  the MongoDB connection URL
const mongoURL='mongodb://localhost:27017/hotels'

//establish the  MongoDB  connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

//Get the deafault connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const db=mongoose.connection;


//Define event listeners for database connection
db.on('connected',()=>{
    console.log("connected to MongoDB server");
})


//Export the database connection
module.exports=db;